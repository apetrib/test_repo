(()=>{
  const ro=document.documentElement.lang==='ro';

  // Keep the dedicated responsive treatment on the Pilot Logic heading.
  const heading=document.querySelector('.page-automation .diagram-box > h2');
  if(heading) heading.classList.add('pilot-flow-title');

  // Offer-specific proof: process redesign, deployment coordination, adoption and repeatable workflows.
  const experienceBlock=document.querySelector('.page-automation .credibility-note');
  if(experienceBlock){
    const experienceLabel=experienceBlock.querySelector('.cred-label');
    const experienceBody=experienceBlock.querySelector(':scope > p');
    if(ro){
      if(experienceLabel) experienceLabel.textContent='EXPERIENȚA DIN SPATELE ABORDĂRII';
      if(experienceBody) experienceBody.textContent='Abordarea pornește din experiență de redesign al proceselor de business și analytics, coordonarea deployment-ului tehnologic între echipe de business, vendori și IT intern, pregătirea utilizatorilor și transformarea muncii analitice în workflow-uri repetabile. Aceasta include coordonarea deployment-ului și adopției interne Dataiku și dezvoltarea de workflow-uri pentru recomandare, segmentare și predicție. Principiul rămâne același: înțelegem procesul, definim rezultatul și controalele, apoi introducem tehnologia.';
    }else{
      if(experienceLabel) experienceLabel.textContent='EXPERIENCE BEHIND THE APPROACH';
      if(experienceBody) experienceBody.textContent='The approach draws on experience redesigning business and analytics processes, coordinating technology deployment across business teams, vendors and internal IT, enabling users, and turning analytical work into repeatable workflows. This includes coordinating the internal deployment and adoption of Dataiku and developing workflows for recommendation, segmentation and prediction. The principle is consistent: understand the process, define the outcome and controls, then introduce the technology.';
    }
  }
})();
