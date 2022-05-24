"use strict";

const arr = [4,8,6,25,8,9,85,9,7,5];
//константная сложность O(1)
console.log(arr[5]); //9
//линейная сложность O(n)
/**
 * 
 * @param {any} arr 
 * @param {any} key 
 * @returns  number position in array
 */
const linearSearch = (arr, key)=>{
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
  for(let i=0; i<arr.length; i++){
    if(arr[i]===key){
      return i; 
    }
  }
  return -1;
}
console.log(linearSearch(arr, 8))
//квадратичная сложность O(n^2)
const createArrayMultiple = (limit = 1) => {
  const tableArray = [];
  for(let i=1; i<=limit; i++){
    for(let j=1; j<=limit; j++){
      tableArray.push(`${i}*${j}=${i*j}`);
    }
  }
  return tableArray;
}
console.log(createArrayMultiple(4))
//логарифмическая сложность O(log(n))
const arrSorted = [1,3,4,6,7,12,16,44,55,78,99];
const binarySearch = (arr, key) =>{
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while(start<=end){
    middle = Math.round((start+end)/2); //index
    if(arr[middle] === key){
      return middle;
    }
    if(arr[middle] > key){
      end = middle - 1;
    }else{
      start = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearch(arrSorted, 1))