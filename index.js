const userNumber = "22";
debugger //+prompt('Enter number');
if (isNaN(userNumber)) {
  console.log(userNumber, "NAN");
} else if(userNumber % 5 === 0) {
  console.log(userNumber, "multiply 5");
} else if(userNumber % 3 === 0){
  console.log(userNumber, "multiply 3");
} else if(userNumber % 2 === 0){
  console.log(userNumber, "multiply 2");
} else {
  console.log(userNumber, "multiply 1");
}

console.log("thanks");
// if (isNaN(userNumber)) {
//   console.log("NAN");
// } else {
//   if (userNumber % 5 === 0) {
//     console.log("multiply 5");
//   } else {
//     if (userNumber % 3 === 0) {
//       console.log("multiply 3");
//     } else {
//       if (userNumber % 2 === 0) {
//         console.log("multiply 2");
//       }
//     }
//   }
// }


