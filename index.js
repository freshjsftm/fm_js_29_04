"use strict";

const f1 = function (n1, ...numbers) { //rest - остаточные параметры
  console.log(n1);
  console.log(numbers);
};

const f2 = (n1, ...rest) => {
  console.log(n1);
  console.log(rest);
};
f1(1,2,3);
f2(4, 8, 9);
const sum1 = (...args)=>{
  let result = null;
  for (let i = 0; i < args.length; i++) {
    result += args[i];   
  }
  return result;
}
console.log(sum1(3,3,5));
const sum2 = (...args)=>{
  let result = null;
  args.forEach((number)=>{result += number;})
  return result;
}
console.log(sum2(5,3));
const sum3 = (...args)=> args.reduce((result, number)=>result+number, null);
//console.log(sum3(1,2));

const arrNums = [1,5,9,5,8,9];
console.log(sum3(...arrNums));//spred - оператор расширения
console.log(sum3(1,5,9,5,8,9));

const a1 = [5,5,5,5];
const arrResult = [...a1, 888, ...arrNums];
console.log(arrResult);