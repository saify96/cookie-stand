'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const seattle = {
  minCust:23,
  maxCust: 65,
  avgCo: 6.3,
  avgCust:[],
  avgCoPerHour:[],
  totalCo:0,

  getAvgCust:function(){
    for (let i=0 ; i<14 ; i++){
      this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
    }
  },

  getavgCoPerHour:function(){
    for (let i=0 ; i<14 ; i++){
      this.avgCoPerHour[i]= Math.floor(this.avgCust[i]*this.avgCo);
    }
  },

  getSum:function(){

    for (let i=0 ; i<14 ; i++){
      this.totalCo =this.avgCoPerHour[i]+this.totalCo;
    }
  }

};

seattle.getAvgCust();
console.log(seattle.avgCust);

seattle.getavgCoPerHour();
console.log(seattle.avgCoPerHour);

seattle.getSum();
console.log(seattle.totalCo);


let container = document.getElementById('branch');
let h2 = document.createElement('h2');
container.appendChild(h2);
h2.textContent = 'seattle';
let unorderlist = document.createElement('ul');
container.appendChild(unorderlist);

for(let i=0 ; i<14 ; i++){
  let li = document.createElement('li');
  unorderlist.appendChild(li);
  if (i<6){
    li.textContent = `${i+6} am: `+ seattle.avgCoPerHour[i] + ' cookies';
  }
  else if (i===6) {
    li.textContent = `${i+6} pm: `+ seattle.avgCoPerHour[i] + ' cookies';
  }
  else {
    li.textContent = `${i-6} pm: `+ seattle.avgCoPerHour[i] + ' cookies';
  }
}

let li = document.createElement('li');
unorderlist.appendChild(li);
li.textContent = `Total: ${seattle.totalCo} cookies`;





