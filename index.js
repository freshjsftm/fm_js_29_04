// const season = '15';//"\n-winter\n-spring\nsummer\n-fall";

// switch (season) {
//   case "1":
//   case "2":
//   case "12":
//     console.log("winter");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("fall");
//     break;
//   default:
//     console.log("fail");
//     break;
// }


const month = prompt("enter month number", 1);
//debugger;
if (isNaN(month) || month <= 0) {
  console.log("error");
} else if (month <= 2) {
  console.log("winter");
} else if (month <= 5) {
  console.log("spring");
} else if (month <= 8) {
  console.log("summer");
} else if (month <= 11) {
  console.log("fall");
}else if (month <= 12) {
  console.log("winter");
}else{
  console.log("fail");
}