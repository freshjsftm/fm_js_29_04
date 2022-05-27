"use strict";
const symbol = Symbol('important property!');
const obj = {
  one:456,
  'f i r s t':7,
  [symbol]:'password',
    1:'one',
}
obj.one = 777;

const myMap = new Map();

myMap.set(obj, 'Obj');
myMap.set('1','one');
myMap.set(1,101);

myMap.set('1','first');
myMap.delete('1');
console.log(myMap.get('1'));

console.log(myMap);
