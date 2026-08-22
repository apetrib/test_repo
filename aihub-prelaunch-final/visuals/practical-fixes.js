(()=>{
  const ro=document.documentElement.lang==='ro';

  // English booking CTA wording — keep the same Cal.com behavior.
  if(!ro){
    document.querySelectorAll('a[href="https://cal.com/bogdan-apetri-kcqvbj/aihub-20min"]').forEach(a=>{
      if(a.textContent.trim()==='Discuss your team') a.textContent='Book a 20-min conversation';
    });
  }

  // Remove the two weak right-column section descriptions requested in review.
  document.querySelectorAll('.section-head').forEach(head=>{
    const eyebrow=head.querySelector('.eyebrow')?.textContent.trim();
    if(['Practical territory','Teritoriu practic','Format'].includes(eyebrow)){
      head.querySelector(':scope > p')?.remove();
    }
  });
})();
