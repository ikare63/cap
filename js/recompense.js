(function(){
  'use strict';
  const CR=window.CapRewards;
  if(!CR)return;

  const qs=s=>document.querySelector(s);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const typeLabels={flame:'Flamme',counter:'Compteur',gauge:'Jauges',accent:'Accent',cards:'Cartes',animation:'Animation'};

  function toast(message){const el=qs('#rewardToast');el.textContent=message;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1800)}

  function render(){
    const snap=CR.sync({feedback:false}),r=snap.rewards,t=snap.trophies;
    qs('#heroStreak').textContent=snap.streak.current;
    qs('#heroRecord').textContent=snap.streak.record;
    qs('#heroShards').textContent=r.shards;
    qs('#heroGel').textContent=r.inventory.gel||0;
    qs('#earnedTotal').textContent=r.earnedTotal||0;

    qs('#questList').innerHTML=t.quests.map(q=>{
      const current=Math.min(q.current,q.next),pct=q.next?Math.min(100,current/q.next*100):100;
      return `<div class="quest-row"><div class="quest-icon">${q.icon}</div><div class="quest-main"><div class="quest-title"><strong>${esc(q.label)}</strong><span>${q.current} / ${q.next}</span></div><div class="quest-bar"><i style="width:${pct}%"></i></div><small>Prochain trophée : ${q.icon} ${q.next} ${esc(q.unit)}</small></div></div>`;
    }).join('');

    const catalog=CR.CATALOG;
    qs('#shopGrid').innerHTML=catalog.map(item=>{
      const owned=Boolean(r.owned[item.id]),equipped=r.equipped[item.type]===item.id,cons=item.type==='consumable';
      let label=cons?'Acheter':equipped?'Activé':owned?'Activer':'Obtenir';
      let disabled=!cons&&equipped;
      return `<article class="shop-item ${equipped?'equipped':''}"><div class="shop-icon">${item.icon}</div><div class="shop-copy"><strong>${esc(item.name)}</strong><p>${esc(item.desc)}</p></div><div class="shop-foot"><span>${item.price} ✨</span><button type="button" data-shop="${item.id}" ${disabled?'disabled':''}>${label}</button></div></article>`;
    }).join('');

    const owned=CR.CATALOG.filter(i=>i.type!=='consumable'&&r.owned[i.id]);
    const groups=['flame','counter','gauge','accent','cards','animation'];
    qs('#collectionList').innerHTML=groups.map(type=>{
      const items=owned.filter(i=>i.type===type),active=r.equipped[type]||'default';
      return `<div class="collection-group"><div class="collection-title"><strong>${typeLabels[type]}</strong><button class="text-btn" data-default="${type}" ${active==='default'?'disabled':''}>Par défaut</button></div>${items.length?`<div class="collection-pills">${items.map(i=>`<button class="collection-pill ${active===i.id?'active':''}" data-equip="${i.id}">${i.icon} ${esc(i.name)}</button>`).join('')}</div>`:'<small>Aucune personnalisation obtenue.</small>'}</div>`;
    }).join('');

    const achieved=[...t.achieved].reverse();
    qs('#trophyCount').textContent=t.achieved.length;
    qs('#trophyGrid').innerHTML=achieved.length?achieved.map(x=>`<div class="trophy"><span>${x.icon}</span><strong>${esc(x.label)}</strong></div>`).join(''):'<div class="empty-trophies">Tes premiers trophées apparaîtront ici automatiquement.</div>';

    document.querySelectorAll('[data-shop]').forEach(btn=>btn.onclick=()=>{
      const item=CR.CATALOG.find(i=>i.id===btn.dataset.shop),rr=CR.loadRewards();
      if(item&&item.type!=='consumable'&&rr.owned[item.id]&&rr.equipped[item.type]!==item.id){CR.equip(item.id);toast(`${item.name} activé.`);render();return}
      const res=CR.purchase(btn.dataset.shop);toast(res.message);if(res.ok)render();
    });
    document.querySelectorAll('[data-equip]').forEach(btn=>btn.onclick=()=>{const item=CR.CATALOG.find(i=>i.id===btn.dataset.equip);if(CR.equip(btn.dataset.equip)){toast(`${item?.name||'Style'} activé.`);render()}});
    document.querySelectorAll('[data-default]').forEach(btn=>btn.onclick=()=>{CR.equipDefault(btn.dataset.default);toast('Style par défaut réactivé.');render()});
  }

  if(localStorage.getItem('cap-dark')==='1')document.body.classList.add('dark');
  render();
  document.addEventListener('cap-rewards-updated',()=>{});
})();
