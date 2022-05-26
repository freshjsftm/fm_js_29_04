'use strict';
class Queue{
  constructor(...args){
    this._head = 0;//номерок головы 
    this._tail = 0;//номерок хвоста 
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size(){
    return this._tail - this._head;
  }
  push(argument){ //добавляет в конец очереди
    this[this._tail] = argument;
    this._tail++;
    return this.size;
  }
  shift(){ //удаляет голову очереди и возвращает ее
    if(this.size<=0){
      return;
    }
    const deletedElement = this[this._head];
    delete this[this._head];
    this._head++;
    return deletedElement;
  }
};

const q = new Queue(2,5,98,4);
