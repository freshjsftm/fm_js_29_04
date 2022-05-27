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
  const brackets = options.brackets; //{'(':')','{':'}','[':']',}
  //тут надо собрать все значения объекта brackets в массив
  const closesBrackets = Object.values(brackets); //[')','}',']']
  const stack = new Stack();
  for (const symbol of str) {  //'2'
    if(brackets[symbol] !== undefined){ //brackets[')']=>undefined
      stack.push(symbol);               //'('
      continue;
    }
    // if(stack.isEmpty){ 
    //   return false;
    // }
    //const lastOfStack = stack.pick(); //'('
    const correctSymbol = brackets[stack.pick()];//')','}',']'
    if(symbol === correctSymbol){ //')'
      stack.pop();
    }else if(closesBrackets.includes(symbol)){ 
      //тут надо дать возможность пропускать не скобки
      return false;
    }
  }
  return stack.isEmpty;
}
console.log(checkSequence('{[(2+5)*]8}', options));
