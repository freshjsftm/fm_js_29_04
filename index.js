/**
 * 
 * @param {function} howSay 
 * @param {string} word 
 */
function sayWord(howSay,word='Qwerty'){
  howSay(word);
}

sayWord(console.log, 'asd');
// sayWord(alert,'dog');
// sayWord(prompt,'dog');
// sayWord(confirm,'dog');
