const calcFactorial = function(number=1){
  if(number<0){
    return null;
  }
  if(number>MAX_SAFE_FACTORIAL){
    return false;
  }
  if(number===0 || number===1){
    return 1;
  }
  let result = 1n; //bigint
  for(let i=1; i<=number; i++){
    result *= BigInt(i); //result = 1*1*2*3*4*5
  }
  return result;
}
//bigint*bigint(number)
//debugger
console.log(calcFactorial(5));
console.log(calcFactorial(15));//6 = 1*2*3