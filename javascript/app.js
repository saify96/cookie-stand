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
  getAvgCust:function(){
    for (let i=0 ; i<14 ; i++){
      this.avgCust[i] = getRandomIntInclusive(this.minCust , this.maxCust);
    }
  },

};
seattle.getAvgCust();
console.log(seattle.avgCust);

