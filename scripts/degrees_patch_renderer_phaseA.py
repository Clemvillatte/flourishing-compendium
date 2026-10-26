# ONE-SHOT, already applied on 2026-10-26. Do not re-run. For data changes use
# scripts/degrees_apply_assignments.py <degree_id> --write (idempotent).
import re,sys
P='site/assets/app.js'
s=open(P,encoding='utf-8').read()
def rep(old,new,count=1):
    global s
    assert s.count(old)==count, (s.count(old), old[:80])
    s=s.replace(old,new)

# 1. helpers, inserted before degreeProgress
helpers = r'''/* ---------- Assignment model (Phase A, degrees repair 2026-10-26) ----------
   A media reference in requiredMedia/optionalMedia may be a plain
   {source_id, level} (legacy) or carry an ASSIGNMENT: segments (AV windows),
   locator (reading passage), role (teach | revisit | retrieval |
   capstone-return) and note. The global source record keeps intrinsic identity
   only; the assignment says what THIS module asks of the learner. Completion
   is stored per (module, source, assignment), never per bare source_id, so
   finishing one segment cannot mark every later use of the source complete. */
function acadToSec(t){
  const p = String(t||'').split(':').map(Number);
  if(p.some(isNaN)) return 0;
  while(p.length<3) p.unshift(0);
  return p[0]*3600 + p[1]*60 + p[2];
}
function acadFmtClock(sec){
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), x = sec%60;
  const two = n => (n<10?'0':'')+n;
  return h ? `${h}:${two(m)}:${two(x)}` : `${m}:${two(x)}`;
}
function acadRef(m){ return (m && typeof m==='object') ? m : {source_id:m}; }
function acadSegments(ref){
  return (ref && Array.isArray(ref.segments)) ? ref.segments.filter(w=>w && w.start && w.end) : [];
}
function acadHasAssignment(ref){
  return !!(ref && (acadSegments(ref).length || ref.locator || ref.role || ref.note));
}
function acadAssignKey(modId, ref){
  ref = acadRef(ref);
  if(!acadHasAssignment(ref)) return ref.source_id;
  const seg = acadSegments(ref).map(w=>w.start+'-'+w.end).join(',');
  return [modId, ref.source_id, ref.role||'teach', seg||ref.locator||''].join('::');
}
function acadSegTotal(ref){
  return acadSegments(ref).reduce((n,w)=>n + Math.max(0, acadToSec(w.end)-acadToSec(w.start)), 0);
}
const ACAD_ROLE_LABEL = {
  'revisit':'Revisit', 'retrieval':'Retrieval practice', 'capstone-return':'Return to this source'
};
function acadAssignmentText(src, ref){
  ref = acadRef(ref);
  const parts = [];
  const segs = acadSegments(ref);
  if(segs.length){
    parts.push('Watch ' + segs.map(w=>acadFmtClock(acadToSec(w.start))+'\u2013'+acadFmtClock(acadToSec(w.end))).join(' \u00b7 '));
  }
  if(ref.locator){ parts.push((segs.length?'':'Read: ') + ref.locator); }
  if(ref.note){ parts.push(ref.note); }
  return parts.join('. ');
}
function acadRefDuration(src, ref){
  const segs = acadSegments(ref);
  if(segs.length){
    const tot = acadFmtClock(acadSegTotal(ref));
    return src && src.duration ? `${tot} of ${src.duration}` : tot;
  }
  return (src && src.duration) || '';
}
function acadPrereqLabel(p, deg){
  const mod = moduleById(p);
  if(!mod) return p;
  const idx = deg ? (deg.modules||[]).indexOf(p)+1 : 0;
  return idx ? `Module ${acadRoman(idx)} \u2014 ${mod.title}` : mod.title;
}
function acadWatched(modId, ref){ return A.completed.has(acadAssignKey(modId, ref)); }
'''
rep("function degreeProgress(deg){", helpers + "function degreeProgress(deg){")

# 2. degreeProgress per assignment
rep("""    (m.requiredMedia||[]).concat(m.optionalMedia||[]).forEach(r=>{
      if(r && r.source_id){ total++; if(A.completed.has(r.source_id)) done++; }
    });""","""    (m.requiredMedia||[]).concat(m.optionalMedia||[]).forEach(r=>{
      if(r && r.source_id){ total++; if(A.completed.has(acadAssignKey(mid, r))) done++; }
    });""")

# 3. module card: pass ref + module id; drawsOnPriorModules
rep("""    groups[lvl].forEach(m=>{
      const src = sourceById(m.source_id);
      if(!src) return;
      body.appendChild(renderMediaRow(src,null));
    });
  });

  if((mod.gaps||[]).length){""","""    groups[lvl].forEach(m=>{
      const src = sourceById(m.source_id);
      if(!src) return;
      body.appendChild(renderMediaRow(src,null,m,mod.id));
    });
  });
  if(mod.drawsOnPriorModules){
    body.appendChild(el('div','acad-body-h','Draws on earlier modules'));
    body.appendChild(el('p','acad-draws-note',mod.drawsOnPriorModules));
  }

  if((mod.gaps||[]).length){""")

# 4. renderMediaRow
old_start = s.index("function renderMediaRow(src,level){")
old_end = s.index("function openSource(src){")
new_row = r'''function renderMediaRow(src,level,ref,modId){
  ref = ref ? acadRef(ref) : null;
  const key = ref && modId ? acadAssignKey(modId, ref) : src.source_id;
  const row = el('div','acad-media-row'); row.tabIndex=0; row.setAttribute('role','button'); row.setAttribute('aria-label','Open media: ' + (src.title||''));
  if (key) { row.dataset.srcId = src.source_id || ''; row.dataset.assignKey = key; }
  const isWatched = !!(key && A.completed.has(key));
  if (isWatched) row.classList.add('watched');
  if(level){
    const lv = el('span',`acad-media-level${(level||'').toLowerCase()==='mastery'?' mastery':''}${(level||'').toLowerCase()==='advanced'?' advanced':''}`, level);
    row.appendChild(lv);
  } else {
    row.classList.add('no-level');
  }
  const info = el('div','acad-media-info');
  const role = ref && ref.role && ACAD_ROLE_LABEL[ref.role];
  const titleEl = el('div','acad-media-title',src.title||'untitled');
  info.appendChild(titleEl);
  info.appendChild(el('div','acad-media-host',[src.presenter,src.host].filter(Boolean).join(' · ')||''));
  const at = ref ? acadAssignmentText(src, ref) : '';
  if(role || at){
    const line = el('div','acad-media-assign');
    if(role) line.appendChild(el('span','acad-assign-role',role));
    if(at) line.appendChild(document.createTextNode((role?' ':'') + at));
    info.appendChild(line);
  }
  row.appendChild(info);
  const dur = ref ? acadRefDuration(src, ref) : (src.duration||'');
  if(dur){ row.appendChild(el('span','acad-media-duration',dur)); }
  if (isWatched) row.appendChild(el('span','acad-watched-badge','✓ Watched'));
  const open = ()=>openSource(src, ref, modId);
  row.onclick = (e)=>{ e.stopPropagation(); open(); };
  row.onkeydown = (e)=>{
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault(); e.stopPropagation(); open();
    }
  };
  return row;
}

'''
s = s[:old_start] + new_row + s[old_end:]

# 5. openSource + player
rep("""function openSource(src){
  if(!src) return;
  const url = src.canonical_url || (src.youtube_id_or_url && /^https?:/.test(src.youtube_id_or_url) ? src.youtube_id_or_url : `https://www.youtube.com/watch?v=${src.youtube_id_or_url}`);
  if(url) openEmbeddedPlayer(src, url);
}""","""function openSource(src, ref, modId){
  if(!src) return;
  const url = src.canonical_url || (src.youtube_id_or_url && /^https?:/.test(src.youtube_id_or_url) ? src.youtube_id_or_url : `https://www.youtube.com/watch?v=${src.youtube_id_or_url}`);
  if(url) openEmbeddedPlayer(src, url, ref ? acadRef(ref) : null, modId);
}""")
rep("function openEmbeddedPlayer(src, url){","function openEmbeddedPlayer(src, url, ref, modId){")
rep("""  if(src.duration){ head.appendChild(el('span','acad-player-duration',src.duration)); }
  box.appendChild(head);
  const frame = el('div','acad-player-frame');""","""  const playDur = ref ? acadRefDuration(src, ref) : (src.duration||'');
  if(playDur){ head.appendChild(el('span','acad-player-duration',playDur)); }
  const playKey = ref && modId ? acadAssignKey(modId, ref) : src.source_id;
  const playSegs = ref ? acadSegments(ref) : [];
  const playAssign = ref ? acadAssignmentText(src, ref) : '';
  if(ref && (ref.role && ACAD_ROLE_LABEL[ref.role] || playAssign)){
    const al = el('div','acad-player-assign');
    if(ref.role && ACAD_ROLE_LABEL[ref.role]) al.appendChild(el('span','acad-assign-role',ACAD_ROLE_LABEL[ref.role]));
    if(playAssign) al.appendChild(document.createTextNode((ref.role && ACAD_ROLE_LABEL[ref.role] ? ' ' : '') + playAssign));
    head.appendChild(al);
  }
  box.appendChild(head);
  const frame = el('div','acad-player-frame');""")
rep("""    iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;""","""    const embedFor = (w)=> `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1` + (w ? `&start=${acadToSec(w.start)}&end=${acadToSec(w.end)}` : '');
    iframe.src = embedFor(playSegs[0]);""")
rep("""    iframe.title = src.title||'Video player';
    frame.appendChild(iframe);""","""    iframe.title = src.title||'Video player';
    frame.appendChild(iframe);
    if(playSegs.length>1){
      const jump = el('div','acad-player-segments');
      jump.appendChild(el('span','acad-player-segments-label','Assigned segments'));
      playSegs.forEach((w,i)=>{
        const b = el('button','acad-btn ghost acad-seg-btn',`${i+1}. ${acadFmtClock(acadToSec(w.start))}\\u2013${acadFmtClock(acadToSec(w.end))}`);
        b.onclick = ()=>{ iframe.src = embedFor(w); };
        jump.appendChild(b);
      });
      frame.appendChild(jump);
    }""")
# completion per assignment
old_done_start = s.index("  const doneBtn = el('button','acad-btn primary', A.completed.has(src.source_id)?'✓ Watched':'Mark as watched');")
old_done_end = s.index("  foot.appendChild(doneBtn);")
new_done = r'''  const doneBtn = el('button','acad-btn primary', A.completed.has(playKey)?'✓ Watched':'Mark as watched');
  doneBtn.onclick = ()=>{
    if(A.completed.has(playKey)) A.completed.delete(playKey);
    else A.completed.add(playKey);
    const on = A.completed.has(playKey);
    doneBtn.textContent = on?'✓ Watched':'Mark as watched';
    // reflect the change on the media rows in the list behind the player
    document.querySelectorAll('.acad-media-row').forEach(function(r){
      if((r.dataset.assignKey || r.dataset.srcId) !== playKey) return;
      r.classList.toggle('watched', on);
      let b = r.querySelector('.acad-watched-badge');
      if (on && !b) {
        b = document.createElement('span');
        b.className = 'acad-watched-badge';
        b.textContent = '\u2713 Watched';
        r.appendChild(b);
      } else if (!on && b) {
        b.remove();
      }
    });
    saveWatched();
  };
'''
s = s[:old_done_start] + new_done + s[old_done_end:]

# 6. module detail: kicker, prompts, prerequisites, viewing list, optional, drawsOn
rep("""    wrap.appendChild(el('div','acad-modpage-kicker',`Module ${acadRoman(modIdx)} of ${acadRoman(modTotal)} · ${deg.title}`));""","""    wrap.appendChild(el('div','acad-modpage-kicker',`Module ${acadRoman(modIdx)} of ${acadRoman(modTotal)} · ${deg.title}` + (mod.kicker ? ` · ${mod.kicker}` : '')));""")
rep("  const prompt = MOD_PROMPTS[modId];","  const prompt = MOD_PROMPTS[modId] || mod.reflectionPrompt;")
rep("    mod.prerequisites.forEach(p=>ol.appendChild(el('li',null,p)));","    mod.prerequisites.forEach(p=>ol.appendChild(el('li',null,acadPrereqLabel(p, deg))));")
rep("""    groups[lvl].forEach(m=>{
      const src = sourceById(m.source_id);
      if(src) sec.appendChild(renderMediaRow(src,null));
    });
  });
  wrap.appendChild(sec);""","""    groups[lvl].forEach(m=>{
      const src = sourceById(m.source_id);
      if(src) sec.appendChild(renderMediaRow(src,null,m,mod.id));
    });
  });
  if(mod.drawsOnPriorModules){
    sec.appendChild(el('p','acad-draws-note',mod.drawsOnPriorModules));
  }
  wrap.appendChild(sec);""")
rep("""        if(src) sec2.appendChild(renderMediaRow(src,null));""","""        if(src) sec2.appendChild(renderMediaRow(src,null,m,mod.id));""")
open(P,'w',encoding='utf-8').write(s)
print('ok')
