"use strict";
//реализовать аналог встроенного объекта Array
//контсруктор прототипа-родителя с логикой с методами
function MyArrayProptotype() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  this.forEach = function(callback){
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }
}
//конструктор объекта с данными
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

function log(n){
  console.log(n*n);
}

MyArray.prototype = new MyArrayProptotype();

const myArray = new MyArray(1, 2, 3, 8, 5);//5
myArray.forEach(log);
