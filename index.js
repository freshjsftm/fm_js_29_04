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
function compare(str1, str2){
  const mapStr1 = new Map();
  for (const letter of str1) { //letter->key
    if(mapStr1.has(letter)){  //t
      const value = mapStr1.get(letter);//1
      mapStr1.set(letter, value+1);//t->2
    } else{
      mapStr1.set(letter, 1);
    }
  }
  const mapStr2 = new Map();
  for (const letter of str2) { //letter->key
    if(mapStr2.has(letter)){
      const value = mapStr2.get(letter);
      mapStr2.set(letter, value+1);
    } else{
      mapStr2.set(letter, 1);
    }
  }
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