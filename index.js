const lang = prompt("Choose lang:\n1-ua\n2-it\n3-en\n4-es");
//debugger;
switch (lang) {
  case "1":
  case "ua":
  case "ukraine":
    console.log("привіт");
    break;
  case "2":
  case "it":
    console.log("chao");
    break;
  case "3":
  case "en":
    console.log("hi");
    break;
  case "4":
  case "es":
    console.log("hola");
    break;
  default:
    console.log("repeat choose");
    break;
}
console.log("end");

// if(lang==='1' || lang==='ua'){
//   console.log('привіт')
// }else if(lang==='2' || lang==='it'){
//   console.log('chao')
// }else if(lang==='3' || lang==='en'){
//   console.log('hi')
// }else if(lang==='4' || lang==='es'){
//   console.log('hola')
// }else{
//   console.log('repeat choose')
// }
// console.log('end')
