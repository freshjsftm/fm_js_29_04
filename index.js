'use strict';

const obj = {
  prop1:12,
  'prop 2':true,
  11:44,
};

// const key = 'prop 2';
// console.log(obj);
// console.log(obj["prop1"]);
// console.log(obj["prop 2"]);
// console.log(obj["11"]);
// console.log(obj[key]); //obj["prop 2"] true

// const valueKey = 'new prop';
// obj[valueKey] = 12;




// const table = {
//   '2*2':4,
//   '2*3':6,
// }

//вернуть объект таблица умножения
const createMultTable = function(limit=4){
  const table = {};
  for(let i=2; i<=limit; i++){
    for(let j=2; j<=limit; j++){
      table[`${i}*${j}`]=i*j;
    }
  }
  return table;
}
//debugger
const table = createMultTable();
console.log(table)

const str = '2*3';
console.log(table[str]);