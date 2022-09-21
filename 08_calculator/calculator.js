const add = function() {
	let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum+= arguments[i];
  }
  return sum;
};

const subtract = function() {
  let sum = arguments[0] - arguments[1];
  return sum;
};

const sum = function() {
  let sum = 0;
  for(let i = 0; i < arguments[0].length; i++){
    sum+= arguments[0][i];
  }
  return sum;
};

const multiply = function() {
  let product = 1;
  for(let i = 0; i < arguments[0].length; i++){
    product = product*arguments[0][i];
  }
  return product;
};

const power = function() {
	let product = 1;
  for(let i = 0; i < arguments[1]; i++){
    product = product*arguments[0];
  }
  return product;
};

const factorial = function() {
	let product = 1;
  for(let i = 0; i < arguments[0]; i++){
    product = product * (arguments[0]-i);
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
