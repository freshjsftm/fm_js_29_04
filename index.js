"use strict";

const symbol1 = Symbol('metka for dev');
const symbol2 = Symbol('metka for dev');
const obj = {
  1: 10,
  'prop1': 12,
  symbol1: 77,
  [symbol1]:'qwerty',
};

const arr = [1,2,3,4];
// for (const iterator of arr) {
//   console.log(iterator)
// }
// console.log(...arr);


const arrMy = new MyArray(1,2,3,4);
// for (const iterator of arrMy) {
//   console.log(iterator)
// }
//console.log(...arrMy);
