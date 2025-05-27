/* ============= 
   ==== VAR ==== 
   ============= */

// Declaración ✅
var firstName; 
console.log('firstName declaración var = ', firstName); // undefined

// Asignación ✅
firstName = 'María';
console.log('firstName asignación var = ', firstName); // María

// Reasignación ✅
firstName = 'Laura';
console.log('firstName reasignación var = ', firstName); // Laura

// Redeclaración ✅
var firstName = 'Pepe';
console.log('firstName redeclaración var = ', firstName); // Pepe


/* ============= 
   ==== LET ==== 
   ============= */

// Declaración y asignación ✅
let fruit = 'Apple';

// Reasignación ✅
fruit = 'Kiwi';
console.log('fruit reasignación let = ', fruit);

// Redeclaración ❌
// let fruit = 'Banana'; // Cannot redeclare block-scoped variable 'fruit'


/* ============= 
   === CONST === 
   ============= */

// Declaración y asignación ✅
const animal = 'dog';

// Reasignación ❌
// animal = 'cat'; // TypeError: Assignment to constant variable

// Redeclaración ❌
// const animal = 'horse'; // Cannot redeclare block-scoped variable 'animal'

console.log('animal reasignación const = ', animal); // dog

/* ====================== */

const vehicles = [];

// Mutabilidad ✅
vehicles.push('car');
console.log('vehicles push const = ', vehicles); // ['car']

vehicles.pop();
console.log('vehicles pop const = ', vehicles); // []

/* ====================== */

// Declaración y asignación ✅
const fruitList = ['manzana', 'pera'];

// Mutabilidad ✅
fruitList[0] = 'piña'; // Cambio de valor en un elemento del array 
console.log('fruitList mutabilidad const = ', fruitList); // [ 'piña', 'pera' ]

// Redeclaración ❌
// const fruitList = ['banana', 'coco'] 

//console.log(fruitList); // SyntaxError: Identifier 'fruitList' has already been declared