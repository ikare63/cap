function renderHabitShell(){
 const root=document.getElementById('nutritionHabits');
 if(!root || root.dataset.ready==='1')return;
 root.dataset.ready='1';
 root.innerHTML=`<div class="habit-card" aria-label="Habitudes alimentaires">
  <div class="habit-toolbar">
   <input id="habitSearch" class="habit-search" type="search" placeholder="Rechercher un aliment…" aria-label="Rechercher un aliment">
   <button class="habit-manual" type="button" onclick="openManualMeal('Repas libre')">+ Calories / aliment perso</button>
  </div>
  <details class="meal-accordion" data-quick-meal="breakfast" open>
   <summary><span>☀️</span><span>Petit-déjeuner</span><span class="meal-count" id="breakfastCount">0 ajouté</span></summary>
   <div class="meal-accordion-body"><div id="breakfastFoods" class="food-tags"></div><div id="breakfastAdd"></div><div class="quick-summary" id="breakfastSummary"></div></div>
  </details>
  <details class="meal-accordion" data-quick-meal="lunch">
   <summary><span>🍽️</span><span>Déjeuner</span><span class="meal-count" id="lunchCount">0 élément</span></summary>
   <div class="meal-accordion-body"><div id="lunchGroups"></div><div class="quick-summary" id="lunchSummary"></div></div>
  </details>
  <details class="meal-accordion" data-quick-meal="dinner">
   <summary><span>🌙</span><span>Dîner</span><span class="meal-count" id="dinnerCount">0 élément</span></summary>
   <div class="meal-accordion-body"><div id="dinnerGroups"></div><div class="quick-summary" id="dinnerSummary"></div></div>
  </details>
  <details class="meal-accordion" data-quick-meal="snack">
   <summary><span>🍎</span><span>En-cas / extras</span><span class="meal-count" id="snackCount">0 élément</span></summary>
   <div class="meal-accordion-body"><div id="snackFoods" class="food-tags"></div><div id="snackAdd"></div><div class="quick-summary" id="snackSummary"></div></div>
  </details>
  <div class="nutrition-source"><strong>Aliments personnels :</strong> le bouton « + Ajouter un aliment » l’enregistre dans CAP et il restera disponible lors des prochaines visites. Les valeurs peuvent être saisies pour 100 g ou pour une portion selon la catégorie.</div>
 </div>
 <div id="customFoodModal" class="custom-food-modal" hidden>
  <div class="custom-food-backdrop" onclick="closeCustomFoodModal()"></div>
  <div class="custom-food-sheet" role="dialog" aria-modal="true" aria-labelledby="customFoodTitle">
   <div class="custom-food-head"><div><small>Nouvel aliment</small><h3 id="customFoodTitle">Ajouter un aliment</h3></div><button type="button" class="custom-food-close" onclick="closeCustomFoodModal()" aria-label="Fermer">×</button></div>
   <div class="custom-food-category" id="customFoodCategoryLabel"></div>
   <div class="custom-food-form">
    <label class="custom-food-name">Nom de l’aliment<input id="customFoodName" type="text" placeholder="Ex. Raisin"></label>
    <label>Emoji <input id="customFoodEmoji" type="text" maxlength="4" placeholder="🍇"></label>
    <label>Calories <div class="custom-food-with-unit"><input id="customFoodKcal" type="number" min="0" step="1" placeholder="0"><span id="customFoodBasis">/ 100 g</span></div></label>
    <label>Protéines (g)<input id="customFoodProtein" type="number" min="0" step="0.1" placeholder="0"></label>
    <label>Glucides (g)<input id="customFoodCarbs" type="number" min="0" step="0.1" placeholder="0"></label>
    <label>Lipides (g)<input id="customFoodFat" type="number" min="0" step="0.1" placeholder="0"></label>
   </div>
   <p class="custom-food-help" id="customFoodHelp"></p>
   <div class="custom-food-actions"><button type="button" class="btn" onclick="closeCustomFoodModal()">Annuler</button><button type="button" class="btn primary" onclick="saveCustomFood()">Enregistrer l’aliment</button></div>
  </div>
 </div>`;
}

/* ============================================================
   Nutrition rapide — catalogue + aliments personnels
   ============================================================ */
const CAP_FOODS={
 breakfast:[
  {id:'orange-juice',label:"Jus d’orange",emoji:'🍊',base:200,unit:'ml',kcal:90,p:1.4,c:20.4,f:.4},
  {id:'apple-juice',label:'Jus de pomme',emoji:'🍎',base:200,unit:'ml',kcal:92,p:.2,c:22.6,f:.2},
  {id:'sweet-coffee',label:'Café sucré',emoji:'☕',base:1,unit:'tasse',kcal:16,p:.1,c:4,f:0},
  {id:'pain-chocolat',label:'Pain au chocolat',emoji:'🍫',base:1,unit:'pièce',kcal:295,p:5.5,c:35,f:14},
  {id:'pain-raisin',label:'Pain aux raisins',emoji:'🍇',base:1,unit:'pièce',kcal:275,p:5.2,c:42,f:9.5},
  {id:'croissant',label:'Croissant',emoji:'🥐',base:1,unit:'pièce',kcal:185,p:3.8,c:21,f:9.5},
  {id:'skyr-flav',label:'Skyr aromatisé',emoji:'🥣',base:100,unit:'g',kcal:85,p:9,c:9,f:.3},
  {id:'fromage-blanc-breakfast',label:'Fromage blanc',emoji:'🥛',base:100,unit:'g',kcal:75,p:7.5,c:4.5,f:3},
  {id:'fruit-breakfast',label:'Fruit',emoji:'🍌',base:1,unit:'portion',kcal:80,p:1,c:19,f:.3}
 ],
 proteins:[
  {id:'beef',label:'Bœuf',emoji:'🥩',kcal:250,p:26,c:0,f:17},
  {id:'veal',label:'Veau',emoji:'🥩',kcal:172,p:29,c:0,f:6},
  {id:'pork',label:'Porc',emoji:'🥩',kcal:196,p:27,c:0,f:9},
  {id:'chicken',label:'Poulet',emoji:'🍗',kcal:165,p:31,c:0,f:3.6},
  {id:'turkey',label:'Dinde',emoji:'🍗',kcal:151,p:30,c:0,f:2.5},
  {id:'ground-beef',label:'Steak haché 15 %',emoji:'🥩',kcal:250,p:25,c:0,f:17},
  {id:'breaded-cutlet',label:'Escalope panée',emoji:'🍗',kcal:230,p:20,c:15,f:10},
  {id:'ham',label:'Jambon',emoji:'🥓',kcal:126,p:20,c:1,f:4},
  {id:'lardons',label:'Lardons',emoji:'🥓',kcal:300,p:16,c:1,f:26},
  {id:'bacon',label:'Bacon',emoji:'🥓',kcal:320,p:22,c:1,f:25},
  {id:'sausages',label:'Saucisses',emoji:'🌭',kcal:300,p:15,c:2,f:26},
  {id:'salmon',label:'Saumon',emoji:'🐟',kcal:206,p:22,c:0,f:12},
  {id:'tuna',label:'Thon',emoji:'🐟',kcal:116,p:26,c:0,f:1},
  {id:'eggs',label:'Œufs',emoji:'🥚',kcal:145,p:13,c:1,f:10},
  {id:'tofu',label:'Tofu',emoji:'◻️',kcal:120,p:13,c:2,f:7}
 ],
 starches:[
  {id:'pasta',label:'Pâtes',emoji:'🍝',kcal:150,p:5.2,c:30.9,f:1.1},
  {id:'rice',label:'Riz',emoji:'🍚',kcal:130,p:2.7,c:28,f:.3},
  {id:'fries',label:'Frites',emoji:'🍟',kcal:280,p:3.5,c:37,f:13},
  {id:'potato',label:'Pommes de terre',emoji:'🥔',kcal:80,p:1.9,c:17,f:.1},
  {id:'semolina',label:'Semoule',emoji:'🌾',kcal:112,p:3.8,c:23,f:.2},
  {id:'sweet-potato',label:'Patate douce',emoji:'🍠',kcal:90,p:2,c:21,f:.2},
  {id:'quinoa',label:'Quinoa',emoji:'🌾',kcal:120,p:4.4,c:21,f:1.9},
  {id:'lentils',label:'Lentilles',emoji:'🫘',kcal:116,p:9,c:20,f:.4},
  {id:'bread',label:'Pain',emoji:'🥖',kcal:255,p:8.5,c:52,f:1.3}
 ],
 vegetables:[
  {id:'green-beans',label:'Haricots verts',emoji:'🫛',kcal:35,p:1.8,c:4.7,f:.2},
  {id:'carrots',label:'Carottes',emoji:'🥕',kcal:35,p:.8,c:6.8,f:.2},
  {id:'zucchini',label:'Courgettes',emoji:'🥒',kcal:20,p:1.5,c:2.5,f:.4},
  {id:'broccoli',label:'Brocolis',emoji:'🥦',kcal:35,p:2.4,c:4.4,f:.4},
  {id:'spinach',label:'Épinards',emoji:'🥬',kcal:25,p:2.8,c:1.6,f:.4},
  {id:'salad',label:'Salade',emoji:'🥬',kcal:18,p:1.2,c:2.1,f:.2},
  {id:'tomato',label:'Tomates',emoji:'🍅',kcal:20,p:.9,c:3.5,f:.2},
  {id:'pepper',label:'Poivrons',emoji:'🫑',kcal:30,p:1,c:5.5,f:.3},
  {id:'mushroom',label:'Champignons',emoji:'🍄',kcal:28,p:3.6,c:1.5,f:.5},
  {id:'peas',label:'Petits pois',emoji:'🫛',kcal:80,p:5.4,c:10,f:.6},
  {id:'aubergine',label:'Aubergines',emoji:'🍆',kcal:35,p:1,c:6,f:.2}
 ],
 fruits:[
  {id:'fruit-generic',label:'Fruit',emoji:'🍎',kcal:60,p:.7,c:14,f:.2}
 ],
 desserts:[
  {id:'fromage-blanc',label:'Fromage blanc',emoji:'🥛',base:100,unit:'g',kcal:75,p:7.5,c:4.5,f:3},
  {id:'skyr',label:'Skyr',emoji:'🥣',base:100,unit:'g',kcal:85,p:9,c:9,f:.3},
  {id:'veloute',label:'Velouté',emoji:'🥛',base:125,unit:'g',kcal:110,p:4,c:16,f:3},
  {id:'pastry-yogurt',label:'Yaourt pâtissier',emoji:'🍮',base:125,unit:'g',kcal:150,p:4,c:22,f:5},
  {id:'compote',label:'Compote',emoji:'🍎',base:100,unit:'g',kcal:70,p:.3,c:16,f:.1},
  {id:'fruit-dessert',label:'Fruit',emoji:'🍌',base:1,unit:'portion',kcal:80,p:1,c:19,f:.3},
  {id:'dessert-cream',label:'Crème dessert',emoji:'🍮',base:125,unit:'g',kcal:155,p:4,c:23,f:5}
 ],
 snacks:[
  {id:'skyr-snack',label:'Skyr aromatisé',emoji:'🥣',base:100,unit:'g',kcal:85,p:9,c:9,f:.3},
  {id:'fruit-snack',label:'Fruit',emoji:'🍌',base:1,unit:'portion',kcal:80,p:1,c:19,f:.3},
  {id:'compote-snack',label:'Compote',emoji:'🍎',base:100,unit:'g',kcal:70,p:.3,c:16,f:.1},
  {id:'protein-shake',label:'Shaker protéiné',emoji:'🥤',base:1,unit:'portion',kcal:120,p:25,c:3,f:1.5},
  {id:'mentos',label:'Mentos',emoji:'🍬',base:1,unit:'portion',kcal:10,p:0,c:2.5,f:0}
 ]
};

const QUICK_GROUPS=[
 {key:'proteins',label:'Viandes / protéines',emoji:'🥩',quantity:true},
 {key:'starches',label:'Féculents',emoji:'🍚',quantity:true},
 {key:'vegetables',label:'Légumes',emoji:'🥬',quantity:true},
 {key:'fruits',label:'Fruits',emoji:'🍎',quantity:true},
 {key:'desserts',label:'Desserts',emoji:'🍮',quantity:false}
];
const CATEGORY_LABELS={
 breakfast:'Petit-déjeuner',proteins:'Viandes / protéines',starches:'Féculents',vegetables:'Légumes',fruits:'Fruits',desserts:'Desserts',snacks:'En-cas / extras'
};
const CATEGORY_EMOJIS={breakfast:'☀️',proteins:'🥩',starches:'🍚',vegetables:'🥬',fruits:'🍎',desserts:'🍮',snacks:'🍪'};
const QUANTITY_CATEGORIES=new Set(['proteins','starches','vegetables','fruits']);
let customFoodTargetCategory=null;

function ensureCustomFoods(){
 if(!state.customFoods || typeof state.customFoods!=='object')state.customFoods={};
 ['breakfast','proteins','starches','vegetables','fruits','desserts','snacks'].forEach(k=>{if(!Array.isArray(state.customFoods[k]))state.customFoods[k]=[]});
 return state.customFoods;
}
function categoryFoods(key){
 const custom=ensureCustomFoods()[key]||[];
 return [...(CAP_FOODS[key]||[]),...custom];
}
function makeCustomFoodId(category,label){
 const slug=String(label||'aliment').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'').slice(0,32)||'aliment';
 return `custom-${category}-${slug}-${Date.now().toString(36)}`;
}
function openCustomFoodModal(category){
 ensureCustomFoods();
 customFoodTargetCategory=category;
 const modal=document.getElementById('customFoodModal');if(!modal)return;
 const label=CATEGORY_LABELS[category]||'Aliment';
 const quantity=QUANTITY_CATEGORIES.has(category);
 document.getElementById('customFoodCategoryLabel').textContent=`${CATEGORY_EMOJIS[category]||'＋'} ${label}`;
 document.getElementById('customFoodBasis').textContent=quantity?'/ 100 g':'/ portion';
 document.getElementById('customFoodHelp').textContent=quantity?'Les calories et macros saisies correspondent à 100 g. La quantité sera ensuite modifiable dans le repas.':'Les calories et macros saisies correspondent à une portion.';
 ['customFoodName','customFoodEmoji','customFoodKcal','customFoodProtein','customFoodCarbs','customFoodFat'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});
 modal.hidden=false;
 document.body.classList.add('food-modal-open');
 setTimeout(()=>document.getElementById('customFoodName')?.focus(),50);
}
function closeCustomFoodModal(){
 const modal=document.getElementById('customFoodModal');if(modal)modal.hidden=true;
 document.body.classList.remove('food-modal-open');
 customFoodTargetCategory=null;
}
function saveCustomFood(){
 const category=customFoodTargetCategory;if(!category)return;
 const name=document.getElementById('customFoodName')?.value.trim();
 const kcal=Number(document.getElementById('customFoodKcal')?.value);
 if(!name){alert('Donne un nom à l’aliment.');document.getElementById('customFoodName')?.focus();return}
 if(!Number.isFinite(kcal)||kcal<0){alert('Renseigne les calories de l’aliment.');document.getElementById('customFoodKcal')?.focus();return}
 const quantity=QUANTITY_CATEGORIES.has(category);
 const food={
  id:makeCustomFoodId(category,name),label:name,emoji:document.getElementById('customFoodEmoji')?.value.trim()||CATEGORY_EMOJIS[category]||'•',
  kcal, p:Number(document.getElementById('customFoodProtein')?.value)||0, c:Number(document.getElementById('customFoodCarbs')?.value)||0, f:Number(document.getElementById('customFoodFat')?.value)||0,
  custom:true
 };
 if(!quantity){food.base=1;food.unit='portion'}
 ensureCustomFoods()[category].push(food);
 save();
 closeCustomFoodModal();
 renderHabitBuilder();
 showFoodSavedToast(`${name} ajouté à « ${CATEGORY_LABELS[category]||category} »`);
}
function showFoodSavedToast(message){
 let toast=document.getElementById('foodSavedToast');
 if(!toast){toast=document.createElement('div');toast.id='foodSavedToast';toast.className='food-saved-toast';document.body.appendChild(toast)}
 toast.textContent='✓ '+message;toast.classList.add('show');clearTimeout(showFoodSavedToast.t);showFoodSavedToast.t=setTimeout(()=>toast.classList.remove('show'),2200);
}
function addFoodButtonHtml(category){
 return `<button type="button" class="food-add-tag" onclick="openCustomFoodModal('${category}')"><span>＋</span><span>Ajouter un aliment</span></button>`;
}

let quickMealDrafts={breakfast:{},lunch:{},dinner:{},snack:{}};
function getFoodById(id){
 const custom=ensureCustomFoods();
 for(const arr of Object.values(CAP_FOODS)){const found=arr.find(x=>x.id===id);if(found)return found}
 for(const arr of Object.values(custom)){const found=arr.find(x=>x.id===id);if(found)return found}
 return null;
}
function quickEntry(meal,id){return quickMealDrafts[meal]?.[id]||null}
function toggleQuickFood(meal,id){
 if(!quickMealDrafts[meal])quickMealDrafts[meal]={};
 if(quickMealDrafts[meal][id])delete quickMealDrafts[meal][id];
 else quickMealDrafts[meal][id]={amount:100};
 renderHabitBuilder();
}
function setQuickAmount(meal,id,value){
 if(!quickMealDrafts[meal]?.[id])return;
 quickMealDrafts[meal][id].amount=Math.max(1,Math.min(2000,Number(value)||100));
 renderQuickMealSummary(meal);
 const row=document.querySelector(`[data-amount-row="${meal}:${id}"] input`);if(row)row.value=quickMealDrafts[meal][id].amount;
}
function foodCalc(food,entry){
 const base=food.base||100;
 const amount=food.base ? food.base : (entry?.amount||100);
 const ratio=amount/base;
 return {kcal:food.kcal*ratio,p:food.p*ratio,c:food.c*ratio,f:food.f*ratio,amount};
}
function selectedQuickItems(meal){
 return Object.entries(quickMealDrafts[meal]||{}).map(([id,entry])=>{const food=getFoodById(id);if(!food)return null;const calc=foodCalc(food,entry);return {food,entry,calc}}).filter(Boolean);
}
function quickTotals(meal){
 return selectedQuickItems(meal).reduce((a,x)=>({kcal:a.kcal+x.calc.kcal,p:a.p+x.calc.p,c:a.c+x.calc.c,f:a.f+x.calc.f}),{kcal:0,p:0,c:0,f:0});
}
function quickTagHtml(meal,food){
 const selected=Boolean(quickEntry(meal,food.id));
 return `<button type="button" class="food-tag ${selected?'selected':''} ${food.custom?'custom-food':''}" data-food-label="${escapeHtml(food.label.toLowerCase())}" data-food-id="${escapeHtml(food.id)}" onclick="toggleQuickFood('${meal}','${food.id}')"><span>${food.emoji||'•'}</span><span>${escapeHtml(food.label)}</span></button>`;
}
function quickAmountHtml(meal,food){
 const entry=quickEntry(meal,food.id);if(!entry)return '';
 const calc=foodCalc(food,entry);
 return `<div class="food-amount-row" data-amount-row="${meal}:${food.id}"><b>${escapeHtml(food.label)}</b><input type="number" min="1" max="2000" step="5" value="${entry.amount||100}" onchange="setQuickAmount('${meal}','${food.id}',this.value)"><span>g · ≈ ${Math.round(calc.kcal)} kcal</span></div>`;
}
function renderQuickGroups(meal,targetId){
 const target=document.getElementById(targetId);if(!target)return;
 target.innerHTML=QUICK_GROUPS.map(g=>{
   const foods=categoryFoods(g.key);
   const selectedAmounts=g.quantity?foods.filter(f=>quickEntry(meal,f.id)).map(f=>quickAmountHtml(meal,f)).join(''):'';
   return `<div class="food-group" data-food-group="${g.key}"><div class="food-group-head"><strong>${g.emoji} ${g.label}</strong><span>${g.quantity?'Quantité par défaut : 100 g':'1 portion par sélection'}</span></div><div class="food-tags">${foods.map(f=>quickTagHtml(meal,f)).join('')}${addFoodButtonHtml(g.key)}</div>${g.quantity?`<div class="food-amounts">${selectedAmounts}</div>`:''}</div>`;
 }).join('');
}
function renderQuickMealSummary(meal){
 const target=document.getElementById(meal+'Summary');if(!target)return;
 const items=selectedQuickItems(meal),tot=quickTotals(meal);
 const label={breakfast:'Petit-déjeuner',lunch:'Déjeuner',dinner:'Dîner',snack:'En-cas'}[meal]||'Repas';
 const names=items.map(x=>x.food.label).join(' · ');
 target.innerHTML=`<div class="quick-summary-copy"><strong>${items.length?`${items.length} élément${items.length>1?'s':''} · ≈ ${Math.round(tot.kcal)} kcal`:'Rien de sélectionné'}</strong><span>${items.length?escapeHtml(names):'Choisis simplement les aliments que tu as mangés.'}</span></div><button class="quick-add" type="button" ${items.length?'':'disabled'} onclick="addQuickMeal('${meal}')">Ajouter ${label.toLowerCase()}</button>`;
 const count=document.getElementById(meal+'Count');if(count)count.textContent=`${items.length} ${meal==='breakfast'?'ajouté'+(items.length>1?'s':''):'élément'+(items.length>1?'s':'')}`;
}
function renderHabitBuilder(){
 ensureCustomFoods();
 const breakfast=document.getElementById('breakfastFoods');if(breakfast)breakfast.innerHTML=categoryFoods('breakfast').map(f=>quickTagHtml('breakfast',f)).join('');
 const breakfastAdd=document.getElementById('breakfastAdd');if(breakfastAdd)breakfastAdd.innerHTML=addFoodButtonHtml('breakfast');
 const snack=document.getElementById('snackFoods');if(snack)snack.innerHTML=categoryFoods('snacks').map(f=>quickTagHtml('snack',f)).join('');
 const snackAdd=document.getElementById('snackAdd');if(snackAdd)snackAdd.innerHTML=addFoodButtonHtml('snacks');
 renderQuickGroups('lunch','lunchGroups');
 renderQuickGroups('dinner','dinnerGroups');
 ['breakfast','lunch','dinner','snack'].forEach(renderQuickMealSummary);
 applyHabitSearch();
}
function addQuickMeal(meal){
 const items=selectedQuickItems(meal);if(!items.length)return;
 const tot=quickTotals(meal),label={breakfast:'Petit-déjeuner',lunch:'Déjeuner',dinner:'Dîner',snack:'En-cas'}[meal]||'Repas';
 const components=items.map(x=>({id:x.food.id,name:x.food.label,amount:x.calc.amount,unit:x.food.base?x.food.unit:'g',calories:round1(x.calc.kcal),protein:round1(x.calc.p),carbs:round1(x.calc.c),fat:round1(x.calc.f)}));
 const d=ensureNutritionDay();
 d.meals.push({id:'meal-'+Date.now(),name:label,mealType:meal,calories:round1(tot.kcal),protein:round1(tot.p),carbs:round1(tot.c),fat:round1(tot.f),components,source:'habits',createdAt:new Date().toISOString()});
 d.nutrition=nutritionTotalsFromMeals(d.meals);state.daily[nutritionDayKey()]=d;
 quickMealDrafts[meal]={};
 save();loadNutrition();renderHabitBuilder();renderToday();
}
function openManualMeal(name='Repas libre'){
 const details=document.getElementById('mealEditor');if(details)details.setAttribute('open','');
 if(!editingMealId && mealName)mealName.value=name;
 if(mealName){mealName.focus();setTimeout(()=>mealName.scrollIntoView({behavior:'smooth',block:'center'}),50)}
}
function applyHabitSearch(){
 const input=document.getElementById('habitSearch');if(!input)return;
 const q=input.value.trim().toLowerCase();
 document.querySelectorAll('#nutrition .food-tag').forEach(btn=>{const label=btn.dataset.foodLabel||'';btn.style.display=!q||label.includes(q)?'inline-flex':'none'});
 document.querySelectorAll('#nutrition .food-group').forEach(group=>{const visible=[...group.querySelectorAll('.food-tag')].some(x=>x.style.display!=='none');group.style.display=!q||visible?'block':'none'});
}
function initHabitSearch(){
 renderHabitShell();
 const input=document.getElementById('habitSearch');if(input&&!input.dataset.bound){input.dataset.bound='1';input.addEventListener('input',applyHabitSearch)}
}
