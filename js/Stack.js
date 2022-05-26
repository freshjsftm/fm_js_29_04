'use strict';
class Stack{
  constructor(maxSize=5, ...args){
    this._size = 0;
    this._maxSize = maxSize;
    for (const argument of args) {
      this.push(argument);
    }
  }
  //дописать сеттер и геттер для this._maxSize
  get size(){
    return this._size;
  }
  get isEmpty(){
    return this._size === 0;
  }
  push(argument){
    if(this.size >= this._maxSize){
      throw new RangeError('stack overflow!');
    }
    this[`_${this.size}`] = argument;
    this._size++;
    return this.size;
  }
  pick(){
    return this[`_${this.size-1}`];
  }
  pop(){
    if(this.isEmpty){
      return;
    }
    const deletedElement = this[`_${this.size-1}`];
    delete this[`_${this.size-1}`];
    this._size--;
    return deletedElement;
  }
};

const stack1 = new Stack(undefined,8,12,7,4);
console.log(stack1);
