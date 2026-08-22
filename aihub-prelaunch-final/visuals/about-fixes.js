(()=>{
  const ro=document.documentElement.lang==='ro';
  const proof=document.querySelector('.page-about .proof-strip');
  if(!proof) return;

  const intro=proof.querySelector('.proof-intro');
  const bio=intro?.querySelector('.sub');
  if(bio){
    bio.textContent=ro
      ? 'Aproape două decenii de experiență în enterprise business, analytics, management reporting și business management, inclusiv roluri globale de leadership la HP. Activitatea sa a acoperit design de procese de business, framework-uri KPI, suport pentru decizii executive, sisteme BI / data și dezvoltarea capabilității echipelor. În prezent este Chief Data Officer la Innolab.'
      : 'Nearly 2 decades of experience across enterprise business, analytics, management reporting and business management, including global leadership roles at HP. His work has covered business process design, KPI frameworks, executive decision support, BI / data systems and team enablement. He currently serves as Chief Data Officer at Innolab.';
  }

  const items=[...proof.querySelectorAll('.proof-grid .proof-item')];
  const content=ro ? [
    ['Management global & scară','Leadership de business management în operațiuni globale de reseller & retail, inclusiv procese și sisteme care susțineau un canal de aproximativ US$40 mld. anual.'],
    ['Suport pentru decizii executive','KPI-uri strategice, dashboards, tendințe de business și analiză pentru leadership și echipe globale.'],
    ['Sisteme BI / data','Power BI, Tableau, Anaplan și Dataiku; framework-uri KPI self-service și backend-uri de reporting.'],
    ['AI / ML aplicat & automation','Activitate în recomandare, segmentare și sales prediction, plus automatizarea unor procese de analytics.'],
    ['Training & enablement','Coordonare de deployment al platformei, pregătirea echipelor, training Power BI și materiale dezvoltate și livrate.'],
    ['Antreprenoriat & produse','Experiență în distribuție medicală, produse digitale, educație și retail specializat.']
  ] : [
    ['Global management & scale','Business-management leadership across global reseller & retail operations, including processes and systems supporting a channel of approximately US$40bn annually.'],
    ['Executive decision support','Strategic KPIs, dashboards, business trends and analysis for leadership and global teams.'],
    ['BI / data systems','Power BI, Tableau, Anaplan and Dataiku; self-service KPI frameworks and reporting backends.'],
    ['Applied AI / ML & automation','Recommendation, segmentation and sales prediction work, plus automation of analytics processes.'],
    ['Training & enablement','Platform deployment coordination, team enablement, Power BI training, and materials developed and delivered.'],
    ['Entrepreneurship & products','Experience across healthcare distribution, digital products, education and specialty retail.']
  ];

  items.forEach((item,i)=>{
    const [title,body]=content[i]||[];
    if(!title) return;
    const titleEl=item.querySelector(':scope > b');
    const bodyEl=item.querySelector(':scope > span:not(.proof-icon)');
    if(titleEl) titleEl.textContent=title;
    if(bodyEl) bodyEl.textContent=body;
  });
})();
