"use strict";

/*
написать функцию, которая проверяет может ли 
одна строка быть создана из символов другой строки

compare('testц', 'sett'); //true  t-2,e-1,s-1,ц-1   s-1,e-1,t-2
compare('love', 'move'); //false

1)создать мапу для каждого слова
  - для каждого символа (буква)
    - проверять существование ключа(буквы)
    - если есть, то увеличиваем значение
    - если нет, то устанавливаем новую пару: ключ-значение(1)
2)сравниваем размер мапы, 
  - если по размеру разные, значит false
  - если по размеру одинаковые:
    проходимся по ключам одной мапы и сравниваем значения у соответствующих ключей второй мапы
*/
function createMap(str){
  const mapStr = new Map();
  for (const letter of str) { 
    if(mapStr.has(letter)){  
      const value = mapStr.get(letter);
      mapStr.set(letter, value+1);
    } else{
      mapStr.set(letter, 1);
    }
  }
  return mapStr;
}
function compare(str1, str2){
  const mapStr1 = createMap(str1);
  const mapStr2 = createMap(str2);
  if(mapStr1.size!==mapStr2.size){
    return false;
  }
  for (const letter of mapStr1.keys()) {
    if(mapStr1.get(letter) !== mapStr2.get(letter)){
      return false;
    }
  }
  return true;
}

console.log(compare('teste', 'sett')); //tes  //set
console.log(compare('love', 'move'));
console.log(compare('qwerty', 'qwer'));