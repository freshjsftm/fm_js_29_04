//const number1 = prompt("Enter number 1", "10");
//const number2 = prompt("Enter number 2", "20");
/**
 * Description function
 * @param {null|string} num
 * @returns {boolean}
 */
const isErrorInputNumber = function (num) {
  return num === "" || num === null || isNaN(Number(num));
};
/**
 * Return summa two number.
 * @param {number} number1 default = 1
 * @param {number} number2 default = 2
 * @returns {number}
 */
const calcSummaTwoNumber = function (number1=1, number2=2) {
  return number1 + number2;
};
//debugger

console.log(calcSummaTwoNumber(undefined,45));

// const check = isErrorInputNumber(number1) || isErrorInputNumber(number2);
// if (check===false) {  //!check - bad practic
//   const summaUser = calcSummaTwoNumber(Number(number1),Number(number2));
//   console.log(summaUser);
// } else {
//   console.log('not possible calc summa');
// }


