/* 3615 Lénaïc ↔ CAP v2
   - importe le sommeil saisi dans 3615
   - expose à 3615 un instantané CAP : activité du jour, Score Cap d'hier,
     échéance des mensurations et état de la nuit.
*/
(function(){
  'use strict';
  if(!window.LenaicBus)return;

  const SNAPSHOT_KEY='lenaic-cap-snapshot-v1';
  const MEASURE_INTERVAL_DAYS=14;
  let lastSnapshotJson='';

  function validSleep(p){
    return p && Number(p.hours)>0 &&
      [p.quality,p.physical,p.mental].every(v=>Number.isFinite(Number(v)) && Number(v)>=0 && Number(v)<=100);
  }

  function localDateKey(date=new Date()){
    const d=new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function measurementStatus(){
    const rows=Array.isArray(state.measurements)?[...state.measurements].filter(m=>m&&m.date).sort((a,b)=>a.date.localeCompare(b.date)):[];
    const latest=rows.at(-1)||null;
    const today=new Date();today.setHours(12,0,0,0);
    if(!latest){
      return {due:true,latestDate:null,nextDueDate:localDateKey(today),daysUntil:0,intervalDays:MEASURE_INTERVAL_DAYS,label:'PREMIÈRES MENSURATIONS À FAIRE'};
    }
    const last=new Date(latest.date+'T12:00:00');
    const due=new Date(last);due.setDate(due.getDate()+MEASURE_INTERVAL_DAYS);
    const daysUntil=Math.ceil((due-today)/86400000);
    return {
      due:daysUntil<=0,
      latestDate:latest.date,
      nextDueDate:localDateKey(due),
      daysUntil,
      intervalDays:MEASURE_INTERVAL_DAYS,
      label:daysUntil<=0?'MENSURATIONS À FAIRE':`DANS ${daysUntil} JOUR${daysUntil>1?'S':''}`
    };
  }

  function activitySnapshot(){
    const day=dayName();
    const plan=getPlanForDay(day);
    const t=state.training?.[day]||{};
    const today=todayKey();
    const current=t.sessionDate===today || t.date===today;
    let total=1,done=0;
    if(!plan?.rest && !plan?.free){
      total=plan?.exercises?.length||0;
      done=current?(t.completed?total:Object.keys(t.checks||{}).filter(k=>t.checks[k]&&Number(k)<total).length):0;
    }else{
      done=current&&t.completed?1:0;
    }
    const pct=total?Math.round(done/total*100):0;
    return {
      day,
      title:plan?.title||'Activité du jour',
      icon:plan?.icon||'•',
      duration:plan?.duration||'',
      focus:typeof focusLabelForPlan==='function'?focusLabelForPlan(plan):'',
      progress:pct,
      done,
      total,
      completed:Boolean(current&&t.completed),
      rest:Boolean(plan?.rest),
      free:Boolean(plan?.free),
      label:plan?.rest?(done?'REPOS VALIDÉ':'REPOS À VALIDER'):(t.completed&&current?'SÉANCE TERMINÉE':`${done}/${total} EXERCICE${total>1?'S':''}`)
    };
  }

  function yesterdaySnapshot(){
    if(typeof calculateYesterdayScore!=='function')return {score:null,label:'INDISPONIBLE',coverage:0,date:null};
    const y=calculateYesterdayScore();
    const status=y.score==null?null:capScoreLabel(y.score);
    return {
      date:y.key||null,
      score:y.score,
      label:status?.label||'DONNÉES INSUFFISANTES',
      coverage:y.coverage||0
    };
  }

  function sleepSnapshot(){
    const s=ensureDate(todayKey()).sleep||{};
    const rating=typeof sleepRating==='function'?sleepRating(s):{score:0,label:'À renseigner'};
    return {
      hours:Number(s.hours)||0,
      quality:Number(s.quality)||0,
      physical:Number(s.physical)||0,
      mental:Number(s.mental)||0,
      score:Number(rating.score)||0,
      label:rating.label||'À renseigner',
      complete:Boolean(Number(s.hours)>0)
    };
  }

  function nutritionSnapshot(){
    const totals=typeof nutritionTotals==='function'?nutritionTotals():{calories:0,protein:0,carbs:0,fat:0};
    const weight=Number(state.settings?.weight)||61.8;
    const goals={
      calories:Number(state.settings?.calories)||2200,
      protein:weight*(Number(state.settings?.proteinRate)||1.8),
      carbs:weight*(Number(state.settings?.carbRate)||5),
      fat:weight*(Number(state.settings?.fatRate)||1
      )
    };
    const roundedTotals={
      calories:Number(totals.calories)||0,protein:Number(totals.protein)||0,
      carbs:Number(totals.carbs)||0,fat:Number(totals.fat)||0
    };
    return {
      totals:roundedTotals,goals,
      remaining:{
        calories:Math.max(0,goals.calories-roundedTotals.calories),
        protein:Math.max(0,goals.protein-roundedTotals.protein),
        carbs:Math.max(0,goals.carbs-roundedTotals.carbs),
        fat:Math.max(0,goals.fat-roundedTotals.fat)
      }
    };
  }

  function buildSnapshot(){
    return {
      version:1,
      date:todayKey(),
      updatedAt:new Date().toISOString(),
      activity:activitySnapshot(),
      nutrition:nutritionSnapshot(),
      yesterday:yesterdaySnapshot(),
      measurements:measurementStatus(),
      sleep:sleepSnapshot()
    };
  }

  function publishSnapshot(force=false){
    const snap=buildSnapshot();
    const comparable=JSON.stringify({...snap,updatedAt:null});
    if(!force && comparable===lastSnapshotJson)return;
    lastSnapshotJson=comparable;
    localStorage.setItem(SNAPSHOT_KEY,JSON.stringify(snap));
  }

  function processSleepEvents(){
    const events=LenaicBus.pending({type:'sleep.logged',source:'3615',target:'cap'});
    let currentChanged=false;
    events.forEach(event=>{
      const p=event.payload||{};
      if(!validSleep(p)){LenaicBus.ignore(event.id,{consumer:'cap',reason:'invalid-sleep-payload'});return}
      const key=p.date||todayKey();
      const d=ensureDate(key);
      d.sleep={hours:Number(p.hours)||0,quality:Number(p.quality)||0,physical:Number(p.physical)||0,mental:Number(p.mental)||0};
      state.daily[key]=d;
      const rating=sleepRating(d.sleep);
      LenaicBus.ack(event.id,{consumer:'cap',sleepDay:key});
      LenaicBus.publish('sleep.updated',{
        date:key,hours:d.sleep.hours,quality:d.sleep.quality,physical:d.sleep.physical,mental:d.sleep.mental,
        score:rating.score,label:rating.label,moon:rating.moon,sourceLabel:'CAP'
      },{source:'cap',target:'3615'});
      if(key===todayKey())currentChanged=true;
    });
    if(events.length)save();
    if(currentChanged){
      if(typeof loadSleep==='function')loadSleep();
      if(typeof renderToday==='function')renderToday();
      if(typeof renderHistory==='function' && document.getElementById('history')?.classList.contains('active'))renderHistory(30);
    }
    if(events.length)publishSnapshot(true);
  }

  processSleepEvents();
  publishSnapshot(true);

  LenaicBus.subscribe(detail=>{
    if(!detail || (detail.type==='sleep.logged' && detail.source==='3615' && detail.target==='cap'))processSleepEvents();
  });

  // Le snapshot est un état courant : il n'encombre pas la file d'événements du bus.
  // Il est réécrit uniquement lorsque quelque chose a réellement changé.
  setInterval(()=>publishSnapshot(false),1000);
  window.addEventListener('focus',()=>publishSnapshot(true));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)publishSnapshot(true)});
})();
