"use strict";

// const checkSequence = (str) => {
//   let amount1 = 0;
//   let amount2 = 0;
//   for (const symbol of str) {
//     if(symbol==='('){
//       amount1++
//     }
//     if(symbol===')'){
//       amount2++
//     }
//   }
//   return amount1===amount2;
// }

// const checkSequence = (str) => { 
//   const stack = new Stack();
//   for (const symbol of str) {
//     if(symbol==='(' || symbol==='['){ 
//       stack.push(symbol);
//     }
//     if(stack.isEmpty){ 
//       return false;
//     }
//     if(symbol===')' || symbol===']'){
//       stack.pop();
//     }
//   }
//   return stack.isEmpty;
// }

// console.log(checkSequence('()()'));


const options = {
  brackets:{
    '(':')',
    '{':'}',
    '[':']',
  }
}

const checkSequence = (str, options) => { 
  const brackets = options.brackets;
  const closesBrackets = Object.values(brackets); 
  const stack = new Stack(str.length);
  for (const symbol of str) {  
    if(brackets[symbol] !== undefined){ 
      stack.push(symbol);               
      continue;
    }
    if(symbol === brackets[stack.pick()]){ 
      stack.pop();
    }else if(closesBrackets.includes(symbol)){ 
      return false;
    }
  }
  return stack.isEmpty;
}
console.log(checkSequence('{[[(2+5)]*]8}', options));
