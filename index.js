"use strict";
/*
- наследование
- инкапсуляция
- полифомирзм
*/
class User{
  constructor(name, sname, age) {
    this._name = name;
    this._sname = sname;
    this.age = age; //setter
    this.isBan = false;
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
    return `${this._name} ${this._sname}`;
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
    return `${this._name}`;
  }
};
class Admin extends Moderator{
  constructor(name, sname, age, rights, prop){
    super(name, sname, age, rights);
    this.prop = prop;
  }
  // ban(user){
  //   if(user instanceof User){
  //     user.isBan = true;
  //   }
  //   throw new TypeError('not user!!!')
  // }
  // unBan(user){
  //   if(user instanceof User){
  //     user.isBan = false;
  //   }
  //   throw new TypeError('not user!!!')
  // }
  toggleBan(user){
    if(user instanceof User){
      return user.isBan = !user.isBan;
    }
    throw new TypeError('not user!!!')  
  }
};
const user = new User('Rob', 'Bob', 24);
const admin = new Admin('Elon', 'Musk', 50, {rule:5}, 789);
console.log(admin.getfullName());
console.log(admin.toggleBan(user));

// const mod1 = new Moderator('Elon', 'Musk', 50, {rule:1});
// console.log(mod1.deleteMessage(2))
// console.log(mod1.sayName())


class Squirell { 
  constructor(name, color) { 
    this.name = name; 
    this.color = color; 
  } 
  jump() { 
    return `${this.name} is jumping`; 
  } 
}; 
 
 
class FlySquirell extends Squirell{ 
  constructor(name, color, distance) { 
    super(name, color); 
    this.distance = distance; 
  } 
  fly() { 
    return `${this.name} is flying ${this.distance}m.`; 
  } 
} 
 
class MagicSquirell extends FlySquirell { 
  constructor(name, color, distance, songs) { 
    super(name, color, distance); 
    this.songs = songs; 
  } 
  dance() { 
    return `${this.name} is dancing`; 
  } 
  sing() { 
     return `songs: ${this.songs.join(', ')}.`;
  } 
}

const mb = new MagicSquirell('belka','rainbow',2000,['p1','p2']);