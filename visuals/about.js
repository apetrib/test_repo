(()=>{
  const ro=document.documentElement.lang==='ro';
  const sections=[...document.querySelectorAll('main > section')];
  const svg=(body)=>`<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" viewBox="0 0 24 24">${body}</svg>`;
  const icons={
    management:svg('<rect height="13" rx="2" width="18" x="3" y="7"></rect><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"></path>'),
    analytics:svg('<path d="M4 19V9M10 19V5M16 19v-7M22 19V3"></path><path d="M3 19h20"></path>'),
    ai:svg('<path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3M9 4v16M15 4v16M9 8h3M12 13h3"></path>'),
    delivery:svg('<path d="m5 12 4 4L19 6"></path>'),
    data:svg('<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>'),
    screen:svg('<path d="M3 6h18v12H3z"></path><path d="M8 22h8M12 18v4M8 10h8M8 14h5"></path>'),
    product:svg('<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"></path><path d="m3 7 9 5 9-5M12 12v10"></path>'),
    shield:svg('<path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z"></path><path d="m8.5 12 2.2 2.2 4.8-5"></path>'),
    compass:svg('<circle cx="12" cy="12" r="9"></circle><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"></path>'),
    workflow:svg('<circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="6" r="2"></circle><circle cx="12" cy="18" r="2"></circle><path d="M7 6h10M6.4 7.5l4.5 8.2M17.6 7.5l-4.5 8.2"></path>')
  };
  document.body.classList.add('page-about');

  const hero=sections[0];
  const wrap=hero?.querySelector('.wrap');
  if(wrap&&!wrap.classList.contains('offer-hero-grid')){
    wrap.classList.add('offer-hero-grid');
    const copy=document.createElement('div'); copy.className='offer-copy';
    [...wrap.children].forEach(el=>copy.appendChild(el));
    const visual=document.createElement('div');
    visual.className='offer-visual about-offer-visual'; visual.setAttribute('role','img');
    visual.setAttribute('aria-label',ro?'Experiență founder-led în business, analytics, AI și livrare':'Founder-led business, analytics, AI and delivery experience');
    const labels=ro?['Management','Analytics','AI & automatizare','Livrare']:['Management','Analytics','AI & automation','Delivery'];
    visual.innerHTML=`<div class="visual-toolbar"><span><i class="live-dot"></i>${ro?'MODEL FOUNDER-LED':'FOUNDER-LED SYSTEM'}</span><b>AIHub</b></div><div class="experience-radar"><svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 500 300"><path d="M250 148 95 66M250 148 405 66M250 148 95 235M250 148 405 235"></path><circle cx="250" cy="148" r="76"></circle><circle cx="250" cy="148" opacity=".35" r="112"></circle></svg><div class="radar-core"><b>${ro?'Rezultate de business':'Business outcomes'}</b></div>${labels.map((label,i)=>`<div class="radar-node r${i+1}"><span>${[icons.management,icons.analytics,icons.ai,icons.delivery][i]}</span><b>${label}</b></div>`).join('')}</div><div class="offer-visual-footer">People → Processes → Decisions</div>`;
    wrap.append(copy,visual);
  }

  const proof=sections[1]?.querySelector('.proof-strip');
  if(proof&&!proof.querySelector('.about-experience-map')){
    const map=document.createElement('div'); map.className='about-experience-map'; map.setAttribute('role','img');
    map.setAttribute('aria-label',ro?'Harta experienței AIHub':'AIHub experience map');
    const labels=ro?['Management','Analytics','AI & automatizare','Livrare']:['Management','Analytics','AI & automation','Delivery'];
    map.innerHTML=`<div class="experience-core"><span>AIHub</span><b>${ro?'Rezultate de business':'Business outcomes'}</b></div>${labels.map((label,i)=>`<div class="experience-node e${i+1}"><span>${[icons.management,icons.analytics,icons.ai,icons.delivery][i]}</span><b>${label}</b></div>`).join('')}<svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1000 220"><path d="M500 110 125 52M500 110 875 52M500 110 125 168M500 110 875 168"></path><circle cx="500" cy="110" r="88"></circle><circle cx="500" cy="110" opacity=".25" r="132"></circle></svg>`;
    proof.prepend(map);
  }

  const addIcons=(selector,list,cls)=>[...document.querySelectorAll(selector)].forEach((el,i)=>{if(!el.querySelector('.'+cls)){const s=document.createElement('span');s.className=cls;s.innerHTML=list[i%list.length];el.prepend(s)}});
  const proofIcons=[icons.management,icons.analytics,icons.data,icons.ai,icons.screen,icons.product];
  addIcons('.proof-item',proofIcons,'proof-icon');
  // Credentials deliberately reuse the same balanced 24×24 glyph family as the proof cards above.
  addIcons('.credential',[icons.ai,icons.management,icons.data,icons.screen,icons.analytics,icons.product],'credential-icon');
  [...sections[2]?.querySelectorAll('.card')||[]].forEach((el,i)=>{if(!el.querySelector('.card-icon')){const d=document.createElement('div');d.className='card-icon';d.innerHTML=[icons.compass,icons.delivery,icons.workflow][i%3];el.prepend(d)}});
  sections[3]?.querySelector('.principle')?.classList.add('visual-principle');
  sections[4]?.querySelector('.final-box')?.classList.add('visual-final-box');
})();