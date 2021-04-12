'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let arrOfobjects = [];
function Cookies(restName, minCust, maxCust, avgCo) {
  this.restName = restName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCo = avgCo;
  this.totalCo = 0;
  this.avgCust = [];
  this.avgCoPerHour = [];
  arrOfobjects.push(this);
}

let seattle = new Cookies('seattle', 23, 65, 6.3);
let tokyo = new Cookies('tokyo', 3, 24, 1.2);
let dubai = new Cookies('dubai', 11, 38, 3.7);
let paris = new Cookies('paris', 20, 38, 2.3);
let lima = new Cookies('lima', 2, 16, 4.6);

Cookies.prototype.getAvgCust = function () {
  for (let i = 0; i < 14; i++) {
    this.avgCust[i] = getRandomIntInclusive(this.minCust, this.maxCust);
    console.log(this.avgCust);
  }
};

Cookies.prototype.getavgCoPerHour=function(){
  for (let i=0 ; i<14 ; i++){
    this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
  }
  console.log(this.avgCoPerHour);
};

let container = document.getElementById('branch');
let table = document.createElement('table');
container.appendChild(table);
let headerRow =document.createElement('tr');
table.appendChild(headerRow );
let td =document.createElement('td');
headerRow.appendChild(td);
td.textContent='';

for(let i = 0; i < 14; i++){
  td = document.createElement('th');
  headerRow.appendChild(td );
  if (i<6){
    td.textContent = `${i+6} am `;
  }
  else if (i===6) {
    td.textContent = `${i+6} pm `;
  }
  else {
    td.textContent = `${i-6} pm `;
  }
}
td = document.createElement('th');
headerRow.appendChild(td );
td.textContent='Daily Location Total';

// let firstcell = document.createElement('th');
// headerRow.appendChild(firstcell);
// firstcell.textContent = ',,,';

let arrSum=0;
Cookies.prototype.render= function(){
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let td = document.createElement('td');
  td.textContent= this.restName;
  tr.appendChild(td);
  for(let i = 0; i < 14; i++){
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.avgCoPerHour[i];
    arrSum = this.avgCoPerHour[i]+arrSum;
  }
  let tf = document.createElement('td');
  tr.appendChild(tf);
  tf.textContent= arrSum;
};

seattle.getAvgCust();
seattle.getavgCoPerHour();
seattle.render();
tokyo.getAvgCust();
tokyo.getavgCoPerHour();
tokyo.render();
dubai.getAvgCust();
dubai.getavgCoPerHour();
dubai.render();
paris.getAvgCust();
paris.getavgCoPerHour();
paris.render();
lima.getAvgCust();
lima.getavgCoPerHour();
lima.render();

let footer = document.createElement('tr');
table.appendChild(footer );
footer.textContent='Totals';
let totals =0;
for (let j=0 ; j<14 ; j++){
  let total=0;
  for(let i=0 ; i<5 ; i++){
    total = total + arrOfobjects[i].avgCoPerHour[j];
    totals = totals +total ;
  }
  let fot = document.createElement('td');
  footer.appendChild(fot);
  fot.textContent=total;
}

let fot = document.createElement('td');
footer.appendChild(fot);
fot.textContent=totals;


// console.log(arrOfobjects[0].avgCoPerHour[0] );
// console.log(arrOfobjects[1].avgCoPerHour[0] );
// console.log(arrOfobjects[2].avgCoPerHour[0] );

// headerRow[i].textContent = ' 6:00am	';

// if (i<6){
//   headerRow[i].textContent = `${i+6} am `;
// }
// else if (i===6) {
//     headerRow[i].textContent = `${i+6} pm `;
// }
// else {
//       headerRow[i].textContent = `${i-6} pm `;
// }


// seattle.getAvgCust();
// seattle.getavgCoPerHour();

// const seattle = {
//   minCust:23,
//   maxCust: 65,
//   avgCo: 6.3,
//   avgCust:[],
//   avgCoPerHour:[],
//   totalCo:0,

//   getAvgCust:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
//     }
//   },

//   getavgCoPerHour:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
//     }
//   },

//   getSum:function(){

//     for (let i=0 ; i<14 ; i++){
//       this.totalCo =this.avgCoPerHour[i]+this.totalCo;
//     }
//   }

// };

// seattle.getAvgCust();
// console.log(seattle.avgCust);

// seattle.getavgCoPerHour();
// console.log(seattle.avgCoPerHour);

// seattle.getSum();
// console.log(seattle.totalCo);


// let container = document.getElementById('branch');
// let h2 = document.createElement('h2');
// container.appendChild(h2);
// h2.textContent = 'Seattle';
// let unorderlist = document.createElement('ul');
// container.appendChild(unorderlist);

// for(let i=0 ; i<14 ; i++){
//   let li = document.createElement('li');
//   unorderlist.appendChild(li);
//   if (i<6){
//     li.textContent = `${i+6} am: `+ seattle.avgCoPerHour[i] + ' cookies';
//   }
//   else if (i===6) {
//     li.textContent = `${i+6} pm: `+ seattle.avgCoPerHour[i] + ' cookies';
//   }
//   else {
//     li.textContent = `${i-6} pm: `+ seattle.avgCoPerHour[i] + ' cookies';
//   }
// }

// let liseattle = document.createElement('li');
// unorderlist.appendChild(liseattle);
// liseattle.textContent = `Total: ${seattle.totalCo} cookies`;

// /////Tokyo

// const Tokyo = {
//   minCust:3,
//   maxCust: 24,
//   avgCo: 6.3,
//   avgCust:[],
//   avgCoPerHour:[],
//   totalCo:0,

//   getAvgCust:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
//     }
//   },

//   getavgCoPerHour:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
//     }
//   },

//   getSum:function(){

//     for (let i=0 ; i<14 ; i++){
//       this.totalCo =this.avgCoPerHour[i]+this.totalCo;
//     }
//   }

// };

// Tokyo.getAvgCust();
// console.log(Tokyo.avgCust);

// Tokyo.getavgCoPerHour();
// console.log(Tokyo.avgCoPerHour);

// Tokyo.getSum();
// console.log(Tokyo.totalCo);


// let containerTokyo = document.getElementById('branch');
// let h2Tokyo = document.createElement('h2');
// containerTokyo.appendChild(h2Tokyo);
// h2Tokyo.textContent = 'Tokyo';
// let unorderlistTokyo = document.createElement('ul');
// containerTokyo.appendChild(unorderlistTokyo);

// for(let i=0 ; i<14 ; i++){
//   let liTokyo = document.createElement('li');
//   unorderlistTokyo.appendChild(liTokyo);
//   if (i<6){
//     liTokyo.textContent = `${i+6} am: `+ Tokyo.avgCoPerHour[i] + ' cookies';
//   }
//   else if (i===6) {
//     liTokyo.textContent = `${i+6} pm: `+ Tokyo.avgCoPerHour[i] + ' cookies';
//   }
//   else {
//     liTokyo.textContent = `${i-6} pm: `+ Tokyo.avgCoPerHour[i] + ' cookies';
//   }
// }

// let liTokyo = document.createElement('li');
// unorderlistTokyo.appendChild(liTokyo);
// liTokyo.textContent = `Total: ${Tokyo.totalCo} cookies`;

// /////Dubai

// const Dubai = {
//   minCust:11,
//   maxCust: 38,
//   avgCo: 3.7,
//   avgCust:[],
//   avgCoPerHour:[],
//   totalCo:0,

//   getAvgCust:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
//     }
//   },

//   getavgCoPerHour:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
//     }
//   },

//   getSum:function(){

//     for (let i=0 ; i<14 ; i++){
//       this.totalCo =this.avgCoPerHour[i]+this.totalCo;
//     }
//   }

// };

// Dubai.getAvgCust();
// console.log(Dubai.avgCust);

// Dubai.getavgCoPerHour();
// console.log(Dubai.avgCoPerHour);

// Dubai.getSum();
// console.log(Dubai.totalCo);


// let containerDubai = document.getElementById('branch');
// let h2Dubai = document.createElement('h2');
// containerDubai.appendChild(h2Dubai);
// h2Dubai.textContent = 'Dubai';
// let unorderlistDubai = document.createElement('ul');
// containerDubai.appendChild(unorderlistDubai);

// for(let i=0 ; i<14 ; i++){
//   let liDubai = document.createElement('li');
//   unorderlistDubai.appendChild(liDubai);
//   if (i<6){
//     liDubai.textContent = `${i+6} am: `+ Dubai.avgCoPerHour[i] + ' cookies';
//   }
//   else if (i===6) {
//     liDubai.textContent = `${i+6} pm: `+ Dubai.avgCoPerHour[i] + ' cookies';
//   }
//   else {
//     liDubai.textContent = `${i-6} pm: `+ Dubai.avgCoPerHour[i] + ' cookies';
//   }
// }

// let liDubai = document.createElement('li');
// unorderlistDubai.appendChild(liDubai);
// liDubai.textContent = `Total: ${Dubai.totalCo} cookies`;




// ///Paris


// const Paris = {
//   minCust:11,
//   maxCust: 38,
//   avgCo: 3.7,
//   avgCust:[],
//   avgCoPerHour:[],
//   totalCo:0,

//   getAvgCust:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
//     }
//   },

//   getavgCoPerHour:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
//     }
//   },

//   getSum:function(){

//     for (let i=0 ; i<14 ; i++){
//       this.totalCo =this.avgCoPerHour[i]+this.totalCo;
//     }
//   }

// };

// Paris.getAvgCust();
// console.log(Paris.avgCust);

// Paris.getavgCoPerHour();
// console.log(Paris.avgCoPerHour);

// Paris.getSum();
// console.log(Paris.totalCo);


// let containerParis = document.getElementById('branch');
// let h2Paris = document.createElement('h2');
// containerParis.appendChild(h2Paris);
// h2Paris.textContent = 'Paris';
// let unorderlistParis = document.createElement('ul');
// containerParis.appendChild(unorderlistParis);

// for(let i=0 ; i<14 ; i++){
//   let liParis = document.createElement('li');
//   unorderlistParis.appendChild(liParis);
//   if (i<6){
//     liParis.textContent = `${i+6} am: `+ Paris.avgCoPerHour[i] + ' cookies';
//   }
//   else if (i===6) {
//     liParis.textContent = `${i+6} pm: `+ Paris.avgCoPerHour[i] + ' cookies';
//   }
//   else {
//     liParis.textContent = `${i-6} pm: `+ Paris.avgCoPerHour[i] + ' cookies';
//   }
// }

// let liParis = document.createElement('li');
// unorderlistParis.appendChild(liParis);
// liParis.textContent = `Total: ${Paris.totalCo} cookies`;


// ///Paris


// const Lima = {
//   minCust:2,
//   maxCust: 16,
//   avgCo: 4.6,
//   avgCust:[],
//   avgCoPerHour:[],
//   totalCo:0,

//   getAvgCust:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
//     }
//   },

//   getavgCoPerHour:function(){
//     for (let i=0 ; i<14 ; i++){
//       this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
//     }
//   },

//   getSum:function(){

//     for (let i=0 ; i<14 ; i++){
//       this.totalCo =this.avgCoPerHour[i]+this.totalCo;
//     }
//   }

// };

// Lima.getAvgCust();
// console.log(Lima.avgCust);

// Lima.getavgCoPerHour();
// console.log(Lima.avgCoPerHour);

// Lima.getSum();
// console.log(Lima.totalCo);


// let containerLima = document.getElementById('branch');
// let h2Lima = document.createElement('h2');
// containerLima.appendChild(h2Lima);
// h2Lima.textContent = 'Lima';
// let unorderlistLima = document.createElement('ul');
// containerLima.appendChild(unorderlistLima);

// for(let i=0 ; i<14 ; i++){
//   let liLima = document.createElement('li');
//   unorderlistLima.appendChild(liLima);
//   if (i<6){
//     liLima.textContent = `${i+6} am: `+ Lima.avgCoPerHour[i] + ' cookies';
//   }
//   else if (i===6) {
//     liLima.textContent = `${i+6} pm: `+ Lima.avgCoPerHour[i] + ' cookies';
//   }
//   else {
//     liLima.textContent = `${i-6} pm: `+ Lima.avgCoPerHour[i] + ' cookies';
//   }
// }

// let liLima = document.createElement('li');
// unorderlistLima.appendChild(liLima);
// liLima.textContent = `Total: ${Lima.totalCo} cookies`;
