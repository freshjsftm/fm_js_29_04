"use strict";
// let n = 10;
// const str1 = 'dsfd\''+n+'sfs';
// const str2 = `let n = ${n}
// trenningMath('www',10) = ${trenningMath('www',10)}`;
// alert(str2);

const logRangeNumber = function (max = 10, min = 1, number = 3) {
  //проверка на вход
  if (max < min) {
    return false;
  }
  //выводить числа из диапозона в обратном порядке
  let i = max;
  while (i >= min) {
    //логировать НЕ кратные числу
    if (i % number === 0) {
      i--;
      continue;
    }
    console.log(i);
    i--;
  }
  return true;
};

/*
2) предлагать пользователю решить арифметический пример до тех пор, пока он его не решит.
+ создать функцию продумать параметры
+ используя параметры, сформировать промпт
+ вычислить пример, который получился из параметров
- сравнить ваши вычисления и ответ пользователя
*/
/**
 *
 * @param {number} number1
 * @param {number} number2
 * @param {string} operator *|-|+|/
 * @returns {boolean}
 */
const trenningMath = function (number1 = 10, number2 = 2, operator = "+") {
  //выполнить рефакторинг кода - вынести расчет в функцию
  //const result = calc(number1, number2, operator);
  //if(result===null){return false;}
  if (isNaN(number1 * number2)) {
    return false;
  }
  let result = null; 
  switch (operator) {
    case "*":
      result = number1 * number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "+":
      result = number1 + number2;
      break;
    default:
      return false;
  }
  while(true){
    const answerUser = prompt(
      `${number1} ${operator} ${number2} = `,
      "your answer"
    );
    if(result === Number(answerUser)){
      return true;
    }
  }
};

const message = trenningMath() ? 'win' : 'error';
alert(message);