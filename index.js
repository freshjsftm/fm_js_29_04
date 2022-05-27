"use strict";

const dictionary = new Map();
dictionary.set('кіт','cat');
dictionary.set('привіт','Hello');
dictionary.set('голова','head');
dictionary.set('день','day');
dictionary.set('в\'язати','to knit');
dictionary.set('донька','daughter');
dictionary.set('причесати','comb');
dictionary.set('ходити','walk');
dictionary.set('кохання','love');
dictionary.set('поруч','near');
dictionary.set('подобатися','like');
dictionary.set('літо','summer');

const str1 = 'Донька люба мила гарна причесати кіт Літо поруч Голова подобатися поруч кохання';

const translate = (str, dict)=>{
  const lowerStr = str.toLowerCase();
  const words = lowerStr.split(' '); //донька
  const wordsTransleted = words.map((word)=>{
    if(dict.has(word)){
      return dict.get(word);
    }
    return word;
  })
  return wordsTransleted.join(' ');
}

console.log(translate(str1, dictionary));



