"use strict";

//деструктуризация - способ создать переменную

// const fullName = (user) => {
//   return `${user.commonInfo.name} ${user.commonInfo.sname}`;
// }

const fullName = ({commonInfo:{name},contactInfo:{phone:{work:phoneWork}}}) => {
  return `${name} ${phoneWork}`;
}
//написать функцию, которая возвращает строку: с фамилией и рабочим телефоном
const user = {
  commonInfo:{
    id:1,
    name: 'Elon',
    sname:'Musk',
    bday:{
      day:28,
      month:6,
      year:1971,
    },
  },
  contactInfo:{
    phone:{
      home:'123-23-23',
      work:'456-45-45',
    },
    adress:{
      country:'USA',
      town: 'NY',
    },
    email:'elon@gmail.com'
  },
  profession:'engineer',
};

const {profession, ...restUser} = user;  //второй случай оператора ...rest

const arr = [1000,2,78,5,6,5,455];
const  [first, ...restArr] = arr;
const [,,third,,qwe] = arr;


//console.log(userData(user))
//console.log(fullName(user))

// const {
//   profession, 
//   contactInfo:{email},
//   commonInfo:{bday:{day:userBDay}}
// } = user; 
// console.log(email);
// console.log(profession);
// console.log(userBDay);

//const {profession:userProf} = user; //userProf - деструктуризация
//console.log(userProf);


// const {profession} = user; 
