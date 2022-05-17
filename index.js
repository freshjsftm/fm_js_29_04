"use strict";

/*
напишите функцию стрелку, которая принимает два числа и возвращает большее из двух
n1>n2 ? n1 : n2
*/
//const getMaxFromTwoNumber = (n1, n2)=>{return n1>n2 ? n1 : n2; }
const getMaxFromTwoNumber = (n1, n2)=> n1>n2 ? n1 : n2; 

const showArgs = function(a,b, ...c) {
  console.log(c)
  c.forEach((item)=>{
    console.log(this)
  })
}
showArgs(1,2,3,4,5);///undefined

const obj = {
  prop:12,
  showArgs,
}
obj.showArgs(1,1,1,1,1);///obj
