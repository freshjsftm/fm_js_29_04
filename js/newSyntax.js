"use strict";

class User{
  constructor(name, sname, age){
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }
  isAdult() {
    return this.age >= AGE_ADULT;
  }
};

const userNew = new User('Tim','Le',-5);
const userNew2 = new User('Tom','Bom',250);
console.log(userNew.getFullName());













class Woker{
  constructor(name, sname, rate, days){
    this.name = name;
    this.sname = sname;
    this.rate = rate
    this.days = days;
  }
  getSalary(){
    return this.rate*this.days;
  };
}
const woker = new Woker('Elon','Musk',100,5);
//console.log(woker.getSalary())
