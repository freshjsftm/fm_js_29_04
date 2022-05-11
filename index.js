"use strict";
//реализовать аналог встроенного объекта Array
//контсруктор прототипа-родителя с логикой с методами
function MyArrayProptotype() {
  this.push = function (value) {
    this[this.length] = value;
    //this.length;
    return ++this.length;
  };
  this.pop = function(){
    if(this.length===0){
      return;
    }
    const lastItem = this[this.length-1];
    delete this[--this.length];
    //this.length;
    return lastItem;
  };
}
//конструктор объекта с данными
function MyArray() {
  this.length = 0;
}

MyArray.prototype = new MyArrayProptotype();

const myArray1 = new MyArray();
// console.log(myArray1.prototype);
const myArray2 = new MyArray();
console.log(myArray1.length);
console.log(myArray1.push(8));
console.log(myArray1);
console.log(myArray1.push === myArray2.push);

// const array1 = new Array();
// const array2 = new Array();
// console.log(array1);
// console.log(array1.push(8));
// console.log(array1 === array2);
// console.log(array1.push === array2.push); 
