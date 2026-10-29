/* AI at Work — preview-only request flow.
   The current site has no connected Request Offer backend.
   The two CTAs open one accessible form, preselected with interest=ai-at-work.
   Submitting validates fields and prepares a user-approved email (no silent send). */
(()=>{
  const dialog=document.getElementById('aiat-request-dialog');
  const form=document.getElementById('aiat-request-form');
  const triggers=[...document.querySelectorAll('[data-aiat-open-request]')];
  if(!dialog||!form||triggers.length!==2) return;

  const nameInput=form.querySelector('[name="name"]');
  const close=dialog.querySelector('[data-aiat-close]');
  const status=document.getElementById('aiat-form-status');

  triggers.forEach(link=>link.addEventListener('click',event=>{
    if(typeof dialog.showModal!=='function')return; // no-JS/no-dialog fallback is mailto
    event.preventDefault();
    if(!dialog.open) dialog.showModal();
    if(status) status.textContent='';
    nameInput?.focus();
  }));
  close?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target===dialog)dialog.close();
  });

  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const values=new FormData(form);
    const take=name=>String(values.get(name)||'').trim();
    const name=take('name');
    const email=take('email');
    const company=take('company');
    const issue=take('problem');
    const interest=take('interest');
    const source=take('source');
    if(interest!=='ai-at-work'||source!=='AI at Work')return;
    const subject='AIHub — AI at Work — solicitare de la '+company;
    const body=[
      'Sursa: '+source,
      'Interes: '+interest,
      'Nume: '+name,
      'Email: '+email,
      'Companie: '+company,
      '',
      'Ce ai vrea să îmbunătățești:',
      issue
    ].join('\n');
    if(status)status.textContent='Se deschide aplicația de email. Solicitarea ajunge la AIHub numai dacă verifici și trimiți emailul.';
    const destination='mailto:bogdan@aihub.ro?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    window.location.href=destination;
  });
})();