//age>=18
/**
 * 
 * @param {number} age 
 * @returns {boolean}
 */
const isAdult = function(age=0, ADULT=18){
  return age>=ADULT;

  // if(age<18){
  //   return false;
  // }
  // return true;
}
const result = isAdult(18, 21);
console.log(result);
