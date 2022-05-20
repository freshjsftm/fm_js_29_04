"use strict";
/*
- наследование
- инкапсуляция
- полифомирзм
*/

class Figura {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    return 0;
  }
}
class Triangular extends Figura {
  constructor(side1, side2, angle) {
    super("Triangular");
    this.side1 = side1;
    this.side2 = side2;
    this.angle = angle;
  }
  getArea() {
    return this.side1 * this.side2 * Math.sin(this.angle * (180 / Math.PI));
  }
}
class Circle extends Figura {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}
const c = new Circle(10);
const tr = new Triangular(3, 3, 60);

function getAreaAnyFigura(figure) {
  if (figure instanceof Figura) {
    return figure.getArea();
  }
  throw new TypeError("not figure");
}

console.log(getAreaAnyFigura(c));
console.log(getAreaAnyFigura(tr));
console.log(getAreaAnyFigura({}));
