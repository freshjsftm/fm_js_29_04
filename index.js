//найти периметр квадрат
//сторона*4

/**
 * 
 * @param {number} side 
 * @returns {null | number}
 */
const calcPerimetrSquare = function(side=0){
  if(side<0){
    return null;
  }
  return side*4;
}
const result = calcPerimetrSquare(8);
console.log(result);
