//Logical AND (&&) умножение
//true&&true=true     1*1=1
//false&&true=false   0*1=0
//true&&false=false   1*0=0
//false&&false=false  0*0=0

//Logical OR (||) сложение
//true||true=true     1+1=2
//false||true=true    0+1=1
//true||false=true    1+0=1
//false||false=false  0+0=0

let logic = 10 && "false" && 45;
console.log(logic);

logic = 0 || false || null;
console.log(logic);
