const age = '18';//prompt()
//[0-3) - baby
//[3-6) - tudler
//[6-13) - children
//[13-18) - tinager
//[18-70) - adult
//[70-100) - oldmen
//[100-Infinity) - respect
debugger
if(isNaN(age) || age<0){
  console.log('error')
}else if(age<3){
  console.log('baby')
}else if(age<6){
  console.log('tudler')
}else if(age<13){
  console.log('children')
}else if(age<18){
  console.log('tinager')
}else if(age<70){
  console.log('adult')
}else if(age<100){
  console.log('oldmen')
}else{
  console.log('respect')
}
