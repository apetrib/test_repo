(()=>{
  if(document.documentElement.lang!=='en') return;
  const card=document.querySelector('.page-home .recognition .grid-4 > .card:nth-child(3)');
  if(!card) return;
  const label=card.querySelector('.num');
  const headline=card.querySelector('strong');
  const body=card.querySelector(':scope > p');
  if(label) label.textContent='03 · WORKFLOW';
  if(headline) headline.textContent='Repetitive information work still depends on valuable people.';
  if(body) body.textContent='Research, document analysis, recaps, classification and synthesis are repeated manually.';
})();
