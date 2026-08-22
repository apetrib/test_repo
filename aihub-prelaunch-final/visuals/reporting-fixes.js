(()=>{
  const ro=document.documentElement.lang==='ro';
  const experienceBlock=document.querySelector('body[data-aihub-page="reporting"] .credibility-note');
  if(!experienceBlock) return;

  const experienceLabel=experienceBlock.querySelector('.cred-label');
  const experienceBody=experienceBlock.querySelector(':scope > p');

  if(ro){
    if(experienceLabel) experienceLabel.textContent='EXPERIENȚA DIN SPATELE LUCRĂRII';
    if(experienceBody) experienceBody.textContent='Lucrarea pornește din aproape două decenii de experiență în management reporting, analytics și sisteme de business, inclusiv suport pentru decizii executive, framework-uri de KPI, structuri de self-service reporting și dezvoltarea de procese de raportare folosite de management și echipe globale. Aceasta include lucru cu Power BI, Tableau, Anaplan și backend-uri de reporting concepute pentru a transforma date fragmentate în informație de management mai utilă.';
  }else{
    if(experienceLabel) experienceLabel.textContent='EXPERIENCE BEHIND THE WORK';
    if(experienceBody) experienceBody.textContent='The work draws on nearly two decades of experience in management reporting, analytics and business systems, including executive decision support, KPI frameworks, self-service reporting structures and the development of reporting processes used by management and global teams. This includes work across Power BI, Tableau, Anaplan and reporting backends designed to turn fragmented data into more useful management information.';
  }
})();
