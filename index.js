"use strict";
function StudentPrototypePrototype(){
  this.eat=function(){
    return this.name + ' is eating';
  };  
}
function StudentPrototype(){
  this.toString = function() {
    return `${this.name} ${this.sname}`;
  };
  this.read=function(){
    return this.name + ' is reading';
  }
}
StudentPrototype.prototype = new StudentPrototypePrototype();

function Student(name, sname, age=22){
  if(!new.target){
    return new Student(name, sname, age);
  }  
  this.name = name;
  this.sname = sname; 
  this.age = age;
};
Student.prototype = new StudentPrototype();

const student = new Student("Elon","Musk", 50);
console.log(student);
console.log(student.toString());
console.log(student.read());
console.log(student.eat());
