"""The production site must persist saves without crashing restricted previews."""
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[2]


class StorageAdapterTests(unittest.TestCase):
    def adapter(self):
        src = (ROOT / "site/assets/app.js").read_text()
        start = src.index("const FC_LS =")
        end = src.index("\n})();", start) + len("\n})();")
        return src[start:end]

    def run_js(self, setup, checks):
        result = subprocess.run(
            ["node", "-e", setup + self.adapter() + checks],
            text=True, capture_output=True,
        )
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_native_storage_is_selected_and_used(self):
        self.run_js(
            "const assert=require('node:assert/strict');"
            "const data=new Map();"
            "global.window={localStorage:{"
            "getItem:k=>data.get(k)??null,"
            "setItem:(k,v)=>data.set(k,String(v)),"
            "removeItem:k=>data.delete(k),"
            "clear:()=>data.clear(),"
            "key:i=>[...data.keys()][i]??null,"
            "get length(){return data.size}"
            "}};",
            "assert.equal(FC_LS.persistent,true);"
            "assert.equal(data.size,0);"
            "FC_LS.setItem('favourites','[\"K136\"]');"
            "assert.equal(window.localStorage.getItem('favourites'),'[\"K136\"]');"
            "FC_LS.removeItem('favourites');assert.equal(data.size,0);",
        )

    def test_restricted_storage_uses_working_memory_fallback(self):
        self.run_js(
            "const assert=require('node:assert/strict');global.window={};"
            "Object.defineProperty(window,'localStorage',"
            "{get(){throw new Error('sandbox restriction')}});",
            "assert.equal(FC_LS.persistent,false);"
            "FC_LS.setItem('favourites','K136');"
            "assert.equal(FC_LS.getItem('favourites'),'K136');"
            "assert.equal(FC_LS.length,1);FC_LS.clear();"
            "assert.equal(FC_LS.getItem('favourites'),null);",
        )

    def test_unwritable_storage_falls_back_without_crash(self):
        self.run_js(
            "const assert=require('node:assert/strict');"
            "global.window={localStorage:{setItem(){throw new Error('quota')}}};",
            "assert.equal(FC_LS.persistent,false);"
            "FC_LS.setItem('draft','my essay');"
            "assert.equal(FC_LS.getItem('draft'),'my essay');",
        )


if __name__ == "__main__":
    unittest.main()
