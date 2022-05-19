"use strict";

class User{
  #age; //декларация приватного свойства - обратиться можно только в классе
  /**
   * 
   * @param {string} name   Name
   * @param {string} sname  Sname
   * @param {number} age range must be: 0 ... 150
   */
  constructor(name, sname, age){
    if(typeof age !== 'number'){
      throw new TypeError('value must be number');
    }
    if(age<0 || age>MAX_AGE){
      throw new RangeError(`range must be: 0 ... ${MAX_AGE}`);
    }
    this.name = name;
    this.sname = sname;
    this.#age = age;
  }
  getAge(){
    return this.#age;
  }
  setAge(age){
    if(typeof age !== 'number'){
      throw new TypeError('value must be number');
    }
    if(age<0 || age>MAX_AGE){
      throw new RangeError(`range must be: 0 ... ${MAX_AGE}`);
    }
    this.#age = age;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }
  isAdult() {
    return this.age >= AGE_ADULT;
  }
};

const userNew = new User('Tim','Le',55);
const userNew2 = new User('Tom','Bom', 25);
userNew.setAge(12);
console.log(userNew.getAge());
console.log(userNew2);













class Woker{
  constructor(name, sname, rate, days){
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.days = days;
  }
  getSalary(){
    return this.rate*this.days;
  };
}
const woker = new Woker('Elon','Musk',100,5);
//console.log(woker.getSalary())
