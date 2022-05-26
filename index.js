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
//     if(symbol==='('){ 
//       stack.push(symbol);
//     }
//     if(stack.isEmpty){ 
//       return false;
//     }
//     if(symbol===')'){
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
  const stack = new Stack();
  for (const symbol of str) {  //')'
    if(brackets[symbol] !== undefined){ //brackets['(']=>')'
      stack.push(symbol);               //'('
      continue;
    }
    // if(stack.isEmpty){ 
    //   return false;
    // }
    const lastOfStack = stack.pick(); //'('
    const correctSymbol = brackets[lastOfStack];
    if(symbol === correctSymbol){ //')'
      stack.pop();
    }else{ //тут надо дать возможность пропускать не скобки
      return false;
    }
  }
  return stack.isEmpty;
}
console.log(checkSequence(')()', options));