'use strict';

const object1 = {};
const object2 = new Object();
const object3 = Object();

console.log(object1);
console.log(object2);
console.log(object3);

function MyObject(){
  if(!new.target){
    return new MyObject();
  }
}

const obj1 = MyObject();// create object without new
console.log(obj1);