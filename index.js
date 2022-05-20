"use strict";
/*
- наследование
- инкапсуляция
- полифомирзм
*/
class User{
  #name;
  #sname;
  constructor(name, sname, age) {
    this.#name = name;
    this.#sname = sname;
    this.age = age; //setter
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
  getfullName() {
    return `${this.#name} ${this.#sname}`;
  }
};
class Moderator extends User{
  constructor(name, sname, age, rights){
    super(name, sname, age);//ссылка на конструктор родителя
    this.rights = rights;
  }
  deleteMessage(id){
    return `${this.getfullName()} delete message ${id}`;
  }
  sayName(){
    return `${this.#name}`;
  }
};
const mod1 = new Moderator('Elon', 'Musk', 50, {rule:1});
console.log(mod1.deleteMessage(2))