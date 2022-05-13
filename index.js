"use strict";
function User(fname, sname, age, isMale, email, isSubscribing = false) {
  this.fname = fname;
  this.sname = sname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribing = isSubscribing;
}
function UserProptotype() {
  this.getFullName = function () {
    return `${this.fname} ${this.sname}`;
  };
}
User.prototype = new UserProptotype();

const createRandomUsers = function (amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`,
      `Sname${i}`,
      Math.floor(Math.random() * (80 - 20)) + 20, //[20..80)
      Math.random() > 0.5, //true|false
      `email${i}@gmail.com`
    );
    db.push(user);
  }
  return db;
};

const users = createRandomUsers(50);
console.table(users);

/* получить массив полных имен пользователей, 
используя метод map */
const newUsers = users.map(function (user) {
  return user.getFullName();
});
console.table(newUsers);

/* получить массив пользователей, старше 65,
используя filter */
const newOldUsers = users.filter(function (user) {
  return user.age > OLD_AGE; //true false
});
console.table(newOldUsers);

/* получить массив пользователей female
используя filter */
const newFemaleUsers = users.filter(function (user) {
  return user.isMale === false; //true false
});
console.table(newOldUsers);

/* 
зарандомить подписку у пользователя
используя forEach
*/

users.forEach(function (user) {
  user.isSubscribing = Math.random() > 0.5; //true||false
});
console.table(users);

//получить массив бабушек с подпиской

const oldFemaleUsersWithSubscribing = users
  .filter(function (user) {
    return user.isMale;
  })
  .filter(function (user) {
    return user.age < OLD_AGE;
  })
  .filter(function (user) {
    return user.isSubscribing===false;
  });
console.table(oldFemaleUsersWithSubscribing);