/* CAP 2026 — activités au choix, noms cohérents et suivi des activités. */
(function(){'use strict';
  const ACTIVITY_OPTIONS = [
    ['jogging','Jogging','🏃'],['maison','Séance maison','🏠'],
    ['pec','Séance pec','💪'],['abdos','Séance abdos','🔥'],
    ['obliques','Séance obliques','🔄'],['gainage','Séance gainage','🧱'],
    ['posture','Séance posture','🧘'],['bras','Séance bras','🏋️'],
    ['epaules','Séance épaules','🙆'],['jambes','Séance jambes','🦵']
  ];
  // [Nom, unité] — 2 exercices en 10 min, 3 en 20, 4 en 30.
  const OPTIONAL_EXERCISES = {
    maison:[['Développé au sol avec haltères','reps'],['Écartés au sol adaptés','reps'],['Curl avec haltères','reps'],['Élévations frontales très légères','reps']],
    pec:[['Pompes au mur','reps'],['Pompes inclinées adaptées','reps'],['Pression isométrique des pectoraux','sec'],['Pompes murales rapprochées','reps']],
    abdos:[['Bascule du bassin','reps'],['Crunch contrôlé','reps'],['Dead bug adapté','reps'],['Reverse crunch','reps']],
    obliques:[['Russian twist adapté','reps'],['Gainage latéral adapté','sec'],['Rotations du tronc contrôlées','reps'],['Antirotation avec élastique','reps']],
    gainage:[['Gainage au mur','sec'],['Dead bug adapté','reps'],['Bird-dog adapté','reps'],['Gainage latéral adapté','sec']],
    posture:[['Resserrement des omoplates','reps'],['Glissement des bras au mur','reps'],['Mobilité thoracique','reps'],['Respiration et ouverture douce','sec']],
    bras:[['Curl biceps avec haltères','reps'],['Extension triceps légère','reps'],['Curl marteau adapté','reps'],['Isométrie triceps contre mur','sec']],
    epaules:[['Cercles d’épaules','reps'],['Élévations latérales légères','reps'],['Rotation externe adaptée','reps'],['Rétraction des omoplates','reps']],
    jambes:[['Assis-debout avec appui','reps'],['Pont fessier','reps'],['Demi-squat avec appui','reps'],['Élévation des mollets avec appui','reps']]
  };
  function buildOptional(zone,minutes){
    if(zone==='jogging'){
      const durations={10:[2,6,2],20:[4,12,4],30:[5,20,5]};
      return {zone:'Jogging',minutes,rounds:1,items:[
        ['Marche rapide',durations[minutes][0]+' min'],
        ['Jogging doux',durations[minutes][1]+' min'],
        ['Retour au calme',durations[minutes][2]+' min']
      ],warning:'Cours à allure confortable ; privilégie un terrain stable.'};
    }
    const source=OPTIONAL_EXERCISES[zone]||OPTIONAL_EXERCISES.posture;
    const count=minutes===10?2:minutes===20?3:4;
    const sets=minutes===10?2:3;
    const reps=minutes===10?8:minutes===20?10:12;
    const seconds=minutes===10?15:minutes===20?20:25;
    return {
      zone:ACTIVITY_OPTIONS.find(x=>x[0]===zone)?.[1]||'Séance posture',
      minutes,rounds:sets,
      items:source.slice(0,count).map(([name,kind])=>[name,`${sets} × ${kind==='sec'?seconds+' s':reps}${name.includes('Russian')?' / côté':''}`]),
      warning:'Travaille sans douleur, sans perte d’équilibre ; adapte l’amplitude et le côté droit.'
    };
  }
  
  freeGenerator=function(){
    const t=state.training[selectedTraining]||{};
    const selected=t.freeChoice?.zone||'obliques';
    const minutes=Number(t.freeChoice?.minutes)||20;
    const opt=ACTIVITY_OPTIONS.map(([key,title,icon])=>
      `<option value="${key}" ${key===selected?'selected':''}>${icon} ${title}</option>`).join('');
    return `<div class="cap-free-generator">
      <div class="cap-free-form">
        <label>Quelle activité ?<select id="capFreeZone">${opt}</select></label>
        <label>Combien de temps ?<select id="capFreeMinutes"><option value="10" ${minutes===10?'selected':''}>10 min</option><option value="20" ${minutes===20?'selected':''}>20 min</option><option value="30" ${minutes===30?'selected':''}>30 min</option></select></label>
      </div>
      <p class="cap-free-tip">Aucune séance facultative n’est imposée. Maximum 3 séries par exercice.</p>
      <button class="btn primary" type="button" onclick="generateFree()">Créer ma séance</button>
      <div id="freeResult">${t.generated?renderGenerated(t.generated):''}</div>
      <label class="cap-free-done"><input type="checkbox" ${t.completed?'checked':''} onchange="setDone(this.checked)"> J’ai terminé cette séance</label>
    </div>`;
  };
  generateFree=function(){
    const zone=document.getElementById('capFreeZone')?.value||'obliques';
    const minutes=Number(document.getElementById('capFreeMinutes')?.value)||20;
    const t=state.training[selectedTraining];
    t.generated=buildOptional(zone,minutes);
    t.freeChoice={zone,minutes};
    t.completed=false;
    save(); renderTraining();
  };
  renderGenerated=function(g){
    if(!g||!Array.isArray(g.items))return '';
    const title=escapeHtml(String(g.zone||'Séance optionnelle'));
    return `<div class="cap-free-result">
      <div class="cap-free-result-head"><strong>${title}</strong><span>${Number(g.minutes)||20} min</span></div>
      <p>${escapeHtml(g.warning||'Mouvement contrôlé.')}</p>
      ${g.items.map((x,i)=>{
        const img=exerciseAssetByName(x[0]);
        return `<div class="cap-free-exercise"><img src="${img}" alt="" loading="lazy"><div><strong>${escapeHtml(x[0])}</strong><small>${escapeHtml(String(x[1]))}</small></div></div>`;
      }).join('')}
    </div>`;
  };


 const oldSetDone=window.setDone;
 window.setDone=function(v){
   const day=selectedTraining,plan=getPlanForDay(day),t=state.training?.[day];
   const success=oldSetDone(v);
   if(success!==false && v && plan?.free && t?.generated){
     const date=t.sessionDate||t.date||todayKey(),h=state.trainingHistory?.[date+'::'+day];
     if(h){h.title=t.generated.zone;h.generated=JSON.parse(JSON.stringify(t.generated));h.optional=true;save()}
   }
   return success;
 };
 // Les activités non choisies restent facultatives, y compris le vendredi.
 const oldRenderToday=renderToday;
 renderToday=function(){oldRenderToday();const p=getPlanForDay(dayName());if(p?.free){todayTitle.textContent='Je me bouge aujourd’hui ?';todayIntro.textContent='Activité et durée au choix ou repos, sans pénalité.';todayAction.textContent='Je me bouge';todayBadge.textContent='✨ Facultatif';}};
 const oldRenderWeek=renderWeek;
 renderWeek=function(){oldRenderWeek();const schedule=getWeekSchedule();WEEK_DAYS.forEach((day,i)=>{const key=schedule[day]||day;if(!plans[key]?.free)return;const btn=weekGrid.querySelectorAll('button.day')[i];if(btn&&!state.training[day]?.completed){const status=btn.querySelectorAll('span')[1];if(status&&status.textContent.trim()==='À faire')status.textContent='Facultatif';}})};
 renderToday();renderWeek();
})();
