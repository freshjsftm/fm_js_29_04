const calcSummaTwoNamberReqAtUser = function(){
  let number1 = prompt('Enter number 1', '10');
  let number2 = prompt('Enter number 2', '20');
//ошибка: если пустая строка либо нажали отмена либо ввели что-то, что не цифры
  const error = number1==='' || number2==='' || number1===null || number2===null || isNaN(Number(number1)) || isNaN(Number(number2));
  if(error){
    //true
    //обработка ошибки
    return 'error'; //exit
  }
  //let summa = Number(number1) + Number(number2);
  //return summa;
  return Number(number1) + Number(number2);
 
}

let summa = calcSummaTwoNamberReqAtUser();
console.log(summa);











