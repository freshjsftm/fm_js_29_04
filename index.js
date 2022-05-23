"use strict";

const symbol1 = Symbol('metka for dev');//234#$%wettwe#$5tr
const symbol2 = Symbol('metka for dev');
const obj = {
  1: 10,
  'prop1': 12,
  symbol1: 77,
  [symbol1]:'qwerty',
};

// delete obj.prop1;
// delete obj[symbol1];

export default obj;
