"use strict";

class User {
  /**
   *
   * @param {string} name   Name
   * @param {string} sname  Sname
   * @param {number} age range must be: 0 ... 150
   */
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age; //setter
    User.amountUser++;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("value must be number");
    }
    if (age < 0 || age > MAX_AGE) {
      throw new RangeError(`range must be: 0 ... ${MAX_AGE}`);
    }
    this._age = age;
  }
  get fullName() {
    return `${this.name} ${this.sname}`;
  }
  set fullName(fullNameStr) {
    if(typeof fullNameStr !== 'string'){
      throw new TypeError('must be string');
    }
    const arrayFullName = fullNameStr.split(' ').filter((w)=>w!==''); 
    if(arrayFullName.length !== 2){
      throw new RangeError('must be 2');
    }
    this.name = arrayFullName[0];
    this.sname = arrayFullName[1];
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }
  static amountUser = 0;
  static createTestUser(){
    return new User('Anonim','Anonims',22);
  }
}
const test = User.createTestUser();
const userNew = new User("Tim", "Le", 55);
const userNew2 = new User("Tom", "Bom", 25);
userNew.age = 44;
console.log(userNew.age);
console.log(userNew);

class Woker {
  constructor(name, sname, rate, days) {
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.days = days;//setter
  }
  get days() {
    return this._days;
  }
  set days(days) {
    if (typeof days !== "number") {
      throw new TypeError("value must be number");
    }
    if (days < 0 || days > MAX_WORK_DAYS) {
      throw new RangeError(`range must be: 0 ... ${MAX_WORK_DAYS}`);
    }
    this._days = days;
  }
  getSalary() {
    return this.rate * this.days; //getter
  }
}
const woker = new Woker("Elon", "Musk", 100, 5);
console.log(woker.getSalary())
woker.days = 1;
