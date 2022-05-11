'use strict';

const pr1 = 12;
const pr2 = 12;

console.log(pr1===pr2);

const ob1 = {};
const ob2 = {};
const newOb = ob1;//копирование по ссылке
console.log(ob1===ob2);//false
console.log(ob1===newOb);//true
newOb.prop = 12;
