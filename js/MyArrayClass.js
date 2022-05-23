"use strict";
class MyArray{
  constructor(){
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  forEach(callback){
    for (let i = 0; i < this.length; i++) {
      callback(this[i],i,this);
    }
  };
  filter(callback){
    const newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i],i,this)){
        newMyArray.push(this[i]);
      } 
    }
    return newMyArray;
  };
  some(callback){
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i],i,this)){
        return true;
      } 
    }
    return false;
  };
  every(callback){
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i],i,this)===false){
        return false;
      } 
    }
    return true;
  };

  static isMyArray(obj){
    return obj instanceof MyArray;
  }
};