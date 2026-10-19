const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu&&links){
  const closeMenu=()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
}

(()=>{
  const version='visual-24';
  if(document.documentElement.dataset.aihubVisual===version)return;
  document.documentElement.dataset.aihubVisual=version;
  ['01.css','02.css','03.css','04.css','05.css','06.css','07.css','08.css','09.css','10.css'].forEach(file=>{
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href=new URL(`visuals/${file}?v=${version}`,document.baseURI).href;
    document.head.appendChild(link);
  });
  const canonical=document.querySelector('link[rel="canonical"]')?.href||location.href;
  const path=new URL(canonical).pathname;
  const page=path.includes('practical-ai-for-management')?'practical':
    path.includes('ai-workflow-automation')?'automation':
    path.includes('management-reporting-power-bi')?'reporting':
    path.includes('/about/')||path.includes('/ro/despre/')?'about':'home';
  // Romanian is the default homepage language, with explicit EN selection remembered.
  // There is no automatic browser-locale or IP-based language detection.
  document.querySelectorAll('.lang-switch a[lang]').forEach(link=>{
    link.addEventListener('click',()=>{
      try{localStorage.setItem('aihub-language',link.getAttribute('lang'));}catch(_){}
    });
  });
  if(page==='home' && document.documentElement.lang==='en'){
    let chosenLanguage='';
    try{chosenLanguage=localStorage.getItem('aihub-language')||'';}catch(_){}
    if(chosenLanguage!=='en'){
      const target=new URL(document.querySelector('base')?'ro/index.html':'ro/',document.baseURI);
      target.search=location.search;
      target.hash=location.hash;
      location.replace(target.href);
      return;
    }
  }
  document.body.dataset.aihubPage=page;
  const script=document.createElement('script');
  script.src=new URL(`visuals/${page}.js?v=${version}`,document.baseURI).href;
  script.async=false;
  document.body.appendChild(script);
  if(page==='practical'){
    const fixes=document.createElement('script');
    fixes.src=new URL(`visuals/practical-fixes.js?v=${version}`,document.baseURI).href;
    fixes.async=false;
    document.body.appendChild(fixes);
  }
  if(page==='home'){
    const fixes=document.createElement('script');
    fixes.src=new URL(`visuals/home-fixes.js?v=${version}`,document.baseURI).href;
    fixes.async=false;
    document.body.appendChild(fixes);
  }
  if(page==='automation'){
    const fixes=document.createElement('script');
    fixes.src=new URL(`visuals/automation-fixes.js?v=${version}`,document.baseURI).href;
    fixes.async=false;
    document.body.appendChild(fixes);
  }
  if(page==='reporting'){
    const fixes=document.createElement('script');
    fixes.src=new URL(`visuals/reporting-fixes.js?v=${version}`,document.baseURI).href;
    fixes.async=false;
    document.body.appendChild(fixes);
  }
  if(page==='about'){
    const fixes=document.createElement('script');
    fixes.src=new URL(`visuals/about-fixes.js?v=${version}`,document.baseURI).href;
    fixes.async=false;
    document.body.appendChild(fixes);
  }
})();