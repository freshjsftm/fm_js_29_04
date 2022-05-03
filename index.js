const calcSummaTwoNamberReqAtUser = function(){
  let number1 = prompt('Enter number 1', '10');
  let number2 = prompt('Enter number 2', '20');
//ошибка: если пустая строка либо нажали отмена либо ввели что-то, что не цифры
  if(number1==='' || number2==='' || number1===null ||number2===null || isNaN(Number(number1)) || isNaN(Number(number2))){
    //true
    //обработка ошибки
    return 'error';
  }else{
    //false
    let summa = Number(number1) + Number(number2);
    return summa;
  } 
}

let summa = calcSummaTwoNamberReqAtUser();
console.log(summa);











