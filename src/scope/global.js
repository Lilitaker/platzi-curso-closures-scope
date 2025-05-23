// Mala práctica

var fruit = 'Apple';
console.log('global log = ', fruit); 

function bestFruit(){
  console.log('function log = ', fruit);  
}

bestFruit();

/* ==================================== */

function countries(){
  country = 'Colombia';
  console.log('inside function = ', country);
}

countries();
console.log('outside countries function = ', country);

