"use strict";

const dictionary = new Map();
dictionary.set("кіт", "cat");
dictionary.set("привіт", "Hello");
dictionary.set("голова", "head");
dictionary.set("день", "day");
dictionary.set("в'язати", "to knit");
dictionary.set("донька", "daughter");
dictionary.set("причесати", "comb");
dictionary.set("ходити", "walk");
dictionary.set("кохання", "love");
dictionary.set("поруч", "near");
dictionary.set("подобатися", "like");
dictionary.set("літо", "summer");

const str1 =
  "Донька люба мила гарна причесати кіт Літо поруч Голова подобатися поруч кохання";

const translate = (str, dict, separator = " ") => {
  return str
    .toLowerCase()
    .split(separator)
    .map((word) => (dict.has(word) ? dict.get(word) : word))
    .join(separator);
};

//console.log(translate(str1, dictionary));

const iterKeys = dictionary.keys();
const arrKeysDict = [...iterKeys];
// for (const iterator of dictionary.keys()) {
//   arrKeysDict.push(iterator)
// }

const arrValuesDict = [...dictionary.values()];

const obj7 = {7:7};
const key = obj7; //link

const mySet = new Set();
mySet.add(7);
mySet.add(7);
mySet.add(7);
mySet.add('7');
mySet.add(obj7); //link
// mySet.add([7]);  //link
mySet.add({7:7}); //link
// mySet.add([7]); //link
mySet.add(key);

console.log(mySet.has({7:7})) //false
console.log(mySet.has(obj7)) //true
console.log(mySet)