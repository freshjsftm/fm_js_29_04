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


const arr1 = [1,2,3,5,9,96,3,5,1,2];
const arr2 = [1,8,3,5,9,967];
const arr3 = [...arr1, ...arr2];

const mySet = new Set([...arr1, ...arr2]);

//const arrUnique = [...mySet];
const arrUnique = [...new Set([...arr1, ...arr2])];

const arrValuesSet = [...mySet.values()];
// const arrKeysSet = [...mySet.keys()];


console.log(mySet)


