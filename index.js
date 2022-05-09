'use strict'; //ES2015


function Dog(name='Test',isMale=true){
  this.name = name;
  this.isMale = isMale;
  this.say = function(voice='Wof'){
    return voice;
  }
}

const testDog = new Dog();
console.log(testDog);
const dog1 = new Dog("Oscar",true);
console.log(dog1);
console.log(dog1.say());


