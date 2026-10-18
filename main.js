/* =====================================================================
   PAGE CODE: builds the page from js/data.js and runs the interactive bits.
   You normally do not need to edit this file.
   ===================================================================== */
const $=s=>document.querySelector(s);
const ICON="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";

$('#skillGrid').innerHTML=SKILLS.map(g=>`
  <div class="card skill hov reveal">
    <div class="win-bar"><b>${g.dir}</b><span>${g.items.length} items</span></div>
    <ul>${g.items.map(([n,p])=>`<li>${p?`<img src="${ICON}${p}.svg" alt="" loading="lazy" onerror="this.remove()"${/nextjs|express|github|vercel/.test(p)?' style="filter:invert(1)"':''}>`:''}${n}</li>`).join('')}</ul>
  </div>`).join('');

const types=['all',...new Set(PROJECTS.map(p=>p.type))];
$('#filters').innerHTML=types.map((t,i)=>`<button type="button" data-f="${t}" class="${i?'':'on'}">${t}</button>`).join('');
$('#projGrid').innerHTML=PROJECTS.map((p,i)=>`
  <article class="card hov proj reveal" data-type="${p.type}">
    <div class="shot" style="background:${p.bg}">
      ${p.img?`<img src="${p.img}" alt="Screenshot of ${p.title}" loading="lazy">`:`<span class="art">${p.art}</span>`}
      <span class="lbl">${p.label}</span>
    </div>
    <div class="proj-body">
      <h3><span class="n">${String(i+1).padStart(2,'0')}</span>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="acts">${p.links.map(([l,h])=>`<a href="${h}">${l==='code'?'<svg><use href="#i-gh"/></svg>':'<svg><use href="#i-ext"/></svg>'}${l}</a>`).join('')}</div>
    </div>
  </article>`).join('');
document.querySelectorAll('#filters button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.proj').forEach(p=>p.classList.toggle('hide',b.dataset.f!=='all'&&p.dataset.type!==b.dataset.f));
}));

$('#timeline').innerHTML=EXPERIENCE.map(j=>`
  <div class="card job reveal">
    <div class="job-top"><h3>${j.role} <span>@ ${j.org}</span></h3><span class="when">${j.when}</span></div>
    <ul>${j.points.map(p=>`<li>${p}</li>`).join('')}</ul>
    <div class="tags">${j.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
  </div>`).join('');

/* typewriter terminal */
(function(){
  const el=$('#termBody'),user='<span class="u">PS C:\\Users\\you&gt;</span> ';
  const esc=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;');
  const line=(k,t)=>k==='cmd'?`${user}<span class="c">${esc(t)}</span>\n`:`<span class="${k==='key'?'k':''}">${esc(t)}</span>\n`;
  let html='';const render=(x='')=>el.innerHTML=html+x+'<span class="cursor"></span>';
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){TERMINAL.forEach(([k,t])=>html+=line(k,t));html+=user;render();return}
  let i=0,started=false;
  const next=()=>{
    if(i>=TERMINAL.length){html+=user;render();return}
    const [k,t]=TERMINAL[i++];
    if(k!=='cmd'){html+=line(k,t);render();setTimeout(next,380);return}
    let c=0;const type=()=>{if(c<=t.length){render(user+'<span class="c">'+esc(t.slice(0,c++))+'</span>');setTimeout(type,40+Math.random()*50)}else{html+=line(k,t);setTimeout(next,260)}};type();
  };
  render();
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&!started){started=true;o.disconnect();setTimeout(next,300)}},{threshold:.4}).observe(el);
})();

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3)*70+'ms';io.observe(el)});

/* nav: active section, progress bar, back-to-top, mobile menu */
const secs=[...document.querySelectorAll('main section[id]')],navA=[...document.querySelectorAll('#links a')];
addEventListener('scroll',()=>{
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  $('#progress').style.width=(y/h*100)+'%';
  $('#toTop').classList.toggle('show',y>600);
  let cur='';for(const s of secs)if(s.offsetTop-140<=y)cur=s.id;
  navA.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});
$('#burger').addEventListener('click',()=>$('#links').classList.toggle('open'));
navA.forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));

/* contact */
$('#copyEmail').addEventListener('click',async e=>{
  const b=e.currentTarget,s=b.querySelector('small');
  try{await navigator.clipboard.writeText('saadm12570@gmail.com');s.textContent='copied ✓';b.classList.add('done')}
  catch{location.href='mailto:saadm12570@gmail.com'}
  setTimeout(()=>{s.textContent='click to copy';b.classList.remove('done')},2000);
});
$('#form').addEventListener('submit',e=>{
  e.preventDefault();
  const body=`From: ${$('#n').value} <${$('#e').value}>\n\n${$('#m').value}`;
  location.href=`mailto:saadm12570@gmail.com?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(body)}`;
});
$('#yr').textContent=new Date().getFullYear();
