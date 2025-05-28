// This only "work" with var, with let/const we would get: ReferenceError: Cannot access '-----' before initialization

console.log(dogName); // Undefined
var dogName = 'Pepe';

/* ================================ */

getCatName();

function getCatName(){
  console.log(`The best cat is ${catName}.`); // The best cat is undefined.
}

var catName = 'Kitty';