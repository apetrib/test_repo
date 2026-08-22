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

  // The supporting right-column descriptions in Practical Territory and Format stay visible.
})();
