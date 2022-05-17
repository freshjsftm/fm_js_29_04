"use strict";

const check  = new Boolean(false);
console.dir(check);//object

//0 undefined '' NaN null false
const str = '';

if(Boolean(str)){
  console.log('yes')
}else{
  console.log('no') 
}