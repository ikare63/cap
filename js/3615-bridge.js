/* 3615 Lénaïc → CAP : import direct du sommeil saisi sur le portail. */
(function(){
  'use strict';
  if(!window.LenaicBus)return;

  function validSleep(p){
    return p && Number(p.hours)>0 &&
      [p.quality,p.physical,p.mental].every(v=>Number.isFinite(Number(v)) && Number(v)>=0 && Number(v)<=100);
  }
  function processSleepEvents(){
    const events=LenaicBus.pending({type:'sleep.logged',source:'3615',target:'cap'});
    let currentChanged=false;
    events.forEach(event=>{
      const p=event.payload||{};
      if(!validSleep(p)){LenaicBus.ignore(event.id,{consumer:'cap',reason:'invalid-sleep-payload'});return}
      const key=p.date||todayKey();
      const d=ensureDate(key);
      d.sleep={
        hours:Number(p.hours)||0,
        quality:Number(p.quality)||0,
        physical:Number(p.physical)||0,
        mental:Number(p.mental)||0
      };
      state.daily[key]=d;
      const rating=sleepRating(d.sleep);
      LenaicBus.ack(event.id,{consumer:'cap',sleepDay:key});
      LenaicBus.publish('sleep.updated',{
        date:key,
        hours:d.sleep.hours,
        quality:d.sleep.quality,
        physical:d.sleep.physical,
        mental:d.sleep.mental,
        score:rating.score,
        label:rating.label,
        moon:rating.moon,
        sourceLabel:'CAP'
      },{source:'cap',target:'3615'});
      if(key===todayKey())currentChanged=true;
    });
    if(events.length)save();
    if(currentChanged){
      if(typeof loadSleep==='function')loadSleep();
      if(typeof renderToday==='function')renderToday();
      if(typeof renderHistory==='function' && document.getElementById('history')?.classList.contains('active'))renderHistory(30);
    }
  }

  processSleepEvents();
  LenaicBus.subscribe(detail=>{
    if(!detail || (detail.type==='sleep.logged' && detail.source==='3615' && detail.target==='cap'))processSleepEvents();
  });
})();
