import re,sys,urllib.request,unicodedata,html,json,os,hashlib
CACHE='/tmp/work/qcache'; os.makedirs(CACHE,exist_ok=True)
def norm(s):
    s=html.unescape(s); s=unicodedata.normalize('NFKC',s).lower()
    s=s.replace('\u2019',"'").replace('\u2018',"'").replace('\u201c','"').replace('\u201d','"').replace('\u2014','-').replace('\u2013','-').replace('\u00a0',' ')
    s=re.sub(r'\[\d+\]','',s); s=re.sub(r'<[a-zA-Z/][^<>]{0,200}>',' ',s)
    s=re.sub(r'[^a-z0-9]+',' ',s); return ' '.join(s.split())
def fetch(u):
    p=f'{CACHE}/{hashlib.md5(u.encode()).hexdigest()}'
    if os.path.exists(p): return open(p,errors='ignore').read()
    try:
        r=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) Chrome/120 Safari/537.36','Accept':'text/html,application/pdf,*/*'})
        d=urllib.request.urlopen(r,timeout=40).read()
        if d[:4]==b'%PDF':
            open(p+'.pdf','wb').write(d); import subprocess
            try: t=subprocess.run(['pdftotext','-q',p+'.pdf','-'],capture_output=True,text=True).stdout
            except Exception: t=''
        else: t=d.decode('utf-8','ignore')
    except Exception as e: t='FETCHFAIL '+str(e)
    open(p,'w').write(t); return t
def run(path):
    md=open(path).read(); bad=0; n=0
    for para in re.split(r'\n\s*\n',md):
        urls=[u for u in re.findall(r'\]\((https?://[^)]+)\)',para) if '#card=' not in u]
        if not urls: continue
        qs=re.findall(r'"([^"]{25,}?)"',para.replace('\u201c','"').replace('\u201d','"'))
        for q in qs:
            n+=1
            parts=[x.strip() for x in re.split(r'\s*(?:\.\.\.|…)\s*',q) if len(x.strip())>12]
            ok=False; fails=[]
            for u in urls:
                t=norm(fetch(u))
                if all(norm(x) in t for x in parts): ok=True;break
            if not ok:
                bad+=1; print('NOT FOUND:',q[:110],'|',[u[:70] for u in urls])
    print('quotes checked',n,'not found',bad)
run(sys.argv[1])
