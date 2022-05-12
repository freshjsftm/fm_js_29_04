"use strict";
const toString = function() {
  return `${this.name} ${this.sname}`;
}
const animal = {
  // name: "anonimus",
  eat:function(){
    return this.name + ' is eating';
  }
};
const man = {
  countFingers:5,
  name: "human",
  read:function(){
    return this.name + ' is reading';
  }
};
const student = {
  id: 1,
  name: "Elon",
  sname: "Musk",
  age: 50,
  toString, //toString:toString,
};
man.__proto__ = animal;
student.__proto__ = man;
//student.__proto__ = animal;//перезапишет
console.log(student);
console.log(student.read());
console.log(man.eat());


// const student2 = {
//   id: 2,
//   name: "Bob",
//   sname: "Rob",
//   age: 33,
//   toString:toString,
// };


//console.log(student.toQwerty); //undefined
// console.log(student2);
// console.log(student2.toString());
// console.log(student2.toString === student.toString);
