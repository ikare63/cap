
const mealName=document.getElementById('mealName');
const mealCalories=document.getElementById('mealCalories');
const mealProtein=document.getElementById('mealProtein');
const mealCarbs=document.getElementById('mealCarbs');
const mealFat=document.getElementById('mealFat');
const saveMealBtn=document.getElementById('saveMealBtn');
const cancelMealEditBtn=document.getElementById('cancelMealEditBtn');
const mealList=document.getElementById('mealList');
const dayCaloriesTotal=document.getElementById('dayCaloriesTotal');
const dayProteinTotal=document.getElementById('dayProteinTotal');
const dayCarbsTotal=document.getElementById('dayCarbsTotal');
const dayFatTotal=document.getElementById('dayFatTotal');

const nav=document.getElementById('nav');
const todayBadge=document.getElementById('todayBadge');
const todayTitle=document.getElementById('todayTitle');
const todayIntro=document.getElementById('todayIntro');
const recommendation=document.getElementById('recommendation');
const todayAction=document.getElementById('todayAction');
const todayHeroImage=document.getElementById('todayHeroImage');
const todayHeroFocus=document.getElementById('todayHeroFocus');
const todayGreetingDate=document.getElementById('todayGreetingDate');
const recoveryRingBig=document.getElementById('recoveryRingBig');
const recoveryRingValue=document.getElementById('recoveryRingValue');
const recoveryRingLabel=document.getElementById('recoveryRingLabel');
const kpiSleep=document.getElementById('kpiSleep');
const kpiRecovery=document.getElementById('kpiRecovery');
const kpiSleepBar=document.getElementById('kpiSleepBar');
const kpiRecoveryBar=document.getElementById('kpiRecoveryBar');
const kpiSleepGoal=document.getElementById('kpiSleepGoal');
const kpiRecoveryGoal=document.getElementById('kpiRecoveryGoal');
const kpiCalories=document.getElementById('kpiCalories');
const kpiProtein=document.getElementById('kpiProtein');
const kpiCarbs=document.getElementById('kpiCarbs');
const kpiFat=document.getElementById('kpiFat');
const kpiCaloriesBar=document.getElementById('kpiCaloriesBar');
const kpiProteinBar=document.getElementById('kpiProteinBar');
const kpiCarbsBar=document.getElementById('kpiCarbsBar');
const kpiFatBar=document.getElementById('kpiFatBar');
const kpiCaloriesGoal=document.getElementById('kpiCaloriesGoal');
const kpiProteinGoal=document.getElementById('kpiProteinGoal');
const kpiCarbsGoal=document.getElementById('kpiCarbsGoal');
const kpiFatGoal=document.getElementById('kpiFatGoal');
const fatigue=document.getElementById('fatigue');
const fatigueVal=document.getElementById('fatigueVal');
const neuro=document.getElementById('neuro');
const neuroVal=document.getElementById('neuroVal');
const pain=document.getElementById('pain');
const bmiHeight=document.getElementById('bmiHeight');
const bmiWeight=document.getElementById('bmiWeight');
const bmiResult=document.getElementById('bmiResult');
const bmiCategory=document.getElementById('bmiCategory');
const bmiPointer=document.getElementById('bmiPointer');
const bmiText=document.getElementById('bmiText');
const navyNeck=document.getElementById('navyNeck');
const navyWaist=document.getElementById('navyWaist');
const navyResult=document.getElementById('navyResult');
const navyCategory=document.getElementById('navyCategory');
const navyPointer=document.getElementById('navyPointer');
const alerts=document.getElementById('alerts');
const weekGrid=document.getElementById('weekGrid');
const weekTrainingContent=document.getElementById('weekTrainingContent');
const weekEditorContent=document.getElementById('weekEditorContent');
const nutritionAdvice=document.getElementById('nutritionAdvice');
const sleepHours=document.getElementById('sleepHours');
const sleepQuality=document.getElementById('sleepQuality');
const physicalRecovery=document.getElementById('physicalRecovery');
const mentalRecovery=document.getElementById('mentalRecovery');
const sleepMoon=document.getElementById('sleepMoon');
const sleepLabel=document.getElementById('sleepLabel');
const sleepScoreText=document.getElementById('sleepScoreText');
const sleepAdvice=document.getElementById('sleepAdvice');
const historyList=document.getElementById('historyList');
const trendKpis=document.getElementById('trendKpis');
const trendAdvice=document.getElementById('trendAdvice');

const measureHeight=document.getElementById('measureHeight');
const measureHeightLabel=document.getElementById('measureHeightLabel');
const measureDate=document.getElementById('measureDate');
const measureWeight=document.getElementById('measureWeight');
const measureWaist=document.getElementById('measureWaist');
const measureNeck=document.getElementById('measureNeck');
const measureChest=document.getElementById('measureChest');
const measureHips=document.getElementById('measureHips');
const measureArmL=document.getElementById('measureArmL');
const measureArmR=document.getElementById('measureArmR');
const measureThighL=document.getElementById('measureThighL');
const measureThighR=document.getElementById('measureThighR');
const measureMetric=document.getElementById('measureMetric');
const measureKpis=document.getElementById('measureKpis');
const measureComposition=document.getElementById('measureComposition');
const measureChart=document.getElementById('measureChart');
const measureChartStats=document.getElementById('measureChartStats');
const measureStats=document.getElementById('measureStats');
const measureSymmetry=document.getElementById('measureSymmetry');
const measureHistory=document.getElementById('measureHistory');
const saveMeasureBtn=document.getElementById('saveMeasureBtn');
const cancelMeasureEditBtn=document.getElementById('cancelMeasureEditBtn');
const measureBodyImage=document.getElementById('measureBodyImage');

const weeklySummaryPeriod=document.getElementById('weeklySummaryPeriod');
const weeklySummaryKpis=document.getElementById('weeklySummaryKpis');
const weeklySummarySessions=document.getElementById('weeklySummarySessions');
const weeklySummaryAdvice=document.getElementById('weeklySummaryAdvice');
const weeklyProgressions=document.getElementById('weeklyProgressions');
const settingWeight=document.getElementById('settingWeight');
const settingHeight=document.getElementById('settingHeight');
const settingCalories=document.getElementById('settingCalories');
const settingProteinRate=document.getElementById('settingProteinRate');
const settingCarbRate=document.getElementById('settingCarbRate');
const settingFatRate=document.getElementById('settingFatRate');
const exportBtn=document.getElementById('exportBtn');
const importBtn=document.getElementById('importBtn');
const importFile=document.getElementById('importFile');
const darkBtn=document.getElementById('darkBtn');
const mobileThemeBtn=document.getElementById('mobileThemeBtn');

const yesterdayScoreDate=document.getElementById('yesterdayScoreDate');
const yesterdayScoreRing=document.getElementById('yesterdayScoreRing');
const yesterdayScoreValue=document.getElementById('yesterdayScoreValue');
const yesterdayScoreStatus=document.getElementById('yesterdayScoreStatus');
const yesterdayScoreBar=document.getElementById('yesterdayScoreBar');
const yesterdayScoreCoverage=document.getElementById('yesterdayScoreCoverage');
const yesterdaySleepScore=document.getElementById('yesterdaySleepScore');
const yesterdayNutritionScore=document.getElementById('yesterdayNutritionScore');
const yesterdayActivityScore=document.getElementById('yesterdayActivityScore');
const yesterdayWellnessScore=document.getElementById('yesterdayWellnessScore');
const yesterdaySleepBar=document.getElementById('yesterdaySleepBar');
const yesterdayNutritionBar=document.getElementById('yesterdayNutritionBar');
const yesterdayActivityBar=document.getElementById('yesterdayActivityBar');
const yesterdayWellnessBar=document.getElementById('yesterdayWellnessBar');
const yesterdayScoreComment=document.getElementById('yesterdayScoreComment');

const versionEgg=document.getElementById('versionEgg');
const navItems=[['today','Aujourd’hui','🏠'],['week','Semaine','🗓'],['nutrition','Nutrition','🍏'],['sleep','Sommeil','🌙'],['history','Historique','📖'],['trends','Tendances','📊'],['measures','Mesures','📏'],['summary','Bilan','🧾'],['settings','Réglages','⚙️']];

function getISOWeekNumber(date=new Date()){
 const d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));
 const day=d.getUTCDay()||7;
 d.setUTCDate(d.getUTCDate()+4-day);
 const yearStart=new Date(Date.UTC(d.getUTCFullYear(),0,1));
 return Math.ceil((((d-yearStart)/86400000)+1)/7);
}

function getTuesdayPlan(date=new Date()){
 const week=getISOWeekNumber(date);
 const even=week%2===0;

 if(even){
  return {
   title:'Jogging',
   duration:'20–30 min',
   icon:'🏃',
   intro:`Semaine ${week} paire : cardio doux, régularité avant performance.`,
   planKey:`week-${week}-jogging`,
   strength:false,
   exercises:[
    ['Marche rapide','5 min'],
    ['Alternance course / marche','10–20 min'],
    ['Retour au calme','5 min']
   ]
  };
 }

 return {
  title:'Séance Maison — Pectoraux haltères',
  duration:'25–35 min',
  icon:'🏋️',
  intro:`Semaine ${week} impaire : séance pectoraux debout avec haltères, inspirée des 5 mouvements de ta vidéo. 3 séries en mode Normal, 2 en mode Allégé.`,
  planKey:`week-${week}-dumbbell-chest-v3`,
  strength:true,
  exercises:[
   ['Échauffement','4–5 min · 30 s moulinets de bras vers l’avant, 30 s vers l’arrière, 10 ouvertures/fermetures de bras, 10 rotations d’épaules et 10 répétitions lentes des mouvements sans charge'],
   ['Montée vers les pecs — bras écartés','3 × 16 · partir bras ouverts et remonter les haltères vers le haut de la poitrine en gardant le geste contrôlé'],
   ['Croisé bas alterné','3 × 16 · croiser alternativement un haltère devant le bas du buste, puis changer de bras'],
   ['Montée vers les pecs — bras serrés','3 × 16 · garder les bras plus proches du corps et monter les haltères ensemble vers la poitrine'],
   ['Écarté debout — coudes fléchis','3 × 16 · coudes légèrement pliés, ouvrir puis ramener les bras devant la poitrine'],
   ['Écarté debout — ouverture arrière','3 × 16 · ouvrir les bras vers l’arrière de façon contrôlée, sans forcer l’amplitude des épaules'],
   ['Retour au calme','3–4 min · relâcher les bras, cercles d’épaules lents, ouverture douce de la poitrine et respiration calme']
  ]
 };
}

function getWednesdayPlan(date=new Date()){
 const week=getISOWeekNumber(date);
 const even=week%2===0;

 if(even){
  return {
   title:`Séance B — Pectoraux et core`,
   duration:'30–40 min',
   icon:'🅱️',
   intro:`Semaine ${week} paire. Volume recentré sur les pectoraux : gros mouvements à 4 séries, exercices secondaires à 3.`,
   planKey:`week-${week}-upper-v5`,
   exercises:[
    ['Échauffement','Vélo 5–6 min, mobilité épaules et cage thoracique'],
    ['Multi-press','4 × 8–10'],
    ['Développé horizontal','4 × 10–12'],
    ['Développé épaules','3 × 10–12'],
    ['Pec deck','3 × 12–15'],
    ['Pectoraux','3 × 12–15'],
    ['Crunch','3 × 10–12']
   ]
  };
 }

 return {
  title:`Séance B — Jambes et core`,
  duration:'30–40 min',
  icon:'🅱️',
  intro:`Semaine ${week} impaire. Séance d’entretien des jambes : 3 séries par exercice, sans chercher à augmenter le volume.`,
  planKey:`week-${week}-legs-v5`,
  exercises:[
   ['Échauffement','Vélo 5–6 min et mobilité des hanches'],
   ['Presse à cuisses','3 × 10–12'],
   ['Squats','3 × 10–12'],
   ['Flexion des jambes','3 × 10–12'],
   ['Presse à quadriceps','3 × 10–12'],
   ['Abducteurs','3 × 15'],
   ['Crunch','3 × 10–12']
  ]
 };
}

const plans={lundi:{title:'Séance A — Dos, posture et abdos',duration:'35–45 min',icon:'🅰️',planKey:'lundi-standard-v5',intro:'Priorité au dos, à la posture et aux épaules, avec un peu de pectoraux et un travail abdominal court.',exercises:[['Échauffement','Vélo 5–6 min, mobilité hanches et épaules'],['Reverse fly','3 × 8–10'],['Tirage vertical','4 × 10–12'],['Tirage horizontal','4 × 10–12'],['Pec deck','3 × 12–15'],['Élévations latérales','3 × 12–15'],['Crunch','3 × 12']]},mardi:getTuesdayPlan(),mercredi:getWednesdayPlan(),jeudi:{title:'Natation — 1 600 m',duration:'40–60 min',icon:'🏊‍♂️',intro:'Séance d’endurance en crawl, avec une fin plus douce en brasse.',exercises:[['Échauffement','5 min de nage douce et mise en route progressive'],['Crawl — bloc 1','500 m à rythme confortable'],['Crawl — bloc 2','500 m à rythme confortable'],['Crawl — bloc 3','500 m à rythme confortable'],['Brasse — retour au calme','100 m pour finir tranquillement']]},vendredi:{title:'Repos complet',duration:'Journée',icon:'😴',intro:'Le repos fait partie du programme.',rest:true},samedi:{title:'Entraînement libre',duration:'5–30 min',icon:'✨',intro:'Séance sans matériel selon les muscles et la fatigue.',free:true},dimanche:{title:'Off, marche ou libre',duration:'Au choix',icon:'🌿',intro:'Récupération prioritaire.',free:true}};

const WEEK_DAYS=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
function getISOWeekInfo(date=new Date()){
 const d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));
 const day=d.getUTCDay()||7;
 d.setUTCDate(d.getUTCDate()+4-day);
 const year=d.getUTCFullYear();
 const yearStart=new Date(Date.UTC(year,0,1));
 const week=Math.ceil((((d-yearStart)/86400000)+1)/7);
 return {year,week};
}
function currentWeekKey(date=new Date()){
 const {year,week}=getISOWeekInfo(date);
 return `${year}-W${String(week).padStart(2,'0')}`;
}
function defaultWeekSchedule(){
 return {
  lundi:'lundi',
  mardi:'mardi',
  mercredi:'jeudi',
  jeudi:'mercredi',
  vendredi:'vendredi',
  samedi:'samedi',
  dimanche:'dimanche'
 };
}
function getWeekSchedule(){
 const custom=state.weekSchedules?.[currentWeekKey()];
 return {...defaultWeekSchedule(),...(custom||{})};
}
function getActivityKeyForDay(day){
 return getWeekSchedule()[day]||day;
}
function getPlanForDay(day){
 plans.mardi=getTuesdayPlan();
 plans.mercredi=getWednesdayPlan();
 return plans[getActivityKeyForDay(day)]||plans[day];
}
function activityLabel(key){
 if(key==='lundi')return 'Séance A';
 if(key==='mardi')return plans.mardi?.title||'Mardi';
 if(key==='mercredi')return 'Séance B';
 if(key==='jeudi')return 'Natation';
 if(key==='vendredi')return 'Repos';
 if(key==='samedi')return 'Libre';
 if(key==='dimanche')return 'Off / marche';
 return plans[key]?.title||key;
}
function isWeekCustomized(){
 const custom=state.weekSchedules?.[currentWeekKey()];
 if(!custom)return false;
 const def=defaultWeekSchedule();
 return WEEK_DAYS.some(day=>(custom[day]||day)!==def[day]);
}
function setWeekActivity(day,activity){
 const key=currentWeekKey();
 if(!state.weekSchedules[key])state.weekSchedules[key]=defaultWeekSchedule();
 state.weekSchedules[key][day]=activity;
 save();
 renderToday();
 renderWeek();
}
function resetCurrentWeekSchedule(){
 delete state.weekSchedules[currentWeekKey()];
 save();
 selectedTraining=dayName();
 renderToday();
 renderWeek();
}
function shiftCurrentWeekOneDay(){
 state.weekSchedules[currentWeekKey()]={
  lundi:'dimanche',
  mardi:'lundi',
  mercredi:'mardi',
  jeudi:'mercredi',
  vendredi:'jeudi',
  samedi:'vendredi',
  dimanche:'samedi'
 };
 save();
 selectedTraining=dayName();
 renderToday();
 renderWeek();
}
function renderWeekEditor(){
 if(!weekEditorContent)return;
 const schedule=getWeekSchedule();
 const makeOptions=selected=>WEEK_DAYS.map(key=>`<option value="${key}" ${key===selected?'selected':''}>${plans[key].icon} ${activityLabel(key)}</option>`).join('');
 weekEditorContent.innerHTML=`<p class="week-editor-note">Programme habituel : lundi A · mardi jogging/maison selon la semaine · mercredi natation · jeudi B · vendredi repos. Les changements ci-dessous ne concernent que la semaine ${getISOWeekInfo().week}.</p>
 <div class="week-editor-grid">${WEEK_DAYS.map(day=>`<label class="week-editor-row"><strong>${day[0].toUpperCase()+day.slice(1)}</strong><select onchange="setWeekActivity('${day}',this.value)">${makeOptions(schedule[day])}</select></label>`).join('')}</div>
 <div class="week-editor-actions">
  <button class="btn" type="button" onclick="shiftCurrentWeekOneDay()">Décaler tout d’un jour</button>
  <button class="btn" type="button" onclick="resetCurrentWeekSchedule()">Programme habituel</button>
 </div>
 ${isWeekCustomized()?'<span class="week-custom-badge">✦ Planning exceptionnel actif</span>':''}`;
}

const freeSets={'Abdos + posture':[['Respiration abdominale','5 respirations'],['Bascule du bassin','10 répétitions'],['Crunch contrôlé','12 répétitions'],['Touche-chevilles','20 secondes'],['Planche avant-bras','20–30 secondes'],['Bird-dog adapté','6 par côté']],Pectoraux:[['Pompes contre un mur','10–15 répétitions'],['Pompes inclinées','8–12 répétitions'],['Pression paume contre paume','20 secondes']],Jambes:[['Assis-debout','10 répétitions'],['Demi-squats avec appui','10–12 répétitions'],['Pont fessier','12 répétitions']], 'Mobilité douce':[['Respiration lente','5 respirations'],['Cercles d’épaules','30 secondes'],['Rotations du buste','30 secondes'],['Bascule du bassin','10 répétitions']]};
const CAP_PROFILE={sex:'male',heightCm:171};
const dow=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'],todayKey=()=>new Date().toISOString().slice(0,10),dayName=()=>dow[new Date().getDay()];
function nutritionDayKey(date=new Date()){
 const d=new Date(date);
 if(d.getHours()<1)d.setDate(d.getDate()-1);
 const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
 return `${y}-${m}-${day}`;
}
let state=JSON.parse(localStorage.getItem('cap-data')||localStorage.getItem('motoria-data')||'{}');if(!state.settings)state.settings={weight:61.8,height:171,calories:2200,proteinRate:1.8,carbRate:5,fatRate:1};
if(state.settings.calories===2400)state.settings.calories=2200;if(state.settings.carbRate==null)state.settings.carbRate=5;if(state.settings.fatRate==null)state.settings.fatRate=1;if(state.settings.restSeconds==null)state.settings.restSeconds=90;if(!state.daily)state.daily={};if(!state.training)state.training={};if(!state.exerciseLoads)state.exerciseLoads={};if(!state.timerDurations)state.timerDurations={};if(!state.trainingHistory)state.trainingHistory={};
Object.values(state.trainingHistory).forEach(x=>{
 const oldHouseTitle='Séance '+'C — Pectoraux haltères';
 if(x && x.title===oldHouseTitle)x.title='Séance Maison — Pectoraux haltères';
});if(!state.progression)state.progression={};if(!state.weekSchedules)state.weekSchedules={};if(!state.measurements)state.measurements=[];if(!state.measureProfile)state.measureProfile={sex:'male',height:171};
/* Exception demandée pour la semaine ISO 33 de 2026 : programme décalé d'un jour. */
if(!state.weekSchedules['2026-W33'])state.weekSchedules['2026-W33']={lundi:'dimanche',mardi:'lundi',mercredi:'mardi',jeudi:'mercredi',vendredi:'jeudi',samedi:'vendredi',dimanche:'samedi'};
let selectedTraining=dayName();
function ensureDate(k=todayKey()){
 if(!state.daily[k])state.daily[k]={nutrition:{},sleep:{},wellness:{fatigue:5,neuro:3,pain:0}};
 if(!state.daily[k].nutrition)state.daily[k].nutrition={};
 if(!state.daily[k].sleep)state.daily[k].sleep={};
 if(!state.daily[k].wellness)state.daily[k].wellness={fatigue:5,neuro:3,pain:0};
 return state.daily[k];
}
function ensureNutritionDay(){
 const d=ensureDate(nutritionDayKey());
 if(!Array.isArray(d.meals))d.meals=[];
 if(d.meals.length===0 && d.nutrition && (d.nutrition.calories||d.nutrition.protein||d.nutrition.carbs||d.nutrition.fat)){
   d.meals.push({
     id:'legacy-'+Date.now(),
     name:'Total précédent',
     calories:Number(d.nutrition.calories)||0,
     protein:Number(d.nutrition.protein)||0,
     carbs:Number(d.nutrition.carbs)||0,
     fat:Number(d.nutrition.fat)||0,
     createdAt:new Date().toISOString()
   });
 }
 d.nutrition=nutritionTotalsFromMeals(d.meals);
 return d;
}
ensureDate();
function save(){localStorage.setItem('cap-data',JSON.stringify(state))}
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.view===id));if(id==='today')renderToday();if(id==='week')renderWeek();if(id==='nutrition')loadNutrition();if(id==='sleep')loadSleep();if(id==='history')renderHistory(30);if(id==='trends')renderTrends();if(id==='measures')renderMeasures();if(id==='summary')renderWeeklySummary();if(id==='settings')loadSettings();scrollTo(0,0)}
function todayNavIcon(){
 const activity=getActivityKeyForDay(dayName());
 if(activity==='lundi'||activity==='mercredi')return '🏋';
 if(activity==='mardi')return getTuesdayPlan().strength?'🏋':'🏃';
 if(activity==='jeudi')return '🏊‍♂️';
 if(activity==='vendredi')return '🧘';
 return '💪';
}
nav.innerHTML=navItems.map((x,i)=>{const icon=x[0]==='today'?todayNavIcon():x[2];return `<button class="navbtn nav-${x[0]} ${i?'':'active'}" data-view="${x[0]}"><span class="nav-icon">${icon}</span><span>${x[1]}</span></button>`}).join('');nav.querySelectorAll('button').forEach(b=>b.onclick=()=>showView(b.dataset.view));

function localDateKey(date){
 const d=new Date(date);
 const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
 return `${y}-${m}-${day}`;
}
function totalsForDate(key){
 const d=state.daily[key];
 if(!d)return {calories:0,protein:0,carbs:0,fat:0,hasData:false};
 if(Array.isArray(d.meals) && d.meals.length){
  const t=nutritionTotalsFromMeals(d.meals);
  return {...t,hasData:true};
 }
 const n=d.nutrition||{};
 const hasData=Boolean(n.calories||n.protein||n.carbs||n.fat);
 return {calories:Number(n.calories)||0,protein:Number(n.protein)||0,carbs:Number(n.carbs)||0,fat:Number(n.fat)||0,hasData};
}
function calorieTargetScore(value,target,maxPoints){
 const v=Number(value)||0,t=Number(target)||0;
 if(v<=0||t<=0)return 0;
 const low=t*.9,high=t*1.1;
 if(v>=low&&v<=high)return maxPoints;
 if(v<low)return maxPoints*Math.max(0,v/low);
 return maxPoints*Math.max(0,1-(v-high)/(t*.4));
}
function targetScore(value,target,maxPoints){
 const v=Number(value)||0,t=Number(target)||0;
 if(v<=0||t<=0)return 0;
 const ratio=v/t;
 if(ratio>=.9&&ratio<=1.1)return maxPoints;
 if(ratio<.9)return maxPoints*Math.max(0,ratio/.9);
 return maxPoints*Math.max(0,1-(ratio-1.1)/.4);
}
function capScoreLabel(score){
 if(score>=90)return {label:'Excellent',className:'excellent'};
 if(score>=80)return {label:'Très bonne journée',className:'very-good'};
 if(score>=70)return {label:'Bonne journée',className:'good'};
 if(score>=60)return {label:'Journée moyenne',className:'medium'};
 return {label:'Récupération à privilégier',className:'low'};
}
function setScorePart(value,max,labelEl,barEl){
 if(value==null){
  labelEl.textContent='Non renseigné';
  barEl.style.width='0%';
  return;
 }
 labelEl.textContent=`${Math.round(value*10)/10} / ${max}`;
 barEl.style.width=Math.max(0,Math.min(100,value/max*100))+'%';
}
function calculateYesterdayScore(){
 const date=new Date();
 date.setDate(date.getDate()-1);
 const key=localDateKey(date);
 const day=dow[date.getDay()];
 const raw=state.daily[key]||null;
 const parts={};
 let earned=0,available=0;
 const reasons=[];

 // Sommeil — 30 points.
 const s=raw?.sleep||{};
 const sleepFields=[s.hours,s.quality,s.physical,s.mental].map(Number);
 if(sleepFields.some(v=>Number.isFinite(v)&&v>0)){
  const duration=Math.min(10,Math.max(0,(Number(s.hours)||0)/8*10));
  const quality=Math.max(0,Math.min(7,(Number(s.quality)||0)/100*7));
  const physical=Math.max(0,Math.min(7,(Number(s.physical)||0)/100*7));
  const mental=Math.max(0,Math.min(6,(Number(s.mental)||0)/100*6));
  parts.sleep=duration+quality+physical+mental;
  earned+=parts.sleep;available+=30;
  if((Number(s.hours)||0)<6)reasons.push('nuit trop courte');
  else if(parts.sleep>=25)reasons.push('bonne récupération nocturne');
 }

 // Nutrition — 30 points.
 const nt=totalsForDate(key);
 if(nt.hasData){
  const w=Number(state.settings.weight)||61.8;
  parts.nutrition=
    calorieTargetScore(nt.calories,state.settings.calories,8)+
    targetScore(nt.protein,w*state.settings.proteinRate,9)+
    targetScore(nt.carbs,w*state.settings.carbRate,7)+
    targetScore(nt.fat,w*state.settings.fatRate,6);
  earned+=parts.nutrition;available+=30;
  if(parts.nutrition>=26)reasons.push('objectifs nutritionnels bien respectés');
  else if(parts.nutrition<18)reasons.push('apports éloignés des objectifs');
 }

 // Activité — 20 points.
 const tr=state.training[day];
 if(tr && tr.date===key){
  parts.activity=tr.completed?20:5;
  earned+=parts.activity;available+=20;
  reasons.push(tr.completed?'activité prévue accomplie':'activité non terminée');
 }

 // Bien-être — 20 points.
 const w=raw?.wellness;
 if(w && [w.fatigue,w.neuro,w.pain].some(v=>v!==undefined&&v!==null&&v!=='')){
  const fatigue=Number(w.fatigue);
  const neuro=Number(w.neuro);
  const pain=Number(w.pain);
  const fatiguePts=Number.isFinite(fatigue)?Math.max(0,Math.min(8,(10-fatigue)/9*8)):0;
  const neuroPts=Number.isFinite(neuro)?Math.max(0,Math.min(8,(10-neuro)/9*8)):0;
  const painPts=pain===0?4:pain===1?3:pain===2?1.5:0;
  parts.wellness=fatiguePts+neuroPts+painPts;
  earned+=parts.wellness;available+=20;
  if(pain>=2)reasons.push('douleur à surveiller');
  else if(fatigue>=7||neuro>=7)reasons.push('fatigue élevée');
 }

 const score=available?Math.round(earned/available*100):null;
 return {date,key,parts,earned,available,coverage:available,score,reasons};
}
function renderYesterdayScore(){
 const result=calculateYesterdayScore();
 yesterdayScoreDate.textContent=result.date.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
 setScorePart(result.parts.sleep,30,yesterdaySleepScore,yesterdaySleepBar);
 setScorePart(result.parts.nutrition,30,yesterdayNutritionScore,yesterdayNutritionBar);
 setScorePart(result.parts.activity,20,yesterdayActivityScore,yesterdayActivityBar);
 setScorePart(result.parts.wellness,20,yesterdayWellnessScore,yesterdayWellnessBar);

 yesterdayScoreRing.className='score-cap-ring';
 if(result.score==null){
  yesterdayScoreValue.textContent='—';
  yesterdayScoreStatus.textContent='Données insuffisantes';
  yesterdayScoreBar.style.width='0%';
  yesterdayScoreCoverage.textContent='Renseigne au moins une catégorie pour obtenir un score.';
  yesterdayScoreComment.textContent='Le score n’attribue jamais zéro aux informations manquantes.';
  return;
 }
 const status=capScoreLabel(result.score);
 yesterdayScoreRing.classList.add(status.className);
 yesterdayScoreValue.textContent=result.score;
 yesterdayScoreStatus.textContent=status.label;
 yesterdayScoreBar.style.width=result.score+'%';
 yesterdayScoreCoverage.textContent=`Calculé à partir de ${result.coverage} % des données possibles.`;
 const reasonText=result.reasons.length
   ? result.reasons.slice(0,3).join(', ')
   : 'aucun signal particulier détecté';
 yesterdayScoreComment.innerHTML=`<strong>Lecture de Cap</strong><p style="margin-bottom:0">${reasonText[0].toUpperCase()+reasonText.slice(1)}. Ce score est un repère de suivi, pas une note médicale.</p>`;
}

function advice(){const d=ensureDate(),s=d.sleep,w=d.wellness;let score=100,r=[],level='good',action='Séance normale';if(w.neuro>=7){score-=45;r.push('fatigue neurologique élevée');action='Repos ou mobilité douce';level='bad'}if(w.pain>=3){score-=40;r.push('douleur forte ou inhabituelle');action='Ne commence pas une séance intense';level='bad'}else if(w.pain===2){score-=22;r.push('douleur moyenne');action='Séance allégée en évitant la zone douloureuse';level='warn'}else if(w.pain===1){score-=10;r.push('douleur légère');action='Séance normale sans progression, en adaptant tout exercice douloureux'}if(s.hours&&s.hours<6.5){score-=18;r.push('nuit courte')}if(s.physical&&s.physical<50){score-=20;r.push('récupération physique faible')}if(w.fatigue>=7){score-=16;r.push('fatigue générale élevée')}if(level!=='bad'&&score<70){level='warn';action='Séance allégée'}else if(level==='good'&&score<85){level='warn';action='Séance normale sans progression'}let text=`${action}. ${r.length?'Cap se base sur : '+r.join(', ')+'.':'Aucun signal important ne justifie d’alléger.'}`;if(getPlanForDay(dayName()).rest)text='Repos complet prévu aujourd’hui. Le repos compte comme une action utile.';return{level,text}}
function setMiniBar(el,value,goal){
 const pct=goal>0?Math.max(0,Math.min(100,(Number(value)||0)/goal*100)):0;
 el.style.width=pct+'%';
}
function heroAssetForPlan(p){
 const title=(p?.title||'').toLowerCase();
 if(title.includes('natation'))return 'assets/v9/hero/hero-natation.svg';
 if(title.includes('jogging'))return 'assets/v9/hero/hero-jogging.svg';
 if(title.includes('halt'))return 'assets/v9/hero/hero-haltere.svg';
 if(title.includes('jamb'))return 'assets/v9/hero/hero-jambes.svg';
 if(title.includes('pector'))return 'assets/v9/hero/hero-pecs.svg';
 if(title.includes('dos'))return 'assets/v9/hero/hero-dos.svg';
 if(title.includes('repos'))return 'assets/v9/hero/hero-repos.svg';
 if(title.includes('marche')||title.includes('off')||title.includes('libre'))return 'assets/v9/hero/hero-marche.svg';
 return 'assets/v9/hero/hero-dos.svg';
}
function focusLabelForPlan(p){
 const t=(p?.title||'').toLowerCase();
 if(t.includes('natation'))return 'Endurance';
 if(t.includes('jogging'))return 'Cardio';
 if(t.includes('jamb'))return 'Jambes';
 if(t.includes('pector')||t.includes('halt'))return 'Pectoraux';
 if(t.includes('dos'))return 'Dos · Gainage';
 if(t.includes('repos'))return 'Récupération';
 return 'Libre';
}
function recoveryLabel(v){if(!v)return 'À compléter';if(v>=85)return 'Excellente';if(v>=70)return 'Bonne récupération';if(v>=55)return 'Récupération moyenne';return 'À alléger';}
function renderToday(){
 renderYesterdayScore();
 const d=ensureDate(),p=getPlanForDay(dayName()),a=advice();
 if(todayHeroImage)todayHeroImage.src=heroAssetForPlan(p);
 if(todayHeroFocus)todayHeroFocus.textContent=focusLabelForPlan(p);
 if(todayGreetingDate)todayGreetingDate.textContent=new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
 const totals=nutritionTotals();
 const calGoal=Number(state.settings.calories)||2200;
 const proteinGoal=Math.round(state.settings.weight*state.settings.proteinRate);
 const carbsGoal=Math.round(state.settings.weight*state.settings.carbRate);
 const fatGoal=Math.round(state.settings.weight*state.settings.fatRate);

 todayBadge.textContent=`${p.icon} ${p.duration}`;
 todayTitle.textContent=p.title;
 todayIntro.textContent=p.intro;
 recommendation.className=`rec ${a.level}`;
 recommendation.innerHTML=`<strong>Conseil Cap</strong><p>${a.text}</p>`;
 todayAction.textContent=p.rest?'Valider mon repos':'Ouvrir l’entraînement';
 todayAction.onclick=()=>{selectedTraining=dayName();showView('week')};

 const sleepHoursValue=Number(d.sleep.hours)||0;
 const sleepScores=[d.sleep.quality,d.sleep.physical,d.sleep.mental]
   .map(Number)
   .filter(v=>Number.isFinite(v)&&v>0);
 const nightAverage=sleepScores.length
   ? Math.round(sleepScores.reduce((sum,v)=>sum+v,0)/sleepScores.length)
   : 0;

 kpiSleep.textContent=sleepHoursValue?sleepHoursValue+' h':'—';
 kpiRecovery.textContent=nightAverage?nightAverage+' %':'—';
 if(recoveryRingValue)recoveryRingValue.textContent=nightAverage||'—';
 if(recoveryRingLabel)recoveryRingLabel.textContent=recoveryLabel(nightAverage);
 if(recoveryRingBig)recoveryRingBig.style.setProperty('--recovery',Math.max(0,Math.min(100,nightAverage||0)));

 setMiniBar(kpiSleepBar,sleepHoursValue,8);
 setMiniBar(kpiRecoveryBar,nightAverage,100);

 const sleepProgress=kpiSleepBar.parentElement;
 sleepProgress.classList.remove('attention','critical');
 if(sleepHoursValue>0&&sleepHoursValue<6)sleepProgress.classList.add('critical');
 else if(sleepHoursValue>=6&&sleepHoursValue<8)sleepProgress.classList.add('attention');

 kpiSleepGoal.textContent=sleepHoursValue>0&&sleepHoursValue<6?'Attention : moins de 6 h':'/ 8 h';
 kpiRecoveryGoal.textContent=sleepScores.length
   ? 'Moyenne qualité, physique et mental'
   : 'Qualité + récupérations';
 kpiCalories.textContent=totals.calories?Math.round(totals.calories):'0';
 kpiProtein.textContent=round1(totals.protein)+' g';
 kpiCarbs.textContent=round1(totals.carbs)+' g';
 kpiFat.textContent=round1(totals.fat)+' g';

 kpiCaloriesGoal.textContent=`/ ${calGoal.toLocaleString('fr-FR')} kcal`;
 kpiProteinGoal.textContent=`/ ${proteinGoal} g`;
 kpiCarbsGoal.textContent=`/ ${carbsGoal} g`;
 kpiFatGoal.textContent=`/ ${fatGoal} g`;

 setMiniBar(kpiCaloriesBar,totals.calories,calGoal);
 setMiniBar(kpiProteinBar,totals.protein,proteinGoal);
 setMiniBar(kpiCarbsBar,totals.carbs,carbsGoal);
 setMiniBar(kpiFatBar,totals.fat,fatGoal);

 fatigue.value=d.wellness.fatigue;
 fatigueVal.textContent=d.wellness.fatigue;
 neuro.value=d.wellness.neuro;
 neuroVal.textContent=d.wellness.neuro;
 pain.value=d.wellness.pain;
 fatigue.oninput=()=>fatigueVal.textContent=fatigue.value;
 neuro.oninput=()=>neuroVal.textContent=neuro.value;

 bmiHeight.value=CAP_PROFILE.heightCm;
 bmiWeight.value=state.settings.weight;
 calcBMI();
 bmiHeight.oninput=calcBMI;
 bmiWeight.oninput=calcBMI;
 if(!state.settings.navy)state.settings.navy={neck:36.5,waist:80};
 navyNeck.value=state.settings.navy.neck??36.5;
 navyWaist.value=state.settings.navy.waist??80;
 navyNeck.oninput=calcNavy;
 navyWaist.oninput=calcNavy;
 calcNavy();
 renderAlerts();
}
function calcBMI(){
 const h=Number(bmiHeight.value)/100,w=Number(bmiWeight.value);
 if(!h||!w){bmiResult.textContent='—';bmiCategory.textContent='À calculer';bmiPointer.style.left='0%';return}
 const b=w/(h*h);
 let label='';
 if(b<18.5)label='Corpulence insuffisante';
 else if(b<25)label='Corpulence normale';
 else if(b<30)label='Surpoids';
 else label='Obésité';
 bmiResult.textContent=b.toFixed(1).replace('.',',');
 bmiCategory.textContent=label;
 const min=16,max=35;
 const pos=Math.max(0,Math.min(100,(b-min)/(max-min)*100));
 bmiPointer.style.left=pos+'%';
 bmiText.textContent='Repère général : il ne mesure pas directement la masse musculaire ni la répartition des graisses.';
}

function navyCategoryLabel(value){
 if(value<6)return 'Très faible';
 if(value<14)return 'Athlétique';
 if(value<18)return 'Bonne condition';
 if(value<25)return 'Zone moyenne';
 return 'Zone élevée';
}
function calcNavy(){
 const height=CAP_PROFILE.heightCm;
 const neck=Number(navyNeck.value);
 const waist=Number(navyWaist.value);
 if(!neck||!waist||waist<=neck){
  navyResult.textContent='—';
  navyCategory.textContent='Vérifie les mensurations';
  navyPointer.style.left='0%';
  return;
 }
 const circumference=waist-neck;
 const bf=495/(1.0324-0.19077*Math.log10(circumference)+0.15456*Math.log10(height))-450;
 if(!Number.isFinite(bf)||bf<0||bf>75){
  navyResult.textContent='—';
  navyCategory.textContent='Valeurs incohérentes';
  navyPointer.style.left='0%';
  return;
 }
 const rounded=Math.round(bf*10)/10;
 navyResult.textContent=rounded.toFixed(1).replace('.',',')+' %';
 navyCategory.textContent=navyCategoryLabel(rounded);
 navyPointer.style.left=Math.max(0,Math.min(100,(rounded-5)/40*100))+'%';
 if(!state.settings.navy)state.settings.navy={};
 state.settings.navy.neck=neck;
 state.settings.navy.waist=waist;
 save();
}

function saveWellness(){ensureDate().wellness={fatigue:+fatigue.value,neuro:+neuro.value,pain:+pain.value};save();renderToday()}
function renderAlerts(){const d=ensureDate(),pg=Math.round(state.settings.weight*state.settings.proteinRate),a=[];if(d.sleep.hours&&d.sleep.hours<6.5)a.push('Nuit courte : évite de rechercher une performance maximale.');if(d.sleep.physical&&d.sleep.physical<50)a.push('Récupération physique basse : réduis le volume.');if(d.wellness.neuro>=7)a.push('Fatigue neurologique élevée : Cap déconseille une séance exigeante.');if(d.wellness.pain===1)a.push('Douleur légère : conserve seulement les mouvements indolores et ne cherche pas à progresser aujourd’hui.');if(d.wellness.pain===2)a.push('Douleur moyenne : allège la séance et évite la zone concernée.');if(d.wellness.pain>=3)a.push('Douleur forte ou inhabituelle : ne force pas et demande un avis médical si elle persiste.');const nt=nutritionTotals();if(nt.protein&&nt.protein<pg*.8)a.push(`Protéines basses : ${round1(nt.protein)} g sur environ ${pg} g.`);alerts.innerHTML=(a.length?a:['Aucune alerte importante pour aujourd’hui.']).map(x=>`<div class="alert">${x}</div>`).join('')}
function renderWeek(){
 plans.mardi=getTuesdayPlan();
 plans.mercredi=getWednesdayPlan();
 const schedule=getWeekSchedule();
 weekGrid.innerHTML=WEEK_DAYS.map(day=>{
  const activityKey=schedule[day]||day;
  const p=plans[activityKey];
  const t=ensureTrainingSession(day,p,activityKey);
  return `<button class="day ${day===dayName()?'today':''} ${t.completed?'done':''}" onclick="selectedTraining='${day}';renderWeek()">
   <strong>${day[0].toUpperCase()+day.slice(1)}</strong>
   <span>${p.icon} ${p.title}</span>
   <span>${t.completed?'✓ Terminé':day===selectedTraining?'● Sélectionné':'À faire'}</span>
  </button>`
 }).join('');
 renderWeekEditor();
 renderTraining();
}

function shouldShowExerciseLoad(day,index){
 const activityKey=getActivityKeyForDay(day);
 const exercise=plans[activityKey]?.exercises?.[index];
 const name=Array.isArray(exercise)?exercise[0]:'';
 if(activityKey==='lundi')return !['Échauffement','Crunch','Planche avant-bras','Relevés de jambes'].includes(name);
 if(activityKey==='mardi' && plans.mardi?.strength)return !['Échauffement','Retour au calme'].includes(name);
 if(activityKey==='mercredi')return !['Échauffement','Crunch','Planche avant-bras'].includes(name);
 return false;
}
function exerciseLoadKey(day,index){
 const activityKey=getActivityKeyForDay(day);
 const exercise=plans[activityKey]?.exercises?.[index];
 const name=Array.isArray(exercise)?exercise[0]:String(index);
 return `${activityKey}::${name}`;
}
function getExerciseLoad(day,index){
 const key=exerciseLoadKey(day,index);
 const current=state.training?.[day]?.loads?.[index];
 if(current!==undefined && current!==null && current!=='')return current;
 return state.exerciseLoads?.[key]??'';
}
function saveExerciseLoad(day,index,value){
 if(!state.training[day])state.training[day]={checks:{},completed:false,loads:{},series:{}};
 if(!state.training[day].loads)state.training[day].loads={};
 const key=exerciseLoadKey(day,index);
 const old=String(state.exerciseLoads?.[key]??'').trim();
 const next=String(value).trim();
 state.training[day].loads[index]=next;
 if(!state.exerciseLoads)state.exerciseLoads={};
 if(next==='')delete state.exerciseLoads[key];else state.exerciseLoads[key]=next;
 if(old && next && old!==next){
  state.progression[key]={successes:0,lastLoad:next,lastDate:todayKey()};
 }
 save();
}


const plankTimers={};
function timerKey(day,index){
 return exerciseLoadKey(day,index);
}
function getTimerDuration(day,index){
 const key=timerKey(day,index);
 const saved=Number(state.timerDurations?.[key]);
 return Number.isFinite(saved)&&saved>0?saved:30;
}
function saveTimerDuration(day,index,value){
 const seconds=Math.max(5,Math.min(600,Number(value)||30));
 if(!state.timerDurations)state.timerDurations={};
 state.timerDurations[timerKey(day,index)]=seconds;
 save();
 const timer=plankTimers[timerKey(day,index)];
 if(timer && !timer.running){
   timer.total=seconds;
   timer.remaining=seconds;
   updatePlankTimerUI(day,index);
 }
}
function formatTimer(seconds){
 const s=Math.max(0,Math.ceil(seconds));
 const min=Math.floor(s/60);
 const sec=s%60;
 return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}
function ensurePlankTimer(day,index){
 const key=timerKey(day,index);
 if(!plankTimers[key]){
   const duration=getTimerDuration(day,index);
   plankTimers[key]={total:duration,remaining:duration,running:false,interval:null,endAt:null};
 }
 return plankTimers[key];
}
function updatePlankTimerUI(day,index){
 const key=timerKey(day,index);
 const timer=ensurePlankTimer(day,index);
 if(timer.running && timer.endAt){
   timer.remaining=Math.max(0,(timer.endAt-Date.now())/1000);
 }
 const display=document.getElementById(`timer-display-${day}-${index}`);
 const bar=document.getElementById(`timer-bar-${day}-${index}`);
 const startBtn=document.getElementById(`timer-start-${day}-${index}`);
 if(display)display.textContent=formatTimer(timer.remaining);
 if(bar)bar.style.width=(timer.total?Math.max(0,Math.min(100,timer.remaining/timer.total*100)):0)+'%';
 if(startBtn)startBtn.textContent=timer.running?'Pause':'Démarrer';
 if(timer.running && timer.remaining<=0){
   pausePlankTimer(day,index);
   timer.remaining=0;
   if(display)display.textContent='00:00';
   if(bar)bar.style.width='0%';
   if(navigator.vibrate)navigator.vibrate([180,100,180]);
 }
}
function togglePlankTimer(day,index){
 const timer=ensurePlankTimer(day,index);
 if(timer.running){
   pausePlankTimer(day,index);
   return;
 }
 if(timer.remaining<=0)timer.remaining=timer.total;
 timer.running=true;
 timer.endAt=Date.now()+timer.remaining*1000;
 timer.interval=setInterval(()=>updatePlankTimerUI(day,index),200);
 updatePlankTimerUI(day,index);
}
function pausePlankTimer(day,index){
 const timer=ensurePlankTimer(day,index);
 if(timer.running && timer.endAt)timer.remaining=Math.max(0,(timer.endAt-Date.now())/1000);
 timer.running=false;
 timer.endAt=null;
 if(timer.interval){clearInterval(timer.interval);timer.interval=null}
 updatePlankTimerUI(day,index);
}
function resetPlankTimer(day,index){
 const timer=ensurePlankTimer(day,index);
 if(timer.interval)clearInterval(timer.interval);
 timer.total=getTimerDuration(day,index);
 timer.remaining=timer.total;
 timer.running=false;
 timer.interval=null;
 timer.endAt=null;
 updatePlankTimerUI(day,index);
}
function plankTimerHtml(day,index){
 const duration=getTimerDuration(day,index);
 return `<div class="plank-timer">
  <div class="timer-top">
   <div class="timer-display" id="timer-display-${day}-${index}">${formatTimer(duration)}</div>
   <label class="timer-duration">Durée
    <input type="number" min="5" max="600" step="5" value="${duration}" onchange="saveTimerDuration('${day}',${index},this.value)"> sec
   </label>
  </div>
  <div class="timer-progress"><div id="timer-bar-${day}-${index}"></div></div>
  <div class="timer-buttons">
   <button class="btn primary" id="timer-start-${day}-${index}" type="button" onclick="togglePlankTimer('${day}',${index})">Démarrer</button>
   <button class="btn" type="button" onclick="resetPlankTimer('${day}',${index})">Réinitialiser</button>
  </div>
 </div>`;
}


const DAY_INDEX={lundi:1,mardi:2,mercredi:3,jeudi:4,vendredi:5,samedi:6,dimanche:7};
function currentWeekDayDate(day){
 const now=new Date(),current=now.getDay()||7;
 const d=new Date(now);
 d.setHours(12,0,0,0);
 d.setDate(now.getDate()+(DAY_INDEX[day]-current));
 return d;
}
function dateKeyFromDate(d){
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function parseSeriesCount(meta){
 const m=String(meta||'').match(/^\s*(\d+)\s*[×x]/);
 return m?Number(m[1]):0;
}
function parseRepTop(meta){
 const m=String(meta||'').match(/[×x]\s*(\d+)(?:\s*[–-]\s*(\d+))?/);
 return m?Number(m[2]||m[1]):null;
}
function lightenMeta(meta){
 return String(meta).replace(
  /^(\s*)(\d+)(\s*[×x])/,
  (_,lead,count,mult)=>`${lead}${Math.max(1,Number(count)-1)}${mult}`
 );
}
function getLightReason(){
 const d=ensureDate();
 if((d.wellness?.pain||0)>=3)return 'Douleur forte ou inhabituelle : séance intense déconseillée.';
 if((d.wellness?.pain||0)>=2)return 'Douleur moyenne détectée.';
 if((d.wellness?.neuro||0)>=6)return 'Fatigue neurologique élevée.';
 if((d.wellness?.fatigue||0)>=7)return 'Fatigue générale élevée.';
 if(d.sleep?.hours && d.sleep.hours<6)return 'Sommeil inférieur à 6 heures.';
 if(d.sleep?.physical && d.sleep.physical<50)return 'Récupération physique inférieure à 50 %.';
 return '';
}
function isLightMode(t){
 return t.lightOverride==='light';
}
function setTrainingMode(mode){
 const t=state.training[selectedTraining];
 t.lightOverride=mode;
 save();
 renderTraining();
}
function ensureTrainingSession(day,p,activityKey=getActivityKeyForDay(day)){
 if(!state.training[day])state.training[day]={checks:{},completed:false,loads:{},series:{}};
 const t=state.training[day];
 const sessionDate=dateKeyFromDate(currentWeekDayDate(day));
 const planKey=p.planKey||`${activityKey}-standard`;

 if(t.sessionDate!==sessionDate || t.planKey!==planKey){
  state.training[day]={
   checks:{},completed:false,loads:{},series:{},
   sessionDate,planKey,activityKey,lightOverride:getLightReason()?'light':'normal',
   session:{elapsed:0,running:false,startAt:null}
  };
 }
 const current=state.training[day];
 current.activityKey=activityKey;
 if(!current.loads)current.loads={};
 if(!current.series)current.series={};
 if(!current.session)current.session={elapsed:0,running:false,startAt:null};
 return current;
}
function getSeriesState(day,index,count){
 const t=state.training[day];
 if(!t.series[index])t.series[index]=[];
 while(t.series[index].length<count)t.series[index].push({done:false,reps:''});
 if(t.series[index].length>count)t.series[index]=t.series[index].slice(0,count);
 return t.series[index];
}
function exerciseSeriesHtml(day,index,meta,light){
 let count=parseSeriesCount(meta);
 if(!count)return '';
 if(light)count=Math.max(1,count-1);
 const rows=getSeriesState(day,index,count);
 const done=rows.filter(x=>x.done).length;
 return `<div class="series-visual"><div class="series-dots">${rows.map((s,n)=>`<button type="button" class="series-dot ${s.done?'done':''}" onclick="saveSeries('${day}',${index},${n},${!s.done},null)" aria-label="Série ${n+1}"></button>`).join('')}</div><details class="series-details"><summary>${done}/${count} séries · détails</summary><div class="series-grid">${rows.map((s,n)=>`<div class="series-item ${s.done?'done':''}"><label><input type="checkbox" ${s.done?'checked':''} onchange="saveSeries('${day}',${index},${n},this.checked,null)">Série ${n+1}</label><input type="number" min="0" max="100" inputmode="numeric" value="${escapeHtml(String(s.reps??''))}" placeholder="réps" onchange="saveSeries('${day}',${index},${n},null,this.value)"></div>`).join('')}</div></details></div>`;
}
function saveSeries(day,index,seriesIndex,done,reps){
 const t=state.training[day];
 const p=getPlanForDay(day);
 const light=isLightMode(t);
 let count=parseSeriesCount(p.exercises[index][1]);
 if(light)count=Math.max(1,count-1);
 const rows=getSeriesState(day,index,count);
 if(done!==null)rows[seriesIndex].done=done;
 if(reps!==null)rows[seriesIndex].reps=reps;
 t.checks[index]=rows.every(x=>x.done);
 save();
 renderTraining();
}
function progressionKey(day,index){
 return exerciseLoadKey(day,index);
}
function progressionTip(day,index){
 const p=state.progression[progressionKey(day,index)];
 if(!p || p.successes<8)return '';
 return `<div class="progression-tip">✅ ${p.successes} séances réussies avec cette charge : tu peux envisager une légère progression, sans obligation.</div>`;
}
function assessProgression(day,p,t){
 p.exercises.forEach((e,i)=>{
  const count=parseSeriesCount(e[1]);
  if(!count || !shouldShowExerciseLoad(day,i))return;
  const expected=isLightMode(t)?Math.max(1,count-1):count;
  const rows=(t.series?.[i]||[]).slice(0,expected);
  const success=rows.length===expected && rows.every(x=>x.done);
  const key=progressionKey(day,i);
  if(!state.progression[key])state.progression[key]={successes:0,lastLoad:getExerciseLoad(day,i)};
  const pg=state.progression[key];
  pg.successes=success?(pg.successes||0)+1:0;
  pg.lastDate=t.sessionDate;
  pg.lastLoad=getExerciseLoad(day,i);
 });
}
const restTimer={remaining:90,total:90,running:false,endAt:null,interval:null};
function initRestTimer(){
 restTimer.total=Number(state.settings.restSeconds)||90;
 if(!restTimer.running)restTimer.remaining=restTimer.total;
}
function setRestDuration(value){
 state.settings.restSeconds=Math.max(15,Math.min(600,Number(value)||90));
 save();initRestTimer();updateRestTimerUI();
}
function updateRestTimerUI(){
 if(restTimer.running)restTimer.remaining=Math.max(0,(restTimer.endAt-Date.now())/1000);
 const el=document.getElementById('restTimerDisplay'),btn=document.getElementById('restTimerStart'),bar=document.getElementById('restTimerBar');
 if(el)el.textContent=formatTimer(restTimer.remaining);
 if(btn)btn.textContent=restTimer.running?'Pause':'Démarrer';
 if(bar)bar.style.width=Math.max(0,Math.min(100,restTimer.remaining/restTimer.total*100))+'%';
 if(restTimer.running&&restTimer.remaining<=0){
  toggleRestTimer();
  restTimer.remaining=0;
  if(navigator.vibrate)navigator.vibrate([180,100,180]);
 }
}
function toggleRestTimer(){
 if(restTimer.running){
  restTimer.remaining=Math.max(0,(restTimer.endAt-Date.now())/1000);
  restTimer.running=false;clearInterval(restTimer.interval);restTimer.interval=null;
 }else{
  if(restTimer.remaining<=0)restTimer.remaining=restTimer.total;
  restTimer.running=true;restTimer.endAt=Date.now()+restTimer.remaining*1000;
  restTimer.interval=setInterval(updateRestTimerUI,200);
 }
 updateRestTimerUI();
}
function resetRestTimer(){if(restTimer.interval)clearInterval(restTimer.interval);restTimer.running=false;restTimer.total=Number(state.settings.restSeconds)||90;restTimer.remaining=restTimer.total;updateRestTimerUI()}
function getSessionElapsed(t){
 return (t.session?.elapsed||0)+(t.session?.running&&t.session.startAt?Date.now()-t.session.startAt:0);
}
function updateSessionTimerUI(){
 const t=state.training[selectedTraining];if(!t)return;
 const elapsed=getSessionElapsed(t);
 const el=document.getElementById('sessionTimerDisplay'),btn=document.getElementById('sessionTimerStart');
 if(el)el.textContent=formatTimer(elapsed/1000);
 if(btn)btn.textContent=t.session.running?'Pause':'Démarrer';
}
function toggleSessionTimer(){
 const t=state.training[selectedTraining];
 if(t.session.running){
  t.session.elapsed=getSessionElapsed(t);t.session.running=false;t.session.startAt=null;
 }else{
  t.session.running=true;t.session.startAt=Date.now();
 }
 save();renderTraining();
}
function resetSessionTimer(){
 const t=state.training[selectedTraining];
 t.session={elapsed:0,running:false,startAt:null};save();renderTraining();
}
function sessionTimerHtml(){
 const t=state.training[selectedTraining],elapsed=getSessionElapsed(t);
 return `<div class="tool-card session-timer-single">
  <div class="tool-head"><strong>Durée de la séance</strong><span class="tool-time" id="sessionTimerDisplay">${formatTimer(elapsed/1000)}</span></div>
  <div class="tool-actions"><button class="btn primary" id="sessionTimerStart" onclick="toggleSessionTimer()">${t.session.running?'Pause':'Démarrer'}</button><button class="btn" onclick="resetSessionTimer()">Remettre à zéro</button></div>
 </div>`;
}
function restTimerHtml(){
 initRestTimer();
 return `<div class="training-tools"><div class="tool-card">
  <div class="tool-head"><strong>Repos</strong><span class="tool-time" id="restTimerDisplay">${formatTimer(restTimer.remaining)}</span></div>
  <div class="tool-actions"><button class="btn primary" id="restTimerStart" onclick="toggleRestTimer()">${restTimer.running?'Pause':'Démarrer'}</button><button class="btn" onclick="resetRestTimer()">Réinitialiser</button><label class="timer-duration"><input class="tool-duration" type="number" min="15" max="600" step="5" value="${state.settings.restSeconds}" onchange="setRestDuration(this.value)"> sec</label></div>
  <div class="timer-progress"><div id="restTimerBar"></div></div>
 </div></div>`;
}
function formatMinutes(ms){return Math.round((Number(ms)||0)/60000)}
function weekBounds(date=new Date()){
 const d=new Date(date);d.setHours(12,0,0,0);
 const day=d.getDay()||7;
 const start=new Date(d);start.setDate(d.getDate()-day+1);
 const end=new Date(start);end.setDate(start.getDate()+6);
 return {start,end};
}
function renderWeeklySummary(){
 const {start,end}=weekBounds();
 const startKey=dateKeyFromDate(start),endKey=dateKeyFromDate(end);
 const sessions=Object.values(state.trainingHistory).filter(x=>x.date>=startKey&&x.date<=endKey);
 const completed=sessions.filter(x=>x.completed);
 const totalMs=completed.reduce((a,x)=>a+(x.durationMs||0),0);
 const days=[];
 for(let d=new Date(start);d<=end;d.setDate(d.getDate()+1))days.push(dateKeyFromDate(d));
 const sleeps=days.map(k=>state.daily[k]?.sleep?.hours).filter(v=>Number(v)>0);
 const proteins=days.map(k=>{
  const n=state.daily[k]?.nutrition;
  if(Array.isArray(n?.meals))return n.meals.reduce((a,m)=>a+(Number(m.protein)||0),0);
  return Number(n?.protein)||0;
 }).filter(v=>v>0);
 const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
 weeklySummaryPeriod.textContent=`Du ${start.toLocaleDateString('fr-FR')} au ${end.toLocaleDateString('fr-FR')}`;
 weeklySummaryKpis.innerHTML=[
  [`${completed.length}`,'séances terminées'],
  [`${formatMinutes(totalMs)} min`,'durée totale'],
  [sleeps.length?`${avg(sleeps).toFixed(1)} h`:'—','sommeil moyen'],
  [proteins.length?`${Math.round(avg(proteins))} g`:'—','protéines moyennes']
 ].map(x=>`<div class="kpi"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('');
 weeklySummarySessions.innerHTML=completed.length?completed.sort((a,b)=>a.date.localeCompare(b.date)).map(x=>`<div class="history-item"><strong>${x.title}</strong><span>${new Date(x.date+'T12:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'short'})} · ${formatMinutes(x.durationMs)} min${x.light?' · allégée':''}</span></div>`).join(''):'<div class="alert">Aucune séance terminée cette semaine.</div>';
 const advice=[];
 if(sleeps.length>=3&&avg(sleeps)<6.5)advice.push('Priorité : récupérer davantage avant d’augmenter le volume.');
 else if(completed.length<3)advice.push('Priorité : régularité, sans chercher à rattraper les séances manquées.');
 else advice.push('Bonne régularité : conserve la qualité d’exécution avant d’augmenter les charges.');
 weeklySummaryAdvice.innerHTML=advice.map(x=>`<div class="alert">${x}</div>`).join('');
 const progress=Object.entries(state.progression).filter(([,v])=>v.successes>=8);
 weeklyProgressions.innerHTML=progress.length?progress.map(([k,v])=>`<div class="alert">✅ ${k.split('::')[1]} : ${v.successes} réussites, progression envisageable.</div>`).join(''):'<div class="alert">Aucune augmentation suggérée pour le moment.</div>';
}

function exerciseAssetByName(name=''){
 const n=name.toLowerCase();
 if(n.includes('échauff'))return 'assets/v9/exercises/echauffement.svg';
 if(n.includes('reverse'))return 'assets/v9/exercises/reverse-fly.svg';
 if(n.includes('tirage vertical'))return 'assets/v9/exercises/tirage-vertical.svg';
 if(n.includes('tirage horizontal')||n.includes('rowing'))return 'assets/v9/exercises/tirage-horizontal.svg';
 if(n.includes('pec deck'))return 'assets/v9/exercises/pec-deck.svg';
 if(n.includes('élévations latérales'))return 'assets/v9/exercises/elevations-laterales.svg';
 if(n.includes('crunch'))return 'assets/v9/exercises/crunch.svg';
 if(n.includes('multi-press'))return 'assets/v9/exercises/multi-press.svg';
 if(n.includes('développé horizontal'))return 'assets/v9/exercises/developpe-horizontal.svg';
 if(n.includes('développé épaules'))return 'assets/v9/exercises/developpe-epaules.svg';
 if(n.includes('presse à cuisses')||n.includes('presse cuisses'))return 'assets/v9/exercises/presse-cuisses.svg';
 if(n.includes('squat'))return 'assets/v9/exercises/squats.svg';
 if(n.includes('flexion'))return 'assets/v9/exercises/flexion-jambes.svg';
 if(n.includes('quadriceps'))return 'assets/v9/exercises/presse-quadriceps.svg';
 if(n.includes('abduct'))return 'assets/v9/exercises/abducteurs.svg';
 if(n.includes('marche'))return 'assets/v9/exercises/marche-rapide.svg';
 if(n.includes('jogging'))return 'assets/v9/exercises/jogging.svg';
 if(n.includes('crawl'))return 'assets/v9/exercises/crawl.svg';
 if(n.includes('brasse'))return 'assets/v9/exercises/brasse.svg';
 if(n.includes('planche'))return 'assets/v9/exercises/planche-avant-bras.svg';
 if(n.includes('relevés de jambes'))return 'assets/v9/exercises/releves-de-jambes.svg';
 return 'assets/v9/exercises/echauffement.svg';
}
function renderTraining(){
 plans.mardi=getTuesdayPlan();
 plans.mercredi=getWednesdayPlan();
 const activityKey=getActivityKeyForDay(selectedTraining);
 const p=plans[activityKey];
 const t=ensureTrainingSession(selectedTraining,p,activityKey);
 const light=isLightMode(t),reason=getLightReason();
 const strength=['lundi','mercredi'].includes(activityKey) || Boolean(p.strength);
 let out=`<div class="training-head"><div><h2>${p.title}</h2><p class="note">${p.intro}</p></div><div class="training-chips"><span>${p.icon} ${p.duration}</span><span>${p.exercises?.length||0} exercices</span><span>${focusLabelForPlan(p)}</span></div></div>`;
 if(strength){
  out+=`<div class="training-mode-strip">
    <button class="mode-tab ${!light?'active':''}" onclick="setTrainingMode('normal')">Normal</button>
    <button class="mode-tab ${light?'active':''}" onclick="setTrainingMode('light')">Allégé</button>
   </div>`;
  if(light && reason)out+=`<div class="mode-reason">${reason}</div>`;
 }
 if(!p.rest)out+=`<div class="session-timer-wrap">${sessionTimerHtml()}</div>`;
 if(p.rest){
  out+=`<div class="rest-day-card"><div class="rest-day-icon">🌙</div><div><strong>Repos complet</strong><p>Le repos fait partie de la progression.</p></div><label><input type="checkbox" ${t.completed?'checked':''} onchange="setDone(this.checked)"> Respecté</label></div>`;
 }else if(p.free){
  out+=freeGenerator();
 }else{
  out+=`<div class="exercise-list-v9">`+p.exercises.map((e,i)=>{
   const showLoad=shouldShowExerciseLoad(selectedTraining,i);
   const count=parseSeriesCount(e[1]);
   const meta=light&&strength&&count?lightenMeta(e[1]):e[1];
   const series=light&&strength&&count?Math.max(1,count-1):count;
   if(series)getSeriesState(selectedTraining,i,series);
   const checked=series?t.series[i]?.slice(0,series).every(x=>x.done):Boolean(t.checks[i]);
   return `<div class="exercise"><div class="exercise-row ${showLoad?'':'no-charge'}"><div class="exercise-main"><label><input type="checkbox" ${checked?'checked':''} onchange="toggleExercise(${i},this.checked)"><img class="exercise-thumb" src="${exerciseAssetByName(e[0])}" alt="Illustration ${escapeHtml(e[0])}"><div class="exercise-copy"><div class="exercise-title">${e[0]}</div><div class="exercise-meta">${meta}</div>${strength&&count?exerciseSeriesHtml(selectedTraining,i,e[1],light):''}${e[0]==='Planche avant-bras'?plankTimerHtml(selectedTraining,i):''}${progressionTip(selectedTraining,i)}</div></label></div>${showLoad?`<div class="charge-field"><label>Charge</label><input class="charge-input" type="text" inputmode="decimal" value="${escapeHtml(String(getExerciseLoad(selectedTraining,i)))}" placeholder="32,5 kg" onchange="saveExerciseLoad('${selectedTraining}',${i},this.value)" onblur="saveExerciseLoad('${selectedTraining}',${i},this.value)"></div>`:''}</div></div>`;
  }).join('')+`</div>`;
  if(strength)out+=`<div class="rest-timer-wrap">${restTimerHtml()}</div>`;
  out+=`<label class="finish-session"><input type="checkbox" ${t.completed?'checked':''} onchange="setDone(this.checked)"> Séance terminée</label><div class="session-meta">${t.completed&&t.durationMs?`Durée enregistrée : ${formatMinutes(t.durationMs)} min`:''}</div>`;
 }
 weekTrainingContent.innerHTML=out;
 p.exercises?.forEach((e,i)=>{if(e[0]==='Planche avant-bras')updatePlankTimerUI(selectedTraining,i)});
 updateRestTimerUI();updateSessionTimerUI();
}
function toggleExercise(i,v){
 const activityKey=getActivityKeyForDay(selectedTraining),p=plans[activityKey],t=state.training[selectedTraining],count=parseSeriesCount(p.exercises[i][1]);
 if(count&&(['lundi','mercredi'].includes(activityKey) || Boolean(p.strength))){
  const effective=isLightMode(t)?Math.max(1,count-1):count;
  const rows=getSeriesState(selectedTraining,i,effective);
  rows.forEach(x=>x.done=v);t.checks[i]=v;
 }else t.checks[i]=v;
 save();renderTraining();
}
function setDone(v){
 const activityKey=getActivityKeyForDay(selectedTraining),p=plans[activityKey],t=state.training[selectedTraining];
 t.completed=v;t.date=t.sessionDate||todayKey();
 if(v){
  if(t.session.running){t.session.elapsed=getSessionElapsed(t);t.session.running=false;t.session.startAt=null}
  t.durationMs=getSessionElapsed(t);
  assessProgression(selectedTraining,p,t);
  state.trainingHistory[`${t.date}::${selectedTraining}`]={
   date:t.date,day:selectedTraining,activityKey,title:p.title,completed:true,
   durationMs:t.durationMs||0,light:isLightMode(t),checks:t.checks,
   loads:t.loads,series:t.series
  };
 }else{
  delete state.trainingHistory[`${t.date}::${selectedTraining}`];
 }
 save();renderWeek();
}
function freeGenerator(){const t=state.training[selectedTraining];return `<div class="form three"><div class="field"><label>Zone</label><select id="freeZone">${Object.keys(freeSets).map(x=>`<option>${x}</option>`).join('')}</select></div><div class="field"><label>Durée</label><select id="freeDuration"><option>5</option><option>10</option><option selected>15</option><option>20</option><option>30</option></select></div><div class="field"><label>Fatigue</label><select id="freeFatigue"><option value="low">Faible</option><option value="medium">Moyenne</option><option value="high">Élevée</option><option value="neuro">Neurologique</option></select></div></div><button class="btn primary" style="margin-top:12px" onclick="generateFree()">Générer</button><div id="freeResult">${t.generated?renderGenerated(t.generated):''}</div><label style="display:block;margin-top:14px"><input type="checkbox" ${t.completed?'checked':''} onchange="setDone(this.checked)"> Séance terminée</label>`}
function generateFree(){let z=freeZone.value,d=+freeDuration.value,f=freeFatigue.value;if(f==='high'||f==='neuro')z='Mobilité douce';let rounds=d<=10?1:d<=20?2:3;if(f==='medium')rounds=Math.max(1,rounds-1);const g={zone:z,rounds,items:freeSets[z],warning:f==='neuro'?'Reste sur des mouvements faciles et stables. Arrête si le contrôle diminue.':'La qualité prime sur le volume.'};state.training[selectedTraining].generated=g;save();freeResult.innerHTML=renderGenerated(g)}function renderGenerated(g){return `<div class="rec" style="margin-top:14px"><strong>${g.zone} — ${g.rounds} tour${g.rounds>1?'s':''}</strong><p>${g.warning}</p><ol>${g.items.map(x=>`<li>${x[0]} — ${x[1]}</li>`).join('')}</ol></div>`}
function calorieGoalClass(value,goal){
 if(!value)return '';
 const ratio=value/goal;
 if(ratio>=.9&&ratio<=1.1)return 'good';
 if(ratio>=.8&&ratio<=1.2)return 'warn';
 return 'bad';
}
function goalClass(value,goal){
 if(!value)return '';
 const ratio=value/goal;
 if(ratio>=.9&&ratio<=1.1)return 'good';
 if(ratio>=.75&&ratio<=1.25)return 'warn';
 return 'bad';
}
function setGauge(id,value,goal,unit){
 const pct=Math.max(0,Math.min(100,(value||0)/goal*100));
 const gauge=document.getElementById(id+'Gauge');
 if(gauge)gauge.style.setProperty('--pct',pct);
 const text=document.getElementById(id+'GaugeText');
 if(text)text.textContent=`${round1(value||0)} / ${round1(goal)} ${unit}`;
 const cls=id==='cal'?calorieGoalClass(value,goal):goalClass(value,goal);
 const row=document.getElementById(id+'GaugeRow');
 if(row)row.className='goal-row macro-card '+cls;
}
function round1(v){return Math.round((Number(v)||0)*10)/10}
function nutritionTotals(){
 const d=ensureNutritionDay();
 return d.meals.reduce((a,m)=>({
   calories:a.calories+(Number(m.calories)||0),
   protein:a.protein+(Number(m.protein)||0),
   carbs:a.carbs+(Number(m.carbs)||0),
   fat:a.fat+(Number(m.fat)||0)
 }),{calories:0,protein:0,carbs:0,fat:0});
}
let editingMealId=null;
function loadNutrition(){
 const totals=nutritionTotals();
 const w=state.settings.weight;
 setGauge('cal',totals.calories,state.settings.calories,'kcal');
 setGauge('protein',totals.protein,w*state.settings.proteinRate,'g');
 setGauge('carb',totals.carbs,w*state.settings.carbRate,'g');
 setGauge('fat',totals.fat,w*state.settings.fatRate,'g');
 dayCaloriesTotal.textContent=Math.round(totals.calories);
 dayProteinTotal.textContent=round1(totals.protein)+' g';
 dayCarbsTotal.textContent=round1(totals.carbs)+' g';
 dayFatTotal.textContent=round1(totals.fat)+' g';
 renderMeals();
 nutritionTip();
}
function saveMeal(){
 const name=mealName.value.trim()||'Repas';
 const meal={
   id:editingMealId||('meal-'+Date.now()),
   name,
   calories:Number(mealCalories.value)||0,
   protein:Number(mealProtein.value)||0,
   carbs:Number(mealCarbs.value)||0,
   fat:Number(mealFat.value)||0,
   createdAt:new Date().toISOString()
 };
 const d=ensureNutritionDay();
 if(editingMealId){
   const i=d.meals.findIndex(m=>m.id===editingMealId);
   if(i>=0)meal.createdAt=d.meals[i].createdAt||meal.createdAt;
   if(i>=0)d.meals[i]=meal;
 }else{
   d.meals.push(meal);
 }
 d.nutrition=nutritionTotalsFromMeals(d.meals);
 state.daily[nutritionDayKey()]=d;
 save();
 cancelMealEdit();
 loadNutrition();
 renderToday();
}
function nutritionTotalsFromMeals(meals){
 return meals.reduce((a,m)=>({
   calories:round1(a.calories+(Number(m.calories)||0)),
   protein:round1(a.protein+(Number(m.protein)||0)),
   carbs:round1(a.carbs+(Number(m.carbs)||0)),
   fat:round1(a.fat+(Number(m.fat)||0))
 }),{calories:0,protein:0,carbs:0,fat:0});
}
function editMeal(id){
 const m=ensureNutritionDay().meals.find(x=>x.id===id);
 if(!m)return;
 editingMealId=id;
 document.getElementById('mealEditor')?.setAttribute('open','');
 mealName.value=m.name||'';
 mealCalories.value=m.calories||'';
 mealProtein.value=m.protein||'';
 mealCarbs.value=m.carbs||'';
 mealFat.value=m.fat||'';
 saveMealBtn.textContent='Enregistrer les modifications';
 cancelMealEditBtn.classList.remove('hidden');
 mealName.scrollIntoView({behavior:'smooth',block:'center'});
}
function cancelMealEdit(){
 editingMealId=null;
 mealName.value='';mealCalories.value='';mealProtein.value='';mealCarbs.value='';mealFat.value='';
 saveMealBtn.textContent='Ajouter le repas';
 cancelMealEditBtn.classList.add('hidden');
}
function deleteMeal(id){
 const d=ensureNutritionDay();
 d.meals=d.meals.filter(m=>m.id!==id);
 d.nutrition=nutritionTotalsFromMeals(d.meals);
 save();loadNutrition();renderToday();
}
function mealIcon(name=''){
 const n=String(name).toLowerCase();
 if(n.includes('petit')||n.includes('matin'))return '🥐';
 if(n.includes('coll')||n.includes('goûter')||n.includes('gouter'))return '🥤';
 if(n.includes('dîn')||n.includes('diner')||n.includes('soir'))return '🌙';
 return '🍽️';
}
function renderMeals(){
 const meals=ensureNutritionDay().meals;
 if(!meals.length){mealList.innerHTML='<div class="empty-state">Aucun repas enregistré aujourd’hui.</div>';return;}
 mealList.innerHTML=meals.map(m=>{
   const time=m.createdAt?new Date(m.createdAt).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}):'';
   return `<div class="meal-item mockup-meal">
    <div class="meal-icon">${mealIcon(m.name)}</div>
    <div class="meal-info"><div class="meal-title">${escapeHtml(m.name||'Repas')}</div><div class="meal-time">${time}</div><div class="meal-mini-macros"><span>P ${round1(m.protein)} g</span><span>G ${round1(m.carbs)} g</span><span>L ${round1(m.fat)} g</span></div></div>
    <div class="meal-energy"><strong>${Math.round(Number(m.calories)||0)}</strong><span>kcal</span></div>
    <div class="meal-buttons"><button class="icon-btn" onclick="editMeal('${m.id}')">✎</button><button class="icon-btn danger" onclick="deleteMeal('${m.id}')">×</button></div>
   </div>`;
 }).join('');
}
function escapeHtml(v){
 return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function nutritionTip(){
 const n=nutritionTotals(),w=state.settings.weight;
 const goals={calories:state.settings.calories,protein:w*state.settings.proteinRate,carbs:w*state.settings.carbRate,fat:w*state.settings.fatRate};
 if(!n.calories&&!n.protein&&!n.carbs&&!n.fat){nutritionAdvice.textContent='Ajoute ton premier repas pour commencer la journée.';return}
 const missing=[];
 if(n.protein<goals.protein*.9)missing.push(`${Math.max(0,Math.round(goals.protein-n.protein))} g de protéines`);
 if(n.carbs<goals.carbs*.9)missing.push(`${Math.max(0,Math.round(goals.carbs-n.carbs))} g de glucides`);
 if(n.fat<goals.fat*.9)missing.push(`${Math.max(0,Math.round(goals.fat-n.fat))} g de lipides`);
 const cd=Math.round(n.calories-goals.calories);
 const lowCal=goals.calories*.9,highCal=goals.calories*1.1;
 let calorieText='';
 if(n.calories>=lowCal&&n.calories<=highCal)calorieText='dans la zone cible';
 else calorieText=cd>0?`${cd} kcal au-dessus de l’objectif`:`${Math.abs(cd)} kcal sous l’objectif`;
 let t=`Calories : ${calorieText}. `;
 t+=missing.length?`Sous les objectifs indicatifs : ${missing.join(', ')}.`:'Les trois objectifs de macros sont dans leur zone cible.';
 nutritionAdvice.textContent=t;
}
function sleepRating(s){
 if(!s.hours)return {label:'À renseigner',moon:'🌙',score:0};
 const duration=Math.min(100,s.hours/8*100);
 const score=Math.round(duration*.3+(s.quality||0)*.25+(s.physical||0)*.25+(s.mental||0)*.2);
 if(score>=85)return {label:'Excellent',moon:'🌕',score};
 if(score>=70)return {label:'Bien',moon:'🌔',score};
 if(score>=55)return {label:'Moyen',moon:'🌓',score};
 if(score>=40)return {label:'Faible',moon:'🌒',score};
 return {label:'Très faible',moon:'🌑',score};
}
function loadSleep(){
 const s=ensureDate().sleep;
 sleepHours.value=s.hours??'';sleepQuality.value=s.quality??'';physicalRecovery.value=s.physical??'';mentalRecovery.value=s.mental??'';
 sleepTip();
}
function saveSleep(){
 ensureDate().sleep={hours:+sleepHours.value||0,quality:+sleepQuality.value||0,physical:+physicalRecovery.value||0,mental:+mentalRecovery.value||0};
 save();loadSleep();renderToday();
}
function sleepTip(){
 const s=ensureDate().sleep,r=sleepRating(s);
 sleepMoon.textContent=r.moon;sleepLabel.textContent=r.label;sleepScoreText.textContent=s.hours?`${r.score} % · ${s.hours} h de sommeil`:'Ajoute les données de ta nuit';
 let t='Renseigne les quatre valeurs de ta nuit.';
 if(s.hours)t=r.score<55?'Récupération limitée : privilégie une séance allégée, douce ou du repos.':r.score>=85?'Excellente récupération : la séance prévue peut être maintenue normalement.':r.score>=70?'Bonne récupération : suis le programme prévu en restant attentif à tes sensations.':'Récupération moyenne : évite de chercher une performance maximale.';
 sleepAdvice.textContent=t;
}
function renderHistory(days){const out=[],now=new Date();for(let i=0;i<days;i++){const d=new Date(now);d.setDate(now.getDate()-i);const k=d.toISOString().slice(0,10),x=state.daily[k];if(!x)continue;const p=[];if(x.nutrition?.calories)p.push(`${x.nutrition.calories} kcal · ${x.nutrition.protein||0} g protéines`);if(x.sleep?.hours)p.push(`${x.sleep.hours} h · récupération ${x.sleep.physical||0} %`);if(x.wellness?.fatigue)p.push(`fatigue ${x.wellness.fatigue}/10`);out.push(`<div class="history-item"><strong>${d.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})}</strong><div class="muted">${p.join(' · ')||'Aucune donnée détaillée'}</div></div>`)}historyList.innerHTML=out.join('')||'<p class="note">Aucune donnée enregistrée.</p>'}

let editingMeasurementDate=null;
const MEASURE_FIELDS=['weight','waist','neck','chest','hips','armL','armR','thighL','thighR'];
function numberOrNull(v){
 const n=Number(v);
 return Number.isFinite(n)&&n>0?n:null;
}
function fmtMeasure(v,digits=1,suffix=''){
 return Number.isFinite(Number(v))?`${Number(v).toFixed(digits).replace('.',',')}${suffix}`:'—';
}
function measurementHeight(){
 const h=Number(state.measureProfile?.height)||171;
 return Math.max(170,Math.min(172,h));
}
function calcBmi(weight,height=measurementHeight()){
 if(!weight||!height)return null;
 return weight/((height/100)**2);
}
function calcNavyBodyFat(waist,neck,height=measurementHeight()){
 if(!waist||!neck||!height||waist<=neck)return null;
 const bf=495/(1.0324-0.19077*Math.log10(waist-neck)+0.15456*Math.log10(height))-450;
 return Number.isFinite(bf)&&bf>1&&bf<60?bf:null;
}
function calcWhtr(waist,height=measurementHeight()){
 return waist&&height?waist/height:null;
}
function derivedMeasurement(m){
 const height=Number(m.height)||measurementHeight();
 const bmi=calcBmi(m.weight,height);
 const bodyFat=calcNavyBodyFat(m.waist,m.neck,height);
 const fatMass=bodyFat&&m.weight?m.weight*bodyFat/100:null;
 const leanMass=fatMass!=null?m.weight-fatMass:null;
 const h2=(height/100)**2;
 const ffmi=leanMass?leanMass/h2:null;
 const fmi=fatMass?fatMass/h2:null;
 const whtr=calcWhtr(m.waist,height);
 const armAvg=m.armL&&m.armR?(m.armL+m.armR)/2:(m.armL||m.armR||null);
 const thighAvg=m.thighL&&m.thighR?(m.thighL+m.thighR)/2:(m.thighL||m.thighR||null);
 return {...m,bmi,bodyFat,fatMass,leanMass,ffmi,fmi,whtr,armAvg,thighAvg};
}
function sortedMeasurements(){
 return [...state.measurements].sort((a,b)=>a.date.localeCompare(b.date));
}
function measureDelta(current,previous,key){
 if(!current||!previous||current[key]==null||previous[key]==null)return null;
 return current[key]-previous[key];
}
function deltaText(v,suffix=''){
 if(v==null||!Number.isFinite(v))return '—';
 const cls=Math.abs(v)<0.05?'delta-neutral':v>0?'delta-up':'delta-down';
 const sign=v>0?'+':'';
 return `<span class="${cls}">${sign}${v.toFixed(1).replace('.',',')}${suffix}</span>`;
}
function loadMeasureForm(m=null){
 const latest=m||sortedMeasurements().at(-1)||{};
 measureDate.value=m?.date||todayKey();
 measureHeight.value=String(m?.height||state.measureProfile?.height||171);
 measureHeightLabel.textContent=`${String(measureHeight.value).replace('.',',')} cm`;
 MEASURE_FIELDS.forEach(key=>{
  const el=document.getElementById('measure'+key[0].toUpperCase()+key.slice(1));
  if(el)el.value=m?.[key]??'';
 });
 editingMeasurementDate=m?.date||null;
 saveMeasureBtn.textContent=m?'Mettre à jour':'Enregistrer';
 cancelMeasureEditBtn.style.display=m?'inline-flex':'none';
}
function cancelMeasurementEdit(){
 editingMeasurementDate=null;
 loadMeasureForm();
}
function saveMeasurement(){
 const date=measureDate.value||todayKey();
 const height=Math.max(170,Math.min(172,Number(measureHeight.value)||171));
 const m={date,height};
 MEASURE_FIELDS.forEach(key=>{
  const el=document.getElementById('measure'+key[0].toUpperCase()+key.slice(1));
  m[key]=numberOrNull(el?.value);
 });
 if(!MEASURE_FIELDS.some(k=>m[k]!=null)){
  alert('Renseigne au moins une mesure.');
  return;
 }
 state.measureProfile={sex:'male',height};
 state.settings.height=height;
 if(m.weight)state.settings.weight=m.weight;
 const targetDate=editingMeasurementDate||date;
 const idx=state.measurements.findIndex(x=>x.date===targetDate);
 if(idx>=0)state.measurements.splice(idx,1);
 const sameDate=state.measurements.findIndex(x=>x.date===date);
 if(sameDate>=0)state.measurements.splice(sameDate,1);
 state.measurements.push(m);
 state.measurements.sort((a,b)=>a.date.localeCompare(b.date));
 save();
 editingMeasurementDate=null;
 renderMeasures();
 renderToday();
}
function editMeasurement(date){
 const m=state.measurements.find(x=>x.date===date);
 if(!m)return;
 loadMeasureForm(m);
 document.getElementById('measures')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function deleteMeasurement(date){
 if(!confirm('Supprimer cette mesure ?'))return;
 state.measurements=state.measurements.filter(x=>x.date!==date);
 save();
 renderMeasures();
}
function renderMeasureKpis(){
 const arr=sortedMeasurements().map(derivedMeasurement),latest=arr.at(-1),prev=arr.at(-2);
 if(!latest){
  measureKpis.innerHTML='<div class="alert">Ajoute une première mesure pour afficher les statistiques.</div>';
  measureComposition.innerHTML='';
  return;
 }
 const kpis=[
  ['Poids',fmtMeasure(latest.weight,1,' kg'),deltaText(measureDelta(latest,prev,'weight'),' kg')],
  ['IMC',fmtMeasure(latest.bmi,1,''),prev?deltaText(measureDelta(latest,prev,'bmi')):'—'],
  ['Masse grasse',fmtMeasure(latest.bodyFat,1,' %'),prev?deltaText(measureDelta(latest,prev,'bodyFat'),' pt'):'—'],
  ['Taille / hauteur',latest.whtr?latest.whtr.toFixed(3).replace('.',','):'—',prev?deltaText(measureDelta(latest,prev,'whtr')):'—']
 ];
 measureKpis.innerHTML=kpis.map(([label,value,delta])=>`<div class="measure-kpi"><span>${label}</span><strong>${value}</strong><small>vs précédente : ${delta}</small></div>`).join('');
 const bmiRange=latest.weight?`${calcBmi(latest.weight,172).toFixed(1).replace('.',',')}–${calcBmi(latest.weight,170).toFixed(1).replace('.',',')}`:'—';
 measureComposition.innerHTML=[
  ['Masse maigre estimée',fmtMeasure(latest.leanMass,1,' kg')],
  ['Masse grasse estimée',fmtMeasure(latest.fatMass,1,' kg')],
  ['FFMI',fmtMeasure(latest.ffmi,1,'')],
  ['FMI',fmtMeasure(latest.fmi,1,'')],
  ['IMC selon 170–172 cm',bmiRange],
  ['Dernière date',new Date(latest.date+'T12:00:00').toLocaleDateString('fr-FR')]
 ].map(([a,b])=>`<div class="measure-composition-row"><span>${a}</span><strong>${b}</strong></div>`).join('');
}
function metricInfo(key){
 return {
  weight:{label:'Poids',unit:'kg',digits:1},
  waist:{label:'Tour de taille',unit:'cm',digits:1},
  bodyFat:{label:'Masse grasse',unit:'%',digits:1},
  bmi:{label:'IMC',unit:'',digits:1},
  chest:{label:'Poitrine',unit:'cm',digits:1},
  armAvg:{label:'Bras moyen',unit:'cm',digits:1},
  thighAvg:{label:'Cuisse moyenne',unit:'cm',digits:1}
 }[key]||{label:key,unit:'',digits:1};
}
function renderMeasureChart(){
 const key=measureMetric?.value||'weight',info=metricInfo(key);
 const points=sortedMeasurements().map(derivedMeasurement).filter(m=>Number.isFinite(Number(m[key]))).slice(-30);
 if(points.length<2){
  measureChart.innerHTML='<div class="measure-chart-empty">Au moins deux mesures sont nécessaires pour tracer une évolution.</div>';
  measureChartStats.innerHTML='';
  return;
 }
 const vals=points.map(p=>Number(p[key])),min=Math.min(...vals),max=Math.max(...vals);
 const pad=Math.max((max-min)*.15, key==='weight'?0.5:.25),lo=min-pad,hi=max+pad;
 const W=720,H=215,L=42,R=14,T=14,B=30;
 const x=i=>L+(W-L-R)*(points.length===1?0.5:i/(points.length-1));
 const y=v=>T+(H-T-B)*(1-(v-lo)/(hi-lo||1));
 const poly=points.map((p,i)=>`${x(i).toFixed(1)},${y(Number(p[key])).toFixed(1)}`).join(' ');
 const dots=points.map((p,i)=>`<circle cx="${x(i)}" cy="${y(Number(p[key]))}" r="3.5"><title>${p.date} · ${Number(p[key]).toFixed(info.digits)} ${info.unit}</title></circle>`).join('');
 const first=points[0],last=points.at(-1),avg=vals.reduce((a,b)=>a+b,0)/vals.length;
 measureChart.innerHTML=`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-label="Courbe ${info.label}">
  <line x1="${L}" y1="${T}" x2="${L}" y2="${H-B}" class="chart-axis"/>
  <line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" class="chart-axis"/>
  <text x="4" y="${T+6}" class="chart-label">${hi.toFixed(info.digits)}</text>
  <text x="4" y="${H-B}" class="chart-label">${lo.toFixed(info.digits)}</text>
  <polyline points="${poly}" fill="none" class="measure-line"/>
  <g class="measure-dots">${dots}</g>
  <text x="${L}" y="${H-7}" class="chart-label">${first.date.slice(5)}</text>
  <text x="${W-R-34}" y="${H-7}" class="chart-label">${last.date.slice(5)}</text>
 </svg>`;
 const change=vals.at(-1)-vals[0];
 const stdev=Math.sqrt(vals.reduce((a,v)=>a+(v-avg)**2,0)/vals.length);
 measureChartStats.innerHTML=[
  ['Départ',`${vals[0].toFixed(info.digits)} ${info.unit}`],
  ['Actuel',`${vals.at(-1).toFixed(info.digits)} ${info.unit}`],
  ['Évolution',`${change>0?'+':''}${change.toFixed(info.digits)} ${info.unit}`],
  ['Moyenne',`${avg.toFixed(info.digits)} ${info.unit}`]
 ].map(x=>`<div class="measure-stat-mini"><strong>${x[1]}</strong><span>${x[0]}</span></div>`).join('');
}
function renderMeasureStats(){
 const arr=sortedMeasurements().map(derivedMeasurement),latest=arr.at(-1),first=arr[0];
 if(!latest){
  measureStats.innerHTML='<div class="alert">Pas encore assez de données.</div>';
  measureSymmetry.innerHTML='<div class="alert">Renseigne les mensurations gauche/droite pour comparer.</div>';
  return;
 }
 const weightVals=arr.map(x=>x.weight).filter(Number.isFinite);
 const recent7=weightVals.slice(-7), recent30=weightVals.slice(-30);
 const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
 const days=first&&latest?Math.max(0,Math.round((new Date(latest.date)-new Date(first.date))/86400000)):0;
 const stats=[
  ['Mesures enregistrées',arr.length,`${days} jour${days>1?'s':''} de suivi`],
  ['Poids moyen · 7 mesures',fmtMeasure(avg(recent7),1,' kg'),recent7.length?`sur ${recent7.length} mesure${recent7.length>1?'s':''}`:'—'],
  ['Poids moyen · 30 mesures',fmtMeasure(avg(recent30),1,' kg'),recent30.length?`sur ${recent30.length} mesure${recent30.length>1?'s':''}`:'—'],
  ['Poids min / max',weightVals.length?`${Math.min(...weightVals).toFixed(1).replace('.',',')} / ${Math.max(...weightVals).toFixed(1).replace('.',',')} kg`:'—','sur tout l’historique'],
  ['Évolution du poids',first?.weight&&latest?.weight?`${latest.weight-first.weight>=0?'+':''}${(latest.weight-first.weight).toFixed(1).replace('.',',')} kg`:'—','depuis la première mesure'],
  ['Évolution du tour de taille',first?.waist&&latest?.waist?`${latest.waist-first.waist>=0?'+':''}${(latest.waist-first.waist).toFixed(1).replace('.',',')} cm`:'—','depuis la première mesure']
 ];
 measureStats.innerHTML=stats.map(([a,b,c])=>`<div class="measure-stat-row"><div class="row-head"><span>${a}</span><strong>${b}</strong></div><small>${c}</small></div>`).join('');
 const sym=[];
 [['Bras','armL','armR'],['Cuisses','thighL','thighR']].forEach(([label,l,r])=>{
  if(latest[l]&&latest[r]){
   const diff=Math.abs(latest[l]-latest[r]),base=(latest[l]+latest[r])/2,pct=base?diff/base*100:0;
   const score=Math.max(0,100-pct*5);
   sym.push(`<div class="symmetry-row"><div class="symmetry-head"><span>${label} · G ${latest[l].toFixed(1)} / D ${latest[r].toFixed(1)} cm</span><strong>écart ${diff.toFixed(1)} cm</strong></div><div class="symmetry-bar"><div style="width:${score}%"></div></div></div>`);
  }
 });
 measureSymmetry.innerHTML=sym.length?sym.join(''):'<div class="alert">Renseigne les mesures gauche et droite pour afficher la symétrie.</div>';
}
function renderMeasureHistory(){
 const arr=sortedMeasurements().map(derivedMeasurement).reverse();
 measureHistory.innerHTML=arr.length?arr.map(m=>`<div class="measure-history-row">
  <div class="date">${new Date(m.date+'T12:00:00').toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'2-digit'})}</div>
  <div class="measure-history-cell"><span>Poids</span><strong>${fmtMeasure(m.weight,1,' kg')}</strong></div>
  <div class="measure-history-cell"><span>Taille</span><strong>${fmtMeasure(m.waist,1,' cm')}</strong></div>
  <div class="measure-history-cell hide-mobile"><span>IMC</span><strong>${fmtMeasure(m.bmi,1,'')}</strong></div>
  <div class="measure-history-cell hide-mobile"><span>MG estimée</span><strong>${fmtMeasure(m.bodyFat,1,' %')}</strong></div>
  <div class="measure-history-buttons"><button class="btn" onclick="editMeasurement('${m.date}')">Modifier</button><button class="btn" onclick="deleteMeasurement('${m.date}')">×</button></div>
 </div>`).join(''):'<div class="alert">Aucune mesure enregistrée.</div>';
}
function renderMeasures(){
 if(!state.measureProfile)state.measureProfile={sex:'male',height:171};
 measureHeight.value=String(Math.max(170,Math.min(172,Number(state.measureProfile.height)||171)));
 measureHeightLabel.textContent=`${measureHeight.value.replace('.',',')} cm`;
 measureHeight.onchange=()=>{
  state.measureProfile.height=Number(measureHeight.value)||171;
  state.settings.height=state.measureProfile.height;
  measureHeightLabel.textContent=`${measureHeight.value.replace('.',',')} cm`;
  save();renderMeasureKpis();renderMeasureChart();renderMeasureStats();
 };
 if(!editingMeasurementDate)loadMeasureForm();
 renderMeasureKpis();
 renderMeasureChart();
 renderMeasureStats();
 renderMeasureHistory();
}
function exportMeasurementsCsv(){
 const rows=sortedMeasurements();
 if(!rows.length){alert('Aucune mesure à exporter.');return}
 const headers=['date','taille_cm','poids_kg','tour_taille_cm','cou_cm','poitrine_cm','hanches_cm','bras_gauche_cm','bras_droit_cm','cuisse_gauche_cm','cuisse_droite_cm','imc','masse_grasse_pct','masse_maigre_kg','masse_grasse_kg','ffmi','fmi','ratio_taille_hauteur'];
 const data=rows.map(m=>{
  const d=derivedMeasurement(m);
  return [m.date,m.height,m.weight,m.waist,m.neck,m.chest,m.hips,m.armL,m.armR,m.thighL,m.thighR,d.bmi,d.bodyFat,d.leanMass,d.fatMass,d.ffmi,d.fmi,d.whtr];
 });
 const csv=[headers,...data].map(r=>r.map(v=>v==null?'':String(v).replace('.',',')).join(';')).join('\n');
 const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`cap-mesures-${todayKey()}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

function renderTrends(){const r=Object.values(state.daily).slice(-30),avg=v=>v.length?Math.round(v.reduce((a,b)=>a+b,0)/v.length*10)/10:0,s=r.map(x=>x.sleep?.hours).filter(Boolean),pr=r.map(x=>x.sleep?.physical).filter(Boolean),c=r.map(x=>x.nutrition?.calories).filter(Boolean),p=r.map(x=>x.nutrition?.protein).filter(Boolean);trendKpis.innerHTML=[[avg(s)+' h','Sommeil moyen'],[avg(pr)+' %','Récupération physique'],[avg(c)+' kcal','Calories moyennes'],[avg(p)+' g','Protéines moyennes']].map(x=>`<div class="kpi"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('');const a=[];if(s.length>=3&&avg(s)<6.5)a.push('Ton sommeil moyen est bas.');if(p.length>=3&&avg(p)<state.settings.weight*state.settings.proteinRate*.9)a.push('Tes protéines moyennes restent sous ta zone cible.');if(pr.length>=3&&avg(pr)<55)a.push('La récupération physique moyenne est faible.');trendAdvice.innerHTML=(a.length?a:['Pas encore assez de données ou aucune tendance préoccupante.']).map(x=>`<div class="alert">${x}</div>`).join('')}
function loadSettings(){settingWeight.value=state.settings.weight;settingHeight.value=CAP_PROFILE.heightCm;settingCalories.value=state.settings.calories||2200;settingProteinRate.value=state.settings.proteinRate;settingCarbRate.value=state.settings.carbRate;settingFatRate.value=state.settings.fatRate}function saveSettings(){state.settings={weight:+settingWeight.value||61.8,height:CAP_PROFILE.heightCm,calories:+settingCalories.value||2200,proteinRate:+settingProteinRate.value||1.8,carbRate:+settingCarbRate.value||5,fatRate:+settingFatRate.value||1,navy:state.settings.navy||{sex:'male',neck:36.5,waist:80,hip:95}};save();renderToday();alert('Réglages enregistrés.')}
function updateThemeButton(){
 const isDark=document.body.classList.contains('dark');
 darkBtn.textContent=isDark?'Mode clair':'Mode sombre';
 if(mobileThemeBtn){mobileThemeBtn.textContent=isDark?'☀️':'🌙';mobileThemeBtn.setAttribute('aria-label',isDark?'Activer le mode clair':'Activer le mode sombre')}
}
function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('cap-dark',document.body.classList.contains('dark')?'1':'0');updateThemeButton();if(measureBodyImage)measureBodyImage.src=document.body.classList.contains('dark')?'assets/v9/measures/body-dark.svg':'assets/v9/measures/body-light.svg';}
darkBtn.onclick=toggleTheme;
if(mobileThemeBtn)mobileThemeBtn.onclick=toggleTheme;
setInterval(()=>{updateSessionTimerUI();updateRestTimerUI()},500);
if(localStorage.getItem('cap-dark')==='1')document.body.classList.add('dark');updateThemeButton();if(measureBodyImage)measureBodyImage.src=document.body.classList.contains('dark')?'assets/v9/measures/body-dark.svg':'assets/v9/measures/body-light.svg';exportBtn.onclick=()=>{const b=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`cap-sauvegarde-${todayKey()}.json`;a.click();URL.revokeObjectURL(a.href)};importBtn.onclick=()=>importFile.click();importFile.onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);if(!state.settings||!state.daily)throw 0;save();location.reload()}catch{alert('Sauvegarde Cap invalide.')}};r.readAsText(f)};
let versionEggTaps=[];
function registerVersionEggTap(){
 const now=Date.now();
 versionEggTaps=versionEggTaps.filter(t=>now-t<4000);
 versionEggTaps.push(now);
 if(versionEggTaps.length>=5){
   versionEggTaps=[];
   setTimeout(()=>{location.href='secret.html'},120);
 }
}
if(versionEgg)versionEgg.addEventListener('click',registerVersionEggTap);

renderToday();


