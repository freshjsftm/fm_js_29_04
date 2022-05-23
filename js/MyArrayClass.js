"use strict";
/*
наследование
инкапсуляция 
полиморфизм
*/

class MyArrayIterator{
  constructor(myArray){
    this.collection = myArray;
    this.index = 0;
  }
  next(){
    return {
      value: this.collection[this.index++], //current element
      done: this.index > this.collection.length, //true|false
    }
  }
};

class MyArray {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  filter(callback) {
    const newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newMyArray.push(this[i]);
      }
    }
    return newMyArray;
  }
  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  }
  concat(myArrayIntance) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (let i = 0; i < myArrayIntance.length; i++) {
      result.push(myArrayIntance[i]);
    }
    return result;
  }
  flat(depth = 1) {
    depth = Math.floor(depth);
    let result = new MyArray();
    this.forEach((elem) => {  //this[i]===elem
      if (MyArray.isMyArray(elem) && depth > 0) {
        result = result.concat(elem.flat(depth - 1));
      } else if (elem !== undefined) {
        result.push(elem);
      }
    });
    return result;
  }

  [Symbol.iterator](){
    return new MyArrayIterator(this);
  }

  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}

const myArray1 = new MyArray(5,2,7,8);
const myArray2 = new MyArray(...myArray1,...myArray1);

console.log(...myArray1);
for (const elem of myArray1) {
  console.log(elem)
}
