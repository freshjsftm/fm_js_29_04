'use strict';

function MyArray(){
  this.length=0;
  this.push = function(value){
    this[this.length] = value;
    this.length++;
    return this.length;
  }
}

const myArray1 = new MyArray();
const myArray2 = new MyArray();
console.log(myArray1.length);
console.log(myArray1.push(8));
console.log(myArray1.push(7));
console.log(myArray1);
console.log(myArray1.push===myArray2.push);

const array1 = new Array();
const array2 = new Array();
console.log(array1.length);
console.log(array1.push(8));
console.log(array1===array2);
console.log(array1.push===array2.push);//