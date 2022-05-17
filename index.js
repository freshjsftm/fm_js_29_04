"use strict";
//const userName = new String('Elon');
// let userName = 'Elon';
// userName = userName.toUpperCase();

const str = 'tO be OR Not TO bE';
/*
написать функцию, которая преобразует строку к 
Jaden Case "To Be Or Not To Be"
1)разбить строку на слова - split(' ') => array
2)перебираем массив c каждым словом:
- найти первую букву и сделать большой [0] toUpperCase
- остальные буквы сделать маленькими substring(1) to LowerCase
- склеить первую и оставшееся слово конкатенация(+)
3)массив превратить назад в строку - join(' ')
4)вернуть полученную строку
*/
function stringToUpper(string, separator=' ') {
  return string
    .split(separator)//разбить строку на слова - split(' ') => array
    .map(function (element) {//перебираем массив
      //найти первую букву и сделать большой
      //склеить +
      //остальные буквы сделать маленькими
      return element[0].toUpperCase() + element.substring(1).toLowerCase();
    })//новый массив из правильных слов
    .join(separator);//массив превратить назад в строку
}
console.log(stringToUpper("tO  be OR Not TO bE"));

/*
function stringToJadenCase(str) {
  let words = str.split(" ");
  let stringFinal = "";
  for (let i = 0; i < words.length; i++) {
    let first = words[i].substring(0, 1).toUpperCase();
    let leftovers = words[i].substring(1).toLowerCase();
    stringFinal += first + leftovers + " ";
  }
  return stringFinal;
}
console.log(stringToJadenCase(str));
*/
/*
function splitString(string, separator) {
  const arrayOfStrings = string.split(separator);
  for(let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] = arrayOfStrings[i].substring(0,1).toUpperCase() + arrayOfStrings[i].substring(1).toLowerCase();
}
  return arrayOfStrings.join(separator);
}
const tempestString = 'sadsadsa dsadas das dss adsa sa sa sad asd ';
const space = ' ';
console.log(splitString(tempestString, space));
*/

/*
function stringToUpper(string) {
  //newString = string.toLowerCase();
  let newArrayString = string.split(" ");//array
  newArrayString = newArrayString.map(function (element) {
    return element[0].toUpperCase() + element.substring(1).toLowerCase();
  });
  return newArrayString.join(" ");
}
console.log(stringToUpper("tO be OR Not TO bE"));
*/

