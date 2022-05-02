//Logical NOT (!)
//неявно приводит к логическому типу 
//и потом выполняет инверсию
//в результате выполнения будет только логический тип

//ложь это:
//false
//null
//undefined
//NaN
//0  +0  -0
//'' - empty string

let logic = 'Elon';//true
let result = !logic;
console.log(!logic);//!true -> false
console.log(logic);
console.log(result);
