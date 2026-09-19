(function(){
  'use strict';

  const REWARD_KEY='cap-rewards-v1';
  const CAP_KEY='cap-data';
  const VERSION=1;
  const DAY_MS=86400000;

  const FLAME_SVG='🔥';

  const CATALOG=[
    {id:'flame-azure',type:'flame',name:'Flamme azur',icon:'🔥',price:80,desc:'Une flamme bleutée dans le compteur CAP.'},
    {id:'flame-gold',type:'flame',name:'Flamme dorée',icon:'🔥',price:120,desc:'Une flamme dorée, plus lumineuse.'},
    {id:'counter-minimal',type:'counter',name:'Compteur minimal',icon:'◦',price:70,desc:'Un compteur plus léger, sans fond.'},
    {id:'counter-glass',type:'counter',name:'Compteur verre',icon:'◇',price:100,desc:'Un effet translucide discret dans le header.'},
    {id:'gauge-thin',type:'gauge',name:'Anneaux fins',icon:'◯',price:90,desc:'Des jauges plus fines sur l’accueil et la nutrition.'},
    {id:'gauge-bold',type:'gauge',name:'Anneaux francs',icon:'●',price:90,desc:'Des jauges un peu plus épaisses.'},
    {id:'accent-ocean',type:'accent',name:'Accent océan',icon:'🌊',price:120,desc:'Une touche cyan pour les éléments principaux.'},
    {id:'accent-forest',type:'accent',name:'Accent forêt',icon:'🌿',price:120,desc:'Une touche verte, sobre et calme.'},
    {id:'accent-plum',type:'accent',name:'Accent prune',icon:'🟣',price:120,desc:'Une touche violette pour CAP.'},
    {id:'cards-sharp',type:'cards',name:'Cartes nettes',icon:'▣',price:100,desc:'Des cartes un peu moins arrondies.'},
    {id:'anim-pulse',type:'animation',name:'Validation douce',icon:'✦',price:80,desc:'Le compteur pulse brièvement quand tu gagnes des Éclats.'},
    {id:'anim-spark',type:'animation',name:'Petit éclat',icon:'✨',price:110,desc:'Un petit éclat apparaît près du compteur lors d’un gain.'},
    {id:'gel',type:'consumable',name:'Gel de flamme',icon:'🧊',price:60,desc:'Protège automatiquement une série lors d’une journée manquée.'}
  ];

  const TROPHY_CHAINS=[
    {id:'streak',icon:'🔥',label:'Série CAP',unit:'jours',base:[7,14,30,50,75,100,150,200,300,365,500,750,1000],step:500},
    {id:'sleep',icon:'🌙',label:'Bonnes nuits',unit:'nuits',base:[5,10,25,50,100,200,365,500,750,1000],step:500},
    {id:'nutrition',icon:'🥗',label:'Bonnes journées nutrition',unit:'jours',base:[5,10,25,50,100,200,365,500,750,1000],step:500},
    {id:'sessions',icon:'✅',label:'Séances terminées',unit:'séances',base:[5,10,25,50,100,200,300,500,750,1000],step:500},
    {id:'strength',icon:'🏋️',label:'Musculation',unit:'séances',base:[5,10,25,50,100,200,300,500],step:250},
    {id:'swim',icon:'🏊',label:'Natation',unit:'séances',base:[5,10,25,50,100,200,300,500],step:250},
    {id:'run',icon:'🏃',label:'Course',unit:'séances',base:[5,10,25,50,100,200,300,500],step:250},
    {id:'weeks',icon:'🗓️',label:'Semaines sport complètes',unit:'semaines',base:[1,4,12,26,52,100,156,208,260],step:52}
  ];

  const DEFAULT_EQUIPPED={flame:'default',counter:'default',gauge:'default',accent:'default',cards:'default',animation:'default'};

  function blankRewards(){
    return {version:VERSION,shards:0,earnedTotal:0,awarded:{},owned:{},equipped:{...DEFAULT_EQUIPPED},inventory:{gel:0},protectedDates:{},purchaseLog:[],awardLog:[],lastProtectionCheck:null};
  }
  function loadRewards(){
    let r={};
    try{r=JSON.parse(localStorage.getItem(REWARD_KEY)||'{}')||{}}catch(_){r={}}
    const base=blankRewards();
    r={...base,...r};
    r.awarded=r.awarded||{};r.owned=r.owned||{};r.inventory={...base.inventory,...(r.inventory||{})};
    r.equipped={...DEFAULT_EQUIPPED,...(r.equipped||{})};r.protectedDates=r.protectedDates||{};
    r.purchaseLog=Array.isArray(r.purchaseLog)?r.purchaseLog:[];r.awardLog=Array.isArray(r.awardLog)?r.awardLog:[];
    return r;
  }
  function saveRewards(r){localStorage.setItem(REWARD_KEY,JSON.stringify(r));}
  function loadCap(){try{return JSON.parse(localStorage.getItem(CAP_KEY)||'{}')||{}}catch(_){return {}}}
  function dateKey(d){const x=new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`}
  function parseKey(k){return new Date(k+'T12:00:00')}
  function addDays(k,n){const d=parseKey(k);d.setDate(d.getDate()+n);return dateKey(d)}
  function todayKey(){return dateKey(new Date())}
  function yesterdayKey(){const d=new Date();d.setDate(d.getDate()-1);return dateKey(d)}
  function round1(v){return Math.round((Number(v)||0)*10)/10}

  function nutritionTotals(day){
    if(!day)return {calories:0,protein:0,carbs:0,fat:0,hasData:false};
    if(Array.isArray(day.meals)&&day.meals.length){
      const t=day.meals.reduce((a,m)=>({calories:a.calories+(Number(m.calories)||0),protein:a.protein+(Number(m.protein)||0),carbs:a.carbs+(Number(m.carbs)||0),fat:a.fat+(Number(m.fat)||0)}),{calories:0,protein:0,carbs:0,fat:0});
      return {...t,hasData:true};
    }
    const n=day.nutrition||{};const hasData=Boolean(n.calories||n.protein||n.carbs||n.fat);
    return {calories:Number(n.calories)||0,protein:Number(n.protein)||0,carbs:Number(n.carbs)||0,fat:Number(n.fat)||0,hasData};
  }
  function calorieScore(value,target,max){const v=Number(value)||0,t=Number(target)||0;if(v<=0||t<=0)return 0;const lo=t*.9,hi=t*1.1;if(v>=lo&&v<=hi)return max;if(v<lo)return max*Math.max(0,v/lo);return max*Math.max(0,1-(v-hi)/(t*.4));}
  function targetScore(value,target,max){const v=Number(value)||0,t=Number(target)||0;if(v<=0||t<=0)return 0;const ratio=v/t;if(ratio>=.9&&ratio<=1.1)return max;if(ratio<.9)return max*Math.max(0,ratio/.9);return max*Math.max(0,1-(ratio-1.1)/.4);}
  function proteinScore(value,weight,max,optimalStart){const v=Number(value)||0,w=Number(weight)||0,start=Math.max(1.6,Number(optimalStart)||1.8);if(v<=0||w<=0)return 0;const optimal=Math.round(w*start),veryGood=Math.round(w*1.6),sufficient=Math.round(w*1.45),low=Math.round(w*1.2);if(v>=optimal)return max;if(v>=veryGood)return max*.9;if(v>=sufficient)return max*.8;if(v>=low)return max*.65;return max*.65*Math.max(0,v/low);}
  function nutritionScore(cap,key){
    const t=nutritionTotals(cap.daily?.[key]);if(!t.hasData)return null;
    const s=cap.settings||{},w=Number(s.weight)||61.8,goal=Number(s.calories)||2200;
    const points=calorieScore(t.calories,goal,8)+proteinScore(t.protein,w,9,s.proteinRate)+targetScore(t.carbs,w*(Number(s.carbRate)||5),7)+targetScore(t.fat,w*(Number(s.fatRate)||1),6);
    return Math.round(points/30*100);
  }
  function sleepScore(cap,key){
    const s=cap.daily?.[key]?.sleep||{};if(!Number(s.hours))return null;
    const duration=Math.min(100,Number(s.hours)/8*100);
    return Math.round(duration*.3+(Number(s.quality)||0)*.25+(Number(s.physical)||0)*.25+(Number(s.mental)||0)*.2);
  }
  function isGoodSleep(cap,key){const s=sleepScore(cap,key);return s!=null&&s>75}
  function isGoodNutrition(cap,key){const s=nutritionScore(cap,key);return s!=null&&s>75}

  function sessions(cap){return Object.values(cap.trainingHistory||{}).filter(x=>x&&x.completed&&x.date)}
  function completedDates(cap){return new Set(sessions(cap).map(x=>x.date))}
  function dayNameForKey(k){return ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'][parseKey(k).getDay()]}
  function isoWeekInfo(date){const d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));const day=d.getUTCDay()||7;d.setUTCDate(d.getUTCDate()+4-day);const year=d.getUTCFullYear();const start=new Date(Date.UTC(year,0,1));const week=Math.ceil((((d-start)/DAY_MS)+1)/7);return {year,week}}
  function weekKeyForDate(d){const x=isoWeekInfo(d);return `${x.year}-W${String(x.week).padStart(2,'0')}`}
  function defaultSchedule(){return {lundi:'lundi',mardi:'mardi',mercredi:'jeudi',jeudi:'mercredi',vendredi:'vendredi',samedi:'samedi',dimanche:'dimanche'}}
  function scheduleForDate(cap,d){return {...defaultSchedule(),...(cap.weekSchedules?.[weekKeyForDate(d)]||{})}}
  function activityRequirement(cap,key){const d=parseKey(key),day=dayNameForKey(key),activity=(scheduleForDate(cap,d)[day]||day);return ['vendredi','samedi','dimanche'].includes(activity)?'optional':'required'}
  function activityGood(cap,key){if(completedDates(cap).has(key))return true;return activityRequirement(cap,key)==='optional'}
  function dayQualifies(cap,key,rewards){let n=0;if(isGoodSleep(cap,key))n++;if(isGoodNutrition(cap,key))n++;if(activityGood(cap,key))n++;return n>=2||Boolean(rewards?.protectedDates?.[key])}

  function dateRangeStart(cap,rewards){
    const keys=[...Object.keys(cap.daily||{}),...sessions(cap).map(s=>s.date),...Object.keys(rewards?.protectedDates||{})].filter(k=>/^\d{4}-\d{2}-\d{2}$/.test(k)).sort();
    return keys[0]||todayKey();
  }
  function streakStats(cap,rewards){
    const start=dateRangeStart(cap,rewards),today=todayKey();
    let k=start,run=0,record=0,current=0,lastQualified=null;
    while(k<=today){
      const qualified=dayQualifies(cap,k,rewards);
      if(qualified){run++;record=Math.max(record,run);lastQualified=k}else run=0;
      if(k===today)break;k=addDays(k,1);
    }
    const todayGood=dayQualifies(cap,today,rewards);
    if(todayGood){current=run}else{
      const y=yesterdayKey();let cursor=y;current=0;
      while(cursor>=start&&dayQualifies(cap,cursor,rewards)){current++;cursor=addDays(cursor,-1)}
    }
    return {current,record,lastQualified};
  }

  function weekMondayFromKey(key){const d=parseKey(key);const day=d.getDay()||7;d.setDate(d.getDate()-day+1);return d}
  function completeWeekKeys(cap){
    const candidates=new Set();
    sessions(cap).forEach(s=>candidates.add(weekKeyForDate(parseKey(s.date))));
    Object.keys(cap.daily||{}).forEach(k=>{if(/^\d{4}-\d{2}-\d{2}$/.test(k))candidates.add(weekKeyForDate(parseKey(k)))});
    const complete=[];const done=completedDates(cap),today=todayKey();
    candidates.forEach(wk=>{
      const sample=[...Object.keys(cap.daily||{}),...sessions(cap).map(s=>s.date)].find(k=>weekKeyForDate(parseKey(k))===wk);
      if(!sample)return;
      const monday=weekMondayFromKey(sample);const schedule={...defaultSchedule(),...(cap.weekSchedules?.[wk]||{})};
      const dayNames=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
      const required=[];
      for(let i=0;i<7;i++){
        const d=new Date(monday);d.setDate(monday.getDate()+i);const k=dateKey(d);const activity=schedule[dayNames[i]]||dayNames[i];
        if(!['vendredi','samedi','dimanche'].includes(activity))required.push(k);
      }
      if(required.length&&required.every(k=>k<=today&&done.has(k)))complete.push(wk);
    });
    return [...new Set(complete)].sort();
  }

  function awardCandidates(cap){
    const events=[];const keys=new Set([...Object.keys(cap.daily||{}),...sessions(cap).map(s=>s.date)]);const done=completedDates(cap);
    [...keys].sort().forEach(k=>{
      if(isGoodSleep(cap,k))events.push({id:`sleep:${k}`,amount:3,label:'Bonne nuit',date:k});
      if(isGoodNutrition(cap,k))events.push({id:`nutrition:${k}`,amount:4,label:'Bonne journée nutrition',date:k});
      if(done.has(k))events.push({id:`activity:${k}`,amount:5,label:'Séance terminée',date:k});
    });
    completeWeekKeys(cap).forEach(wk=>events.push({id:`week:${wk}`,amount:15,label:'Semaine sportive complète',date:wk}));
    return events;
  }

  function currentStreakBefore(cap,rewards,key){let cursor=addDays(key,-1),count=0,start=dateRangeStart(cap,rewards);while(cursor>=start&&dayQualifies(cap,cursor,rewards)){count++;cursor=addDays(cursor,-1)}return count}
  function syncProtection(cap,rewards){
    const y=yesterdayKey();
    if(!rewards.lastProtectionCheck){rewards.lastProtectionCheck=y;return false}
    let cursor=addDays(rewards.lastProtectionCheck,1),changed=false;
    while(cursor<=y){
      if(!dayQualifies(cap,cursor,rewards)&&currentStreakBefore(cap,rewards,cursor)>0&&(Number(rewards.inventory.gel)||0)>0){
        rewards.inventory.gel--;rewards.protectedDates[cursor]={usedAt:new Date().toISOString()};changed=true;
      }
      rewards.lastProtectionCheck=cursor;cursor=addDays(cursor,1);
    }
    return changed;
  }

  function sync(options){
    const opts={updateUI:true,feedback:false,...(options||{})};const cap=loadCap(),r=loadRewards();let changed=syncProtection(cap,r),gained=0;
    awardCandidates(cap).forEach(ev=>{
      if(r.awarded[ev.id])return;
      r.awarded[ev.id]={amount:ev.amount,label:ev.label,date:ev.date,awardedAt:new Date().toISOString()};
      r.shards+=ev.amount;r.earnedTotal+=ev.amount;gained+=ev.amount;changed=true;
      r.awardLog.push({id:ev.id,amount:ev.amount,label:ev.label,date:ev.date,at:new Date().toISOString()});
    });
    if(r.awardLog.length>400)r.awardLog=r.awardLog.slice(-400);
    if(changed)saveRewards(r);
    applyEffects(r);
    if(opts.updateUI)updateHeader(r,cap);
    if(opts.feedback&&gained>0)playFeedback(r,gained);
    document.dispatchEvent(new CustomEvent('cap-rewards-updated',{detail:{gained,rewards:r}}));
    return snapshot(cap,r);
  }

  function metricData(cap,rewards){
    const ss=streakStats(cap,rewards),all=sessions(cap);
    const goodSleep=Object.keys(cap.daily||{}).filter(k=>isGoodSleep(cap,k)).length;
    const goodNutrition=Object.keys(cap.daily||{}).filter(k=>isGoodNutrition(cap,k)).length;
    const strength=all.filter(s=>/séance|pector|muscu|presse|jambes|dos/i.test(`${s.title||''} ${s.activityKey||''}`)&&!/jogging|natation/i.test(s.title||'')).length;
    const swim=all.filter(s=>/natation/i.test(`${s.title||''} ${s.activityKey||''}`)||s.activityKey==='jeudi').length;
    const run=all.filter(s=>/jogging|course/i.test(`${s.title||''} ${s.activityKey||''}`)).length;
    return {streak:{achieved:ss.record,progress:ss.current},sleep:{achieved:goodSleep,progress:goodSleep},nutrition:{achieved:goodNutrition,progress:goodNutrition},sessions:{achieved:all.length,progress:all.length},strength:{achieved:strength,progress:strength},swim:{achieved:swim,progress:swim},run:{achieved:run,progress:run},weeks:{achieved:completeWeekKeys(cap).length,progress:completeWeekKeys(cap).length},streakStats:ss};
  }
  function thresholdsFor(chain,value){const arr=[...chain.base];while(arr[arr.length-1]<=value)arr.push(arr[arr.length-1]+chain.step);return arr}
  function trophyData(cap,rewards){
    const metrics=metricData(cap,rewards),achieved=[],quests=[];
    TROPHY_CHAINS.forEach(chain=>{
      const m=metrics[chain.id]||{achieved:0,progress:0},thresholds=thresholdsFor(chain,m.achieved),won=thresholds.filter(x=>x<=m.achieved),next=thresholds.find(x=>x>m.achieved);
      won.forEach(t=>achieved.push({chain:chain.id,icon:chain.icon,label:`${chain.label} · ${t} ${chain.unit}`,threshold:t}));
      quests.push({...chain,current:m.progress,record:m.achieved,next});
    });
    return {achieved,quests,metrics};
  }
  function snapshot(cap,rewards){const t=trophyData(cap,rewards);return {rewards,cap,streak:t.metrics.streakStats,trophies:t};}
  function getSnapshot(){return snapshot(loadCap(),loadRewards())}

  function getItem(id){return CATALOG.find(x=>x.id===id)}
  function purchase(id){
    const item=getItem(id);if(!item)return {ok:false,message:'Objet introuvable.'};
    const r=loadRewards();if(item.type!=='consumable'&&r.owned[id])return {ok:false,message:'Déjà obtenu.'};
    if(r.shards<item.price)return {ok:false,message:`Il manque ${item.price-r.shards} ✨.`};
    r.shards-=item.price;
    if(item.type==='consumable')r.inventory.gel=(Number(r.inventory.gel)||0)+1;
    else{r.owned[id]=true;r.equipped[item.type]=id;}
    r.purchaseLog.push({id,price:item.price,at:new Date().toISOString()});
    if(r.purchaseLog.length>200)r.purchaseLog=r.purchaseLog.slice(-200);
    saveRewards(r);applyEffects(r);updateHeader(r,loadCap());document.dispatchEvent(new CustomEvent('cap-rewards-updated',{detail:{purchase:id,rewards:r}}));
    return {ok:true,message:item.type==='consumable'?'Gel ajouté.':`${item.name} activé.`,rewards:r};
  }
  function equip(id){
    const item=getItem(id),r=loadRewards();if(!item||item.type==='consumable'||!r.owned[id])return false;
    r.equipped[item.type]=id;saveRewards(r);applyEffects(r);updateHeader(r,loadCap());document.dispatchEvent(new CustomEvent('cap-rewards-updated',{detail:{equipped:id,rewards:r}}));return true;
  }
  function equipDefault(type){if(!Object.prototype.hasOwnProperty.call(DEFAULT_EQUIPPED,type))return false;const r=loadRewards();r.equipped[type]='default';saveRewards(r);applyEffects(r);updateHeader(r,loadCap());document.dispatchEvent(new CustomEvent('cap-rewards-updated',{detail:{equipped:'default',type,rewards:r}}));return true}

  function clearEffectClasses(){
    const b=document.body;if(!b)return;
    [...b.classList].filter(c=>/^reward-(accent|gauge|cards|counter|flame|anim)-/.test(c)).forEach(c=>b.classList.remove(c));
  }
  function applyEffects(r){
    r=r||loadRewards();if(!document.body)return;clearEffectClasses();
    Object.entries(r.equipped||{}).forEach(([type,id])=>{if(id&&id!=='default')document.body.classList.add(`reward-${type}-${id.replace(`${type}-`,'')}`)});
    const chip=document.getElementById('capRewardLink');if(chip){chip.className='cap-reward-link';const c=r.equipped.counter;if(c&&c!=='default')chip.classList.add(`counter-${c.replace('counter-','')}`);const f=r.equipped.flame;if(f&&f!=='default')chip.classList.add(`flame-${f.replace('flame-','')}`)}
  }
  function updateHeader(r,cap){
    r=r||loadRewards();cap=cap||loadCap();const ss=streakStats(cap,r),st=document.getElementById('capRewardStreak'),sh=document.getElementById('capRewardShards'),gel=document.getElementById('capRewardGel');
    if(st)st.textContent=ss.current;if(sh)sh.textContent=r.shards;if(gel)gel.textContent=r.inventory.gel||0;
    document.querySelectorAll('.cap-flame-icon').forEach(el=>{el.textContent='🔥'});
    document.querySelectorAll('.cap-shard-icon').forEach(el=>{el.textContent='✨️'});
  }
  function playFeedback(r,gained){
    const chip=document.getElementById('capRewardLink');if(!chip)return;const mode=r.equipped.animation;
    if(mode==='anim-pulse'||mode==='anim-spark'){chip.classList.remove('reward-pop');void chip.offsetWidth;chip.classList.add('reward-pop');setTimeout(()=>chip.classList.remove('reward-pop'),700)}
    if(mode==='anim-spark'){
      const s=document.createElement('span');s.className='reward-spark';s.textContent=`+${gained} ✨`;chip.appendChild(s);setTimeout(()=>s.remove(),1200);
    }
  }

  window.CapRewards={REWARD_KEY,CATALOG,TROPHY_CHAINS,FLAME_SVG,sync,getSnapshot,purchase,equip,equipDefault,applyEffects,updateHeader,loadRewards,saveRewards,nutritionScore,sleepScore,isGoodSleep,isGoodNutrition};
  window.addEventListener('storage',e=>{if(e.key===REWARD_KEY||e.key===CAP_KEY)sync({feedback:false})});
})();
