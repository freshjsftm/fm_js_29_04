'use strict';

const arr = [1,2,3,4,5];
const isEven = function(elem){
  return elem%2 === 0;
}
const newArr = arr.filter(isEven);
console.log(newArr);


// function sayWord(howSay, whatSay){}

// function log(n){
//   console.log(n);
//   return;//undefined
// }

// for (let i = 0; i < arr.length; i++) {
//   log(arr[i]); 
// }
// //debugger
// arr.forEach(log);

// arr.forEach(
//   function(element){
//     return element+5;
//   }
// )

// const users = [{},{},{}];
// users.forEach(function(user){
//   user.stars = 1;
// });
// console.log(users);