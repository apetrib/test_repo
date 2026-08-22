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
  const version='visual-14';
  if(document.documentElement.dataset.aihubVisual===version)return;
  document.documentElement.dataset.aihubVisual=version;
  ['01.css','02.css','03.css','04.css','05.css','06.css','07.css','08.css','09.css'].forEach(file=>{
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
  if(page==='about'){
    const fixes=document.createElement('script');
    fixes.src=new URL(`visuals/about-fixes.js?v=${version}`,document.baseURI).href;
    fixes.async=false;
    document.body.appendChild(fixes);
  }
})();