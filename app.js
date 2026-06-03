var MENU={1:{Monday:{mains:["Beef Lasagne","Cheese and Onion Savoury Bake","Fish Goujons","Cajun Chicken Baguette|Cajun Chicken|Cheese"],carbs:["Garlic and Herb Bread","Seasoned Twisted Potatoes"],veg:["Baked Beans","Peas"],dessert:"Chocolate and Pear Brownie with Ice Cream"},Tuesday:{mains:["French Bread Pizza","Ravioli in Tomato Sauce","Tuna Mayo Jacket Potato|Tuna Mayo|Cheese","Cajun Chicken Baguette|Cajun Chicken|Cheese"],carbs:["Wholemeal Savoury Rice","Seasoned Wedges"],veg:["Sweetcorn","Green Beans"],dessert:"Fruit Crumble with Custard"},Wednesday:{mains:["Sliced Beef Yorkshire and Gravy","Sausage Yorkshire and Gravy","(V) Pork Sausage Pasta in Creamy Tomato Sauce"],carbs:["Roast Potatoes","Mashed Potatoes"],veg:["Cabbage","Carrots","Swede"],dessert:"Jam and Fruit Welsh Cakes"},Thursday:{mains:["Sweet Chilli Chicken","Margherita Pizza","Chicken Mayo Wrap|Chicken Mayo|Cheese","(V) Pasta in Creamy Tomato Sauce"],carbs:["Savoury Herb Diced Potatoes","Noodles"],veg:["BBQ Baked Beans","Mixed Vegetables"],dessert:"Yoghurt"},Friday:{mains:["Fish Portion","Beef Burger","Quorn Burger","Chicken Mayo Baguette|Chicken Mayo|Cheese"],carbs:["Seasoned Wedges","Chipped Potatoes"],veg:["Corn on Cob","Peas"],dessert:"Flapjack"}},2:{Monday:{mains:["Hot Dog with Onions and Sauce","Hot Dog plain","(V) Tomato and Basil Pasta Bake","Fish Goujons","Cajun Chicken Baguette|Cajun Chicken|Cheese"],carbs:["Seasoned Wedges","Mashed Potatoes"],veg:["Peas","Coleslaw"],dessert:"Strawberry Flapjack"},Tuesday:{mains:["Fruity Chicken Curry","BBQ Chicken","(V) Cauliflower Cheese","Cheese Panini"],carbs:["Rice and Noodles","Savoury Diced Potatoes"],veg:["Mixed Vegetables","Corn on Cob"],dessert:"Fruit and Ice Cream"},Wednesday:{mains:["Turkey Yorkshire Stuffing and Gravy","(V) Margherita Pizza","BBQ Meatball Baguette|Plain|With Cheese","Cajun Chicken Baguette|Cajun Chicken|Cheese"],carbs:["Sage and Thyme Roast Potatoes","Mashed Potatoes"],veg:["Carrots","Cabbage","Peas"],dessert:"Jelly"},Thursday:{mains:["Jumbo Fish Finger","(V) Macaroni Cheese","Tuna Mayo Sandwich|Tuna Mayo|Cheese","(V) Pasta in Creamy Tomato Sauce"],carbs:["Pommes Noisettes","Tomato and Garlic Cheesy Twist Bread"],veg:["Sweetcorn","Baked Beans"],dessert:"Fruit Sponge with Custard"},Friday:{mains:["Pork Meatballs","(V) Cheese Omelette","Salmon and Cod Fish Finger","(V) Pasta in Creamy Tomato Sauce"],carbs:["Seasoned Wedges","Crispy Fries"],veg:["Baked Beans","Peas"],dessert:"Plain Cookie"}},3:{Monday:{mains:["Pork Meatballs with Tomato and Basil Sauce","(V) Vegetable Nuggets","Tuna Mayo Jacket Potato|Tuna Mayo|Cheese","Chicken Mayo Baguette|Chicken Mayo|Cheese"],carbs:["Mashed Potatoes","Pasta"],veg:["Cheesy Coleslaw","Peas and Sweetcorn"],dessert:"Sticky Orange and Date Brownie"},Tuesday:{mains:["Sausage Roll","(V) Ravioli in Cheese Sauce","Fish Goujons","Chicken Mayo Baguette|Chicken Mayo|Cheese"],carbs:["Mexican Bread","Potato Croquettes"],veg:["Beans","Sweetcorn"],dessert:"Fruit Crumble and Custard"},Wednesday:{mains:["Chicken Yorkshire Stuffing and Gravy","(V) Cottage Pie and Gravy","(Vg) Vegan Sausage Roll","(V) Pasta in Creamy Tomato Sauce"],carbs:["Roast Potatoes","Mashed Potatoes"],veg:["Cauliflower","Swede","Peas"],dessert:"Mousse"},Thursday:{mains:["Minced Beef Pie and Gravy","(V) Margherita Pizza","Salmon and Cod Fish Finger","(V) Pasta in Creamy Tomato Sauce"],carbs:["Savoury Herb Diced Potatoes","Seasoned Wedges"],veg:["Peas","Farmhouse Mixed Vegetables"],dessert:"American Pancakes and Ice Cream"},Friday:{mains:["Fish Bites","(V) Cheese and Potato Pie","Tuna Mayo Baguette|Tuna Mayo|Cheese","(V) Pasta in Creamy Tomato Sauce"],carbs:["Boiled Potatoes","Chipped Potatoes"],veg:["Baked Beans","Peas"],dessert:"Chocolate Cookie"}}};

function parseMI(r){var p=r.split("|");return{label:p[0],fillings:p.slice(1)};}

var CLASSES={
  seren:{name:"Seren Bach",teacher:"Mrs Griffiths",color:"#7b1fa2",pupils:["Amelia Jones","Cai Williams","Isla Patel","Noah Davies","Seren Hughes","Ffion Roberts","Jack Thomas","Mia Evans","Toby Morgan","Anya Phillips","Dylan Lewis","Niamh Powell","Oscar Jenkins","Eliza Price","Rhys Edwards"]},
  y23:{name:"Year 2/3",teacher:"Mr Bevan",color:"#1565c0",pupils:["Aaron Clarke","Bethan Davies","Charlie Evans","Daisy Jones","Ellie Williams","Finn Roberts","Georgie Thomas","Hannah Lloyd","Idris Ahmed","Jess Morgan","Kieran Patel","Lara Hughes","Mason Edwards","Nadia Lewis","Oliver Price","Penny Taylor"]},
  y45:{name:"Year 4/5",teacher:"Ms Watkins",color:"#bf360c",pupils:["Adam Butler","Beth Harris","Connor Walsh","Dani Owens","Ethan Cole","Faye Martin","George Hill","Holly Young","Isaac King","Jade Wilson","Keiran Fox","Lauren Shaw","Max Reed","Nina Baker","Oscar Wood","Pippa Long"]},
  y56:{name:"Year 5/6",teacher:"Mrs Owen",color:"#1b5e20",pupils:["Alex Campbell","Bella Turner","Callum Ross","Dana Bennett","Elliot Grant","Freya Dixon","Greg Palmer","Harriet Ward","Izzy Cooper","Josh Kelly","Kira Stone","Liam Brooks","Megan Cross","Nathan Webb","Olivia Hart","Patrick Simms"]}
};

var choices={seren:{},y23:{},y45:{},y56:{}};
var lateArrivals=[];
var currentWeek=1;
var currentDay="";
var selectedPupil={};
var pendingLate=null;
var kFilterActive="all";
var ACOLS=["#7b1fa2","#1565c0","#bf360c","#1b5e20","#c2185b","#00796b","#e65100","#283593"];

function ini(n){return n.split(" ").map(function(x){return x[0];}).join("").slice(0,2);}
function getTD(){var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var d=new Date().getDay();return(d===0||d===6)?"Monday":days[d];}
function getWN(){var t=new Date();var w=Math.ceil(((t-new Date(t.getFullYear(),0,1))/86400000+new Date(t.getFullYear(),0,1).getDay()+1)/7);return((w-1)%3)+1;}
function esc(s){return s.replace(/\\/g,"\\\\").replace(/'/g,"\\'");}

function init(){
  document.getElementById("dateDisplay").textContent=new Date().toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  currentWeek=getWN(); currentDay=getTD();
  document.getElementById("weekBadge").textContent="Week "+currentWeek;
  var ks=Object.keys(CLASSES);
  for(var i=0;i<ks.length;i++) renderCV(ks[i]);
  renderKitchen();
}

function switchView(key,btn){
  var vs=document.querySelectorAll(".view");
  for(var i=0;i<vs.length;i++) vs[i].classList.remove("active");
  var bs=document.querySelectorAll("nav button");
  for(var i=0;i<bs.length;i++) bs[i].classList.remove("active");
  document.getElementById("view-"+key).classList.add("active");
  btn.classList.add("active");
  if(key==="kitchen") renderKitchen();
}

function renderCV(k){
  var cls=CLASSES[k],total=cls.pupils.length,done=0;
  for(var i=0;i<cls.pupils.length;i++) if(choices[k][cls.pupils[i]]) done++;
  var pct=total?Math.round(done/total*100):0;
  var h="";
  h+='<div class="class-header">';
  h+='<div><div class="class-title">'+cls.name+'</div>';
  h+='<div class="class-meta" id="meta-'+k+'">'+cls.teacher+' - '+total+' pupils - '+done+'/'+total+' recorded</div></div>';
  h+='<div style="display:flex;gap:7px;flex-wrap:wrap;" id="days-'+k+'"></div></div>';
  h+='<div class="late-banner no-print">';
  h+='<div><div class="late-banner-text">Pupil arrived late?</div>';
  h+='<div class="late-banner-sub">Add them here - their choice will be sent to the kitchen</div></div>';
  h+='<button class="late-add-btn" onclick="openLM(\''+k+'\')">+ Add Late Arrival</button></div>';
  h+='<div id="mp-'+k+'" class="menu-panel"></div>';
  h+='<div class="stats-row">';
  h+='<div class="stat-card"><div class="stat-number" id="st-'+k+'">'+total+'</div><div class="stat-label">Pupils</div></div>';
  h+='<div class="stat-card"><div class="stat-number" id="sm-'+k+'">0</div><div class="stat-label">School Meals</div></div>';
  h+='<div class="stat-card"><div class="stat-number" id="sp-'+k+'">0</div><div class="stat-label">Packed Lunch</div></div>';
  h+='<div class="stat-card"><div class="stat-number" id="sa-'+k+'">0</div><div class="stat-label">Absent</div></div>';
  h+='<div class="stat-card"><div class="stat-number" id="sl-'+k+'" style="color:var(--amber)">0</div><div class="stat-label" style="color:var(--amber)">Late</div></div>';
  h+='<div class="stat-card"><div class="stat-number" id="sn-'+k+'">'+total+'</div><div class="stat-label">Pending</div></div></div>';
  h+='<div class="register-layout">';
  h+='<div class="pupil-list-panel"><div class="panel-header">';
  h+='<span class="panel-header-title">Roll Call</span>';
  h+='<div style="display:flex;align-items:center;gap:7px;">';
  h+='<span style="font-size:12px;color:var(--text-muted);">'+pct+'%</span>';
  h+='<div class="progress-bar-wrap"><div class="progress-bar-fill" id="pb-'+k+'" style="width:'+pct+'%"></div></div></div></div>';
  h+='<div class="pupil-scroll" id="pl-'+k+'"></div></div>';
  h+='<div class="choice-panel" id="cp-'+k+'">';
  h+='<div class="empty-choice"><div class="empty-choice-icon">&#128070;</div><div>Select a pupil to record their choice</div></div></div></div>';
  document.getElementById("view-"+k).innerHTML=h;
  renderDS(k); renderMP(k); renderPL(k);
}

function renderDS(k){
  var el=document.getElementById("days-"+k); if(!el) return;
  var days=["Monday","Tuesday","Wednesday","Thursday","Friday"];
  for(var i=0;i<days.length;i++){
    var b=document.createElement("button");
    b.className="day-btn"+(days[i]===currentDay?" active":"");
    b.textContent=days[i].slice(0,3);
    b.setAttribute("data-day",days[i]); b.setAttribute("data-class",k);
    b.onclick=function(){setDay(this.getAttribute("data-day"),this.getAttribute("data-class"),this);};
    el.appendChild(b);
  }
}

function setDay(day,k,btn){
  currentDay=day;
  var ks=Object.keys(CLASSES);
  for(var i=0;i<ks.length;i++){
    var bs=document.querySelectorAll("#days-"+ks[i]+" .day-btn");
    for(var j=0;j<bs.length;j++) bs[j].classList.toggle("active",bs[j].textContent===day.slice(0,3));
    renderMP(ks[i]);
  }
  if(selectedPupil.classKey===k&&selectedPupil.pupilName) renderCP(k,selectedPupil.pupilName);
}

function renderMP(k){
  var el=document.getElementById("mp-"+k); if(!el) return;
  var m=MENU[currentWeek][currentDay]; if(!m) return;
  var h='<div class="menu-panel-title">Week '+currentWeek+' - '+currentDay+"'s Menu</div>";
  h+='<div class="menu-columns"><div><div class="menu-col-label">Mains</div>';
  for(var i=0;i<m.mains.length;i++){
    var mi=parseMI(m.mains[i]);
    h+='<div class="menu-item">'+mi.label;
    if(mi.fillings.length) h+=' <span style="font-size:10px;color:var(--red);font-weight:700;">('+mi.fillings.join(" / ")+')</span>';
    h+='</div>';
  }
  h+='</div><div><div class="menu-col-label">Carbohydrates</div>';
  for(var i=0;i<m.carbs.length;i++) h+='<div class="menu-item">'+m.carbs[i]+'</div>';
  h+='<div class="menu-col-label" style="margin-top:9px;">Vegetables</div>';
  for(var i=0;i<m.veg.length;i++) h+='<div class="menu-item">'+m.veg[i]+'</div>';
  h+='</div><div><div class="menu-col-label">Dessert</div><div class="menu-item">'+m.dessert+'</div>';
  h+='<div class="menu-col-label" style="margin-top:9px;">Also Daily</div>';
  h+='<div class="menu-item">Salad, Fruit, Yoghurt</div><div class="menu-item">Milk or Water</div></div></div>';
  el.innerHTML=h;
}

function renderPL(k){
  var cls=CLASSES[k],el=document.getElementById("pl-"+k); if(!el) return;
  var h="";
  for(var i=0;i<cls.pupils.length;i++){
    var p=cls.pupils[i],c=choices[k][p],col=ACOLS[i%ACOLS.length];
    var badge='<span class="pupil-choice-badge badge-pending">Pending</span>',rc="";
    if(c){
      if(c.type==="packed") badge='<span class="pupil-choice-badge badge-packed">Packed Lunch</span>';
      else if(c.type==="absent") badge='<span class="pupil-choice-badge badge-absent">Absent</span>';
      else{var lbl=c.filling?c.main+" ("+c.filling+")":c.main; badge='<span class="pupil-choice-badge badge-meal">'+(lbl.length>22?lbl.slice(0,20)+"...":lbl)+'</span>';}
      rc="done";
    }
    var sel=(selectedPupil.classKey===k&&selectedPupil.pupilName===p)?"selected":"";
    h+='<div class="pupil-row '+rc+' '+sel+'" onclick="selectP(\''+k+'\',\''+esc(p)+'\')">';
    h+='<div class="pupil-avatar" style="background:'+col+'20;color:'+col+';">'+ini(p)+'</div>';
    h+='<div class="pupil-name">'+p+'</div>'+badge+'</div>';
  }
  var lts=[];
  for(var i=0;i<lateArrivals.length;i++) if(lateArrivals[i].classKey===k) lts.push(lateArrivals[i]);
  if(lts.length){
    h+='<div style="background:#fff8f0;padding:7px 16px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--amber);border-top:2px solid #f0c890;">Late Arrivals</div>';
    for(var i=0;i<lts.length;i++){
      var l=lts[i];
      var lbl=l.type==="packed"?"Packed":l.type==="absent"?"Absent":(l.filling?l.main+" ("+l.filling+")":l.main);
      h+='<div class="pupil-row done late-row"><div class="pupil-avatar" style="background:#fff0e0;color:var(--amber);">L</div>';
      h+='<div class="pupil-name">'+l.name+'</div><span class="pupil-choice-badge badge-late">'+lbl+'</span></div>';
    }
  }
  el.innerHTML=h; updateStats(k);
}

function updateStats(k){
  var cls=CLASSES[k],all=cls.pupils.length,cc=choices[k];
  var meals=0,packed=0,absent=0;
  var vals=Object.values(cc);
  for(var i=0;i<vals.length;i++){if(vals[i].type==="meal")meals++;else if(vals[i].type==="packed")packed++;else if(vals[i].type==="absent")absent++;}
  var lc=0; for(var i=0;i<lateArrivals.length;i++) if(lateArrivals[i].classKey===k) lc++;
  var pending=all-meals-packed-absent;
  function g(id){return document.getElementById(id);}
  if(g("sm-"+k)) g("sm-"+k).textContent=meals;
  if(g("sp-"+k)) g("sp-"+k).textContent=packed;
  if(g("sa-"+k)) g("sa-"+k).textContent=absent;
  if(g("sl-"+k)) g("sl-"+k).textContent=lc;
  if(g("sn-"+k)) g("sn-"+k).textContent=pending;
  var pct=all?Math.round((all-pending)/all*100):0;
  var pb=g("pb-"+k); if(pb) pb.style.width=pct+"%";
  var meta=g("meta-"+k);
  if(meta) meta.textContent=cls.teacher+" - "+all+" pupils - "+(all-pending)+"/"+all+" recorded"+(lc>0?" - "+lc+" late":"");
}

function selectP(k,p){selectedPupil={classKey:k,pupilName:p}; renderPL(k); renderCP(k,p);}

function renderCP(k,p){
  var panel=document.getElementById("cp-"+k); if(!panel) return;
  var m=MENU[currentWeek][currentDay],ex=choices[k][p]||{};
  var ps=esc(p);
  var h='<div class="choice-panel-header"><div class="choice-pupil-name">'+p+'</div>';
  h+='<div class="choice-instruction">Select today\'s meal choice below</div></div>';
  h+='<div class="choice-section-title">School Meal - Choose Main</div>';
  for(var i=0;i<m.mains.length;i++){
    var mi=parseMI(m.mains[i]);
    var isV=mi.label.indexOf("(V)")===0||mi.label.indexOf("(Vg)")===0;
    var isSel=ex.type==="meal"&&ex.main===mi.label;
    var ms=esc(mi.label);
    h+='<button class="option-btn'+(isSel?" selected":"")+'" onclick="setMain(\''+k+'\',\''+ps+'\',\''+ms+'\',this)">';
    h+='<div class="option-icon">'+(isV?"&#127807;":"&#127869;")+'</div><div>'+mi.label+'</div></button>';
    if(isSel&&mi.fillings.length>0){
      h+='<div class="filling-group"><div class="filling-group-label">Choose filling for '+mi.label+'</div>';
      for(var j=0;j<mi.fillings.length;j++){
        var f=mi.fillings[j],fs=esc(f);
        h+='<button class="filling-btn'+(ex.filling===f?" selected":"")+'" onclick="setFill(\''+k+'\',\''+ps+'\',\''+fs+'\',this)">';
        h+='<div class="filling-dot"></div>'+f+'</button>';
      }
      h+='</div>';
    }
  }
  h+='<div class="allergen-note">Vegetables and carbohydrates served alongside.</div>';
  h+='<div class="choice-section-title">Other Options</div><div class="special-options">';
  h+='<button class="special-btn packed'+(ex.type==="packed"?" selected":"")+'" onclick="setSpec(\''+k+'\',\''+ps+'\',\'packed\',this)">Packed Lunch</button>';
  h+='<button class="special-btn absent'+(ex.type==="absent"?" selected":"")+'" onclick="setSpec(\''+k+'\',\''+ps+'\',\'absent\',this)">Absent</button></div>';
  h+='<button class="confirm-btn" onclick="confirmC(\''+k+'\',\''+ps+'\')">Confirm and Next Pupil</button>';
  panel.innerHTML=h;
}

function setMain(k,p,main,btn){choices[k][p]={type:"meal",main:main,filling:""}; renderCP(k,p);}
function setFill(k,p,f,btn){
  if(choices[k][p]) choices[k][p].filling=f;
  var bs=btn.parentElement.querySelectorAll(".filling-btn");
  for(var i=0;i<bs.length;i++) bs[i].classList.remove("selected");
  btn.classList.add("selected");
}
function setSpec(k,p,type,btn){choices[k][p]={type:type,main:"",filling:""}; renderCP(k,p);}

function confirmC(k,p){
  var c=choices[k][p];
  if(!c){showToast("Please select an option first","red");return;}
  if(c.type==="meal"){
    var raw=null;
    for(var i=0;i<MENU[currentWeek][currentDay].mains.length;i++){
      if(parseMI(MENU[currentWeek][currentDay].mains[i]).label===c.main){raw=MENU[currentWeek][currentDay].mains[i];break;}
    }
    if(raw&&parseMI(raw).fillings.length>0&&!c.filling){showToast("Please choose a filling first","red");return;}
  }
  renderPL(k);
  var pupils=CLASSES[k].pupils,idx=pupils.indexOf(p),next=null;
  for(var i=idx+1;i<pupils.length;i++) if(!choices[k][pupils[i]]){next=pupils[i];break;}
  if(!next) for(var i=0;i<idx;i++) if(!choices[k][pupils[i]]){next=pupils[i];break;}
  if(next){selectP(k,next); showToast(p+" recorded - "+next+" next","green");}
  else{
    showToast("All pupils in "+CLASSES[k].name+" recorded!","green");
    selectedPupil={};
    document.getElementById("cp-"+k).innerHTML='<div class="empty-choice" style="padding:2.5rem;"><div class="empty-choice-icon">&#9989;</div><div style="font-weight:700;color:var(--green);">All pupils recorded!</div></div>';
    renderPL(k);
  }
}

function openLM(preClass){
  pendingLate={type:null,main:"",filling:""};
  document.getElementById("lateModal").style.display="flex";
  document.getElementById("lateName").value="";
  if(preClass) document.getElementById("lateClass").value=preClass;
  document.getElementById("lateName").focus();
  renderLO();
}
function closeLateModal(){document.getElementById("lateModal").style.display="none"; pendingLate=null;}

function renderLO(){
  var m=MENU[currentWeek][currentDay],h="";
  for(var i=0;i<m.mains.length;i++){
    var mi=parseMI(m.mains[i]);
    var isV=mi.label.indexOf("(V)")===0||mi.label.indexOf("(Vg)")===0;
    var isSel=pendingLate&&pendingLate.main===mi.label;
    var ms=esc(mi.label);
    h+='<button class="option-btn'+(isSel?" selected":"")+'" style="margin:3px 0;width:100%;" onclick="setLM(\''+ms+'\',this)">';
    h+='<div class="option-icon" style="width:22px;height:22px;font-size:13px;">'+(isV?"&#127807;":"&#127869;")+'</div>';
    h+='<div style="font-size:13px;">'+mi.label+'</div></button>';
    if(isSel&&mi.fillings.length>0){
      h+='<div class="filling-group" style="margin:2px 0 6px;"><div class="filling-group-label">Choose filling</div>';
      for(var j=0;j<mi.fillings.length;j++){
        var f=mi.fillings[j],fs=esc(f);
        h+='<button class="filling-btn'+(pendingLate.filling===f?" selected":"")+'" onclick="setLF(\''+fs+'\',this)"><div class="filling-dot"></div>'+f+'</button>';
      }
      h+='</div>';
    }
  }
  h+='<div style="display:flex;gap:8px;margin-top:10px;">';
  h+='<button class="special-btn packed'+(pendingLate&&pendingLate.type==="packed"?" selected":"")+'" onclick="setLS(\'packed\',this)">Packed Lunch</button>';
  h+='<button class="special-btn absent'+(pendingLate&&pendingLate.type==="absent"?" selected":"")+'" onclick="setLS(\'absent\',this)">Absent</button></div>';
  document.getElementById("lateMenuOptions").innerHTML=h;
}

function setLM(main,btn){pendingLate={type:"meal",main:main,filling:""}; renderLO();}
function setLF(f,btn){
  if(pendingLate) pendingLate.filling=f;
  var bs=btn.parentElement.querySelectorAll(".filling-btn");
  for(var i=0;i<bs.length;i++) bs[i].classList.remove("selected");
  btn.classList.add("selected");
}
function setLS(type,btn){pendingLate={type:type,main:"",filling:""}; renderLO();}

function confirmLateArrival(){
  var name=document.getElementById("lateName").value.trim();
  var k=document.getElementById("lateClass").value;
  if(!name){showToast("Please enter the pupil name","red");return;}
  if(!pendingLate||!pendingLate.type){showToast("Please select a meal option","red");return;}
  if(pendingLate.type==="meal"){
    var raw=null;
    for(var i=0;i<MENU[currentWeek][currentDay].mains.length;i++){
      if(parseMI(MENU[currentWeek][currentDay].mains[i]).label===pendingLate.main){raw=MENU[currentWeek][currentDay].mains[i];break;}
    }
    if(raw&&parseMI(raw).fillings.length>0&&!pendingLate.filling){showToast("Please choose a filling","red");return;}
  }
  lateArrivals.push({name:name,classKey:k,type:pendingLate.type,main:pendingLate.main,filling:pendingLate.filling});
  closeLateModal(); renderPL(k); updateStats(k); renderKitchen();
  showToast(name+" added as late arrival","orange");
}

function setKF(f,btn){
  kFilterActive=f;
  var bs=document.querySelectorAll(".kps-filter");
  for(var i=0;i<bs.length;i++) bs[i].classList.remove("active");
  btn.classList.add("active"); filterKT();
}
function filterKT(){
  var s=(document.getElementById("kpsSearch")||{}).value||"";
  var rows=document.querySelectorAll("#kitchenPupilBody tr");
  for(var i=0;i<rows.length;i++){
    var row=rows[i];
    var name=row.getAttribute("data-name")||"",type=row.getAttribute("data-type")||"";
    var mS=name.toLowerCase().indexOf(s.toLowerCase())>=0;
    var mF=kFilterActive==="all"||type===kFilterActive;
    row.style.display=(mS&&mF)?"":"none";
  }
}

function renderKitchen(){
  var ws=document.getElementById("kitchenWeek"),ds=document.getElementById("kitchenDay");
  if(ws&&!ws.getAttribute("data-init")){ws.value=currentWeek;ds.value=currentDay;ws.setAttribute("data-init","1");}
  var CKs=Object.keys(CLASSES),tP=0,tM=0,tPk=0,tA=0,tPd=0;
  for(var i=0;i<CKs.length;i++){
    var k=CKs[i],cc=choices[k],vals=Object.values(cc);
    tP+=CLASSES[k].pupils.length;
    for(var j=0;j<vals.length;j++){if(vals[j].type==="meal")tM++;else if(vals[j].type==="packed")tPk++;else if(vals[j].type==="absent")tA++;}
    tPd+=CLASSES[k].pupils.length-vals.length;
  }
  for(var i=0;i<lateArrivals.length;i++){if(lateArrivals[i].type==="meal")tM++;else if(lateArrivals[i].type==="packed")tPk++;}
  var tL=lateArrivals.length;
  document.getElementById("kitchenStats").innerHTML=
    '<div class="stat-card"><div class="stat-number">'+tP+'</div><div class="stat-label">Total Pupils</div></div>'+
    '<div class="stat-card"><div class="stat-number" style="color:var(--green)">'+tM+'</div><div class="stat-label">School Meals</div></div>'+
    '<div class="stat-card"><div class="stat-number" style="color:var(--amber)">'+tPk+'</div><div class="stat-label">Packed Lunch</div></div>'+
    '<div class="stat-card"><div class="stat-number" style="color:var(--red)">'+tA+'</div><div class="stat-label">Absent</div></div>'+
    '<div class="stat-card"><div class="stat-number" style="color:var(--amber)">'+tL+'</div><div class="stat-label">Late Arrivals</div></div>'+
    '<div class="stat-card"><div class="stat-number" style="color:#999">'+tPd+'</div><div class="stat-label">Pending</div></div>';

  var ch="";
  for(var i=0;i<CKs.length;i++){
    var k=CKs[i],cls=CLASSES[k],cc=choices[k],col=cls.color,mc={};
    var vals=Object.values(cc);
    for(var j=0;j<vals.length;j++){
      if(vals[j].type==="meal"){var key=vals[j].filling?vals[j].main+" ("+vals[j].filling+")":vals[j].main; mc[key]=(mc[key]||0)+1;}
    }
    for(var j=0;j<lateArrivals.length;j++){
      if(lateArrivals[j].classKey===k&&lateArrivals[j].type==="meal"){var key=lateArrivals[j].filling?lateArrivals[j].main+" ("+lateArrivals[j].filling+")":lateArrivals[j].main; mc[key]=(mc[key]||0)+1;}
    }
    var meals=0,packed=0,absent=0;
    for(var j=0;j<vals.length;j++){if(vals[j].type==="meal")meals++;else if(vals[j].type==="packed")packed++;else if(vals[j].type==="absent")absent++;}
    for(var j=0;j<lateArrivals.length;j++){if(lateArrivals[j].classKey===k){if(lateArrivals[j].type==="meal")meals++;else if(lateArrivals[j].type==="packed")packed++;}}
    var pend=cls.pupils.length-vals.length;
    var lc=0; for(var j=0;j<lateArrivals.length;j++) if(lateArrivals[j].classKey===k) lc++;
    var dot=pend===0?"dot-complete":pend<cls.pupils.length?"dot-partial":"dot-none";
    var mcKeys=Object.keys(mc);
    ch+='<div class="kitchen-class-card"><div class="kcc-header" style="background:'+col+'">';
    ch+='<span>'+cls.name+'</span><span style="font-size:12px;opacity:0.85;"><span class="status-dot '+dot+'"></span>'+(pend===0?"Complete":pend+" pending")+'</span></div>';
    ch+='<div class="kcc-body">';
    if(mcKeys.length){for(var j=0;j<mcKeys.length;j++) ch+='<div class="kcc-row"><span class="kcc-item">'+mcKeys[j]+'</span><span class="kcc-count">'+mc[mcKeys[j]]+'</span></div>';}
    else ch+='<div style="font-size:12px;color:var(--text-muted);padding:7px 0;">No meals recorded yet</div>';
    if(packed>0) ch+='<div class="kcc-row"><span class="kcc-item" style="color:var(--amber)">Packed Lunch</span><span class="kcc-count" style="color:var(--amber)">'+packed+'</span></div>';
    if(absent>0) ch+='<div class="kcc-row"><span class="kcc-item" style="color:var(--red)">Absent</span><span class="kcc-count" style="color:var(--red)">'+absent+'</span></div>';
    if(lc>0) ch+='<div class="kcc-row"><span class="kcc-item" style="color:var(--amber);font-size:11px;font-weight:600;">'+lc+' late arrival'+(lc>1?"s":"")+'</span></div>';
    ch+='<div style="border-top:2px solid var(--border);margin-top:7px;padding-top:7px;display:flex;justify-content:space-between;font-size:12px;">';
    ch+='<span style="color:var(--text-muted);">Total meals</span><span style="font-weight:700;color:'+col+'">'+meals+'</span></div></div></div>';
  }
  document.getElementById("kitchenClassCards").innerHTML=ch;

  var gt={};
  for(var i=0;i<CKs.length;i++){
    var vals=Object.values(choices[CKs[i]]);
    for(var j=0;j<vals.length;j++){if(vals[j].type==="meal"){var key=vals[j].filling?vals[j].main+" ("+vals[j].filling+")":vals[j].main; gt[key]=(gt[key]||0)+1;}}
  }
  for(var i=0;i<lateArrivals.length;i++){if(lateArrivals[i].type==="meal"){var key=lateArrivals[i].filling?lateArrivals[i].main+" ("+lateArrivals[i].filling+")":lateArrivals[i].main; gt[key]=(gt[key]||0)+1;}}
  var gtK=Object.keys(gt).sort(function(a,b){return gt[b]-gt[a];});
  var th="";
  if(gtK.length) for(var i=0;i<gtK.length;i++) th+='<div class="total-item"><span>'+gtK[i]+'</span><span class="total-item-count">'+gt[gtK[i]]+'</span></div>';
  else th='<div style="color:var(--text-muted);font-size:13px;grid-column:1/-1;text-align:center;padding:.9rem;">No meal choices recorded yet.</div>';
  document.getElementById("kitchenTotals").innerHTML=th;

  var rows=[],rowNum=0;
  for(var i=0;i<CKs.length;i++){
    var k=CKs[i];
    for(var j=0;j<CLASSES[k].pupils.length;j++){
      var p=CLASSES[k].pupils[j],c=choices[k][p];
      var type="pending",ml="-",cc2="chip-pending",ct="Pending";
      if(c){
        type=c.type;
        if(c.type==="meal"){ml=c.filling?c.main+" ("+c.filling+")":c.main; cc2="chip-meal"; ct="School Meal";}
        else if(c.type==="packed"){ml="Packed Lunch"; cc2="chip-packed"; ct="Packed";}
        else if(c.type==="absent"){ml="Absent"; cc2="chip-absent"; ct="Absent";}
      }
      rowNum++;
      rows.push('<tr data-name="'+p+'" data-type="'+type+'">'+
        '<td style="color:var(--text-muted);font-size:12px;">'+rowNum+'</td>'+
        '<td style="font-weight:500;">'+p+'</td>'+
        '<td><span style="font-size:12px;color:var(--text-muted);">'+CLASSES[k].name+'</span></td>'+
        '<td style="font-weight:500;">'+ml+'</td>'+
        '<td><span class="meal-chip '+cc2+'">'+ct+'</span></td></tr>');
    }
  }
  for(var i=0;i<lateArrivals.length;i++){
    var l=lateArrivals[i],type=l.type,ml="",cc2="chip-pending",ct="";
    if(l.type==="meal"){ml=l.filling?l.main+" ("+l.filling+")":l.main; cc2="chip-meal"; ct="School Meal";}
    else if(l.type==="packed"){ml="Packed Lunch"; cc2="chip-packed"; ct="Packed";}
    else if(l.type==="absent"){ml="Absent"; cc2="chip-absent"; ct="Absent";}
    rowNum++;
    rows.push('<tr data-name="'+l.name+'" data-type="'+type+'" class="late-kitrow">'+
      '<td style="color:var(--text-muted);font-size:12px;">'+rowNum+'</td>'+
      '<td style="font-weight:500;">'+l.name+' <span class="chip-late">Late</span></td>'+
      '<td><span style="font-size:12px;color:var(--text-muted);">'+CLASSES[l.classKey].name+'</span></td>'+
      '<td style="font-weight:500;">'+ml+'</td>'+
      '<td><span class="meal-chip '+cc2+'">'+ct+'</span></td></tr>');
  }
  document.getElementById("kitchenPupilBody").innerHTML=rows.join(""); filterKT();

  var ls=document.getElementById("lateKitchenSection"),ll=document.getElementById("lateKitchenList");
  if(lateArrivals.length>0){
    ls.style.display="block";
    var llh="";
    for(var i=0;i<lateArrivals.length;i++){
      var l=lateArrivals[i];
      var lbl=l.type==="packed"?"Packed Lunch":l.type==="absent"?"Absent":(l.filling?l.main+" ("+l.filling+")":l.main);
      llh+='<div class="late-item"><div class="late-item-name">'+l.name+'</div><div class="late-item-class">'+CLASSES[l.classKey].name+'</div><div class="late-item-meal">'+lbl+'</div></div>';
    }
    ll.innerHTML=llh;
  } else ls.style.display="none";
}

function showToast(msg,col){
  var t=document.getElementById("toast");
  t.textContent=msg;
  t.className="toast"+(col==="orange"?" is-orange":col==="red"?" is-red":"");
  t.classList.add("show");
  setTimeout(function(){t.classList.remove("show");},2800);
}

init();
