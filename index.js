"use strict"; //ES2015

function User(name = "Test", sname = "Stest", age = 0) {
  this.name = name;
  this.sname = sname;
  this.age = age;
  this.getFullName = function () {
    return this.name + " " + this.sname;
  };
}

// const user1 = new User("Elena", "Yat", 20);
// user1.sname = 'Musk';
// console.log(user1.sname);
// console.log(user1.getFullName());
// const user2 = new User("Den", "Shev", 45);
// const user3 = new User();

const uniqueObject = {
  prop1:12,
};

function Country(name = "USA", population = 330000, area = 3000) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.getDensity = function () {
    return this.population / this.area;
  };
}

// const usa = new Country();
// console.log(usa);
// console.log(usa.getDensity());

function Auto(marka = "bmw", maxSpeed = 450) {
  this.name = marka;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  this.accelerate = function (value = 10) {
    if (value < 0) {
      return this.speed;
    }
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      return (this.speed = this.maxSpeed);
    }
    return this.speed;
  };
  this.decelerate = function (value = 10) {
    if (value < 0) {
      return this.speed;
    }
    this.speed -= value;
    if (this.speed <= 0) {
      return (this.speed = 0);
    }
    return this.speed;
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}
const auto = new Auto();
console.log(auto);
console.log(auto.accelerate(70));
console.log(auto.accelerate(70));
console.log(auto.speed);
console.log(auto.decelerate(20));
console.log(auto.speed);
console.log(auto.stop());
