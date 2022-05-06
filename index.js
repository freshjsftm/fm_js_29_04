debugger
// let countTry = 0; //i
// while(countTry < MAX_TRY){ //i<MAX_TRY
//   const userInput = prompt('enter password','***');
//   countTry++; //i++
//   alert('try = ' + countTry);
//   if(userInput === CORRECT_PASSWORD){
//     alert('welcome');
//     break;
//   }
// }

for (let i = 1; i <= MAX_TRY; i++) {
  const userInput = prompt("enter password", "***");
  alert("try = " + i);
  if (userInput === CORRECT_PASSWORD) {
    alert("welcome");
    break;
  }
}
