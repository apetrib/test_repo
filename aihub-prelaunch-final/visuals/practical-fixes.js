(()=>{
  const ro=document.documentElement.lang==='ro';

  // Keep one clear booking CTA wording on the English Practical AI page.
  if(!ro){
    document.querySelectorAll('a[href="https://cal.com/bogdan-apetri-kcqvbj/aihub-20min"]').forEach(a=>{
      if(a.textContent.trim()==='Discuss your team') a.textContent='Book a 20-min conversation';
    });
  }

  // Shorter trust/confidentiality card copy for better rhythm and clearer meaning.
  const cards=document.querySelectorAll('.page-practical .recognition .card');
  const card3=cards[2];
  if(card3){
    const label=card3.querySelector('.num');
    const headline=card3.querySelector('strong');
    const body=card3.querySelector(':scope > p');
    if(ro){
      if(label) label.textContent='Încredere & confidențialitate';
      if(headline) headline.textContent='În ce putem avea încredere — și ce putem distribui?';
      if(body) body.textContent='Echipele au nevoie de reguli clare pentru verificare, surse, utilizare responsabilă și confidențialitate.';
    }else{
      if(label) label.textContent='Trust & confidentiality';
      if(headline) headline.textContent='What can be trusted — and what can be shared?';
      if(body) body.textContent='Teams need clear rules for verification, sources, responsible use and confidentiality.';
    }
  }

  // Keep the supporting right-column description visible; tighten only the requested English copy.
  if(!ro){
    document.querySelectorAll('.section-head').forEach(head=>{
      const eyebrow=head.querySelector('.eyebrow')?.textContent.trim();
      if(eyebrow==='Practical territory'){
        const supporting=head.querySelector(':scope > p');
        if(supporting) supporting.textContent='Examples are adapted to each team’s roles, workflows and decision needs — not to a generic list of vendor features.';
      }
    });
  }

  // Program-relevant founder proof: management work, decision support and repeatable business systems.
  const experienceBlock=document.querySelector('.page-practical .credibility-note');
  if(experienceBlock){
    const experienceLabel=experienceBlock.querySelector('.cred-label');
    const experienceBody=experienceBlock.querySelector(':scope > p');
    if(ro){
      if(experienceLabel) experienceLabel.textContent='EXPERIENȚA DIN SPATELE PROGRAMULUI';
      if(experienceBody) experienceBody.textContent='Programul pornește din aproape două decenii de experiență în management, analytics și sisteme de business, inclusiv coordonare globală de business management, suport pentru decizii executive, framework-uri de KPI și reporting și dezvoltarea de procese și sisteme care susțin deciziile de management la scară mare. Acest background definește și abordarea practică a AI: pornim de la munca reală de management, nevoile de decizie și moduri de lucru care pot fi repetate și îmbunătățite.';
    }else{
      if(experienceLabel) experienceLabel.textContent='EXPERIENCE BEHIND THE PROGRAM';
      if(experienceBody) experienceBody.textContent='The program draws on nearly two decades of management, analytics and business-systems experience, including global business-management coordination, executive decision support, KPI and reporting frameworks, and the development of processes and systems supporting management decisions at scale. That background shapes a practical approach to AI: start from real management work, decision needs and repeatable ways of working.';
    }
  }
})();
