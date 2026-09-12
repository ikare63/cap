/* CAP ↔ Culina bridge v1 — reçoit les repas proposés par Culina. */
(function(){
  'use strict';
  if(!window.LenaicBus)return;

  const inbox=document.getElementById('culinaInbox');
  if(!inbox)return;

  function pendingMeals(){
    return LenaicBus.pending({type:'meal.proposed',source:'culina',target:'cap'})
      .sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  }
  function mealTypeLabel(type){
    return {breakfast:'Petit-déjeuner',lunch:'Déjeuner',dinner:'Dîner',snack:'En-cas'}[type]||'Repas';
  }
  function safe(v){ return typeof escapeHtml==='function'?escapeHtml(v):String(v); }
  function round(v){ return typeof round1==='function'?round1(v):Math.round((Number(v)||0)*10)/10; }
  function eventDateText(e){
    const raw=e.payload?.eatenAt||e.createdAt;
    const d=new Date(raw);if(!Number.isFinite(d.getTime()))return '';
    return d.toLocaleString('fr-FR',{weekday:'short',hour:'2-digit',minute:'2-digit'});
  }
  function componentsPreview(items){
    if(!Array.isArray(items)||!items.length)return '';
    const names=items.slice(0,4).map(x=>safe(x.name)).join(' · ');
    const more=items.length>4?` · +${items.length-4}`:'';
    return `<div class="culina-proposal-components">${names}${more}</div>`;
  }
  function updateNavBadge(count){
    const navBtn=document.querySelector('.nav-nutrition');if(!navBtn)return;
    let badge=navBtn.querySelector('.bus-nav-badge');
    if(!count){badge?.remove();return;}
    if(!badge){badge=document.createElement('span');badge.className='bus-nav-badge';navBtn.insertBefore(badge,navBtn.lastElementChild)}
    badge.textContent=String(count);
  }
  function render(){
    const events=pendingMeals();updateNavBadge(events.length);
    if(!events.length){inbox.hidden=true;inbox.innerHTML='';return;}
    inbox.hidden=false;
    inbox.innerHTML=`<div class="culina-inbox-head"><div><small>Culina → CAP</small><strong>${events.length===1?'1 repas à confirmer':events.length+' repas à confirmer'}</strong></div><span>🍽️</span></div>`+
      events.map(e=>{
        const p=e.payload||{};
        return `<article class="culina-proposal">
          <div class="culina-proposal-main">
            <div class="culina-proposal-kicker">${safe(mealTypeLabel(p.mealType))} · ${safe(eventDateText(e))}</div>
            <strong>${safe(p.name||'Repas Culina')}</strong>
            <div class="culina-proposal-macros"><b>${Math.round(Number(p.calories)||0)} kcal</b><span>P ${round(p.protein)} g</span><span>G ${round(p.carbs)} g</span><span>L ${round(p.fat)} g</span></div>
            ${componentsPreview(p.components)}
          </div>
          <div class="culina-proposal-actions"><button type="button" class="btn primary" onclick="capAcceptCulinaMeal('${e.id}')">Ajouter</button><button type="button" class="btn" onclick="capIgnoreCulinaMeal('${e.id}')">Ignorer</button></div>
        </article>`;
      }).join('');
  }
  function ensureMealsForKey(key){
    const d=ensureDate(key);
    if(!Array.isArray(d.meals))d.meals=[];
    if(d.meals.length===0 && d.nutrition && (d.nutrition.calories||d.nutrition.protein||d.nutrition.carbs||d.nutrition.fat)){
      d.meals.push({
        id:'legacy-'+Date.now(),name:'Total précédent',
        calories:Number(d.nutrition.calories)||0,protein:Number(d.nutrition.protein)||0,
        carbs:Number(d.nutrition.carbs)||0,fat:Number(d.nutrition.fat)||0,
        createdAt:new Date().toISOString()
      });
    }
    return d;
  }
  function showBridgeToast(message){
    let el=document.getElementById('capBusToast');
    if(!el){el=document.createElement('div');el.id='capBusToast';el.className='cap-bus-toast';document.body.appendChild(el)}
    el.textContent=message;el.classList.add('show');clearTimeout(showBridgeToast.t);showBridgeToast.t=setTimeout(()=>el.classList.remove('show'),2400);
  }

  window.capAcceptCulinaMeal=function(eventId){
    const e=LenaicBus.get(eventId);if(!e||e.status!=='pending')return render();
    const p=e.payload||{};
    const eatenAt=new Date(p.eatenAt||e.createdAt||Date.now());
    const key=nutritionDayKey(Number.isFinite(eatenAt.getTime())?eatenAt:new Date());
    const d=ensureMealsForKey(key);
    if(!d.meals.some(m=>m.sourceEventId===eventId)){
      d.meals.push({
        id:'meal-'+Date.now(),
        name:p.name||'Repas Culina',
        mealType:p.mealType||'meal',
        calories:round(p.calories),protein:round(p.protein),carbs:round(p.carbs),fat:round(p.fat),
        components:Array.isArray(p.components)?p.components.map(c=>({name:c.name,amount:c.amount,unit:c.unit,group:c.group||null})):[],
        source:'culina',sourceEventId:eventId,createdAt:(p.eatenAt||e.createdAt||new Date().toISOString())
      });
      d.nutrition=nutritionTotalsFromMeals(d.meals);state.daily[key]=d;save();
    }
    LenaicBus.ack(eventId,{consumer:'cap',mealDay:key});
    if(key===nutritionDayKey()){loadNutrition();renderToday()}
    render();showBridgeToast('✓ Repas Culina ajouté à CAP');
  };

  window.capIgnoreCulinaMeal=function(eventId){
    LenaicBus.ignore(eventId,{consumer:'cap'});render();showBridgeToast('Proposition Culina ignorée');
  };

  render();
  LenaicBus.subscribe(render);
})();
