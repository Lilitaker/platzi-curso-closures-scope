/* ===================
   ======= CALL ======
   =================== */

const sasha = {
  name: 'Sasha',
  greet: function(isYelling, farewellIncluded) {
    const normalGreeting = `Hello, I am ${this.name}!`;
    const normalFarewell = 'Bye.';
    
    const greeting = isYelling ? normalGreeting.toUpperCase() : normalGreeting;
    const farewell = isYelling ? normalFarewell.toUpperCase() : normalFarewell;
    
    console.log(greeting);
    
    if(farewellIncluded) {
      console.log(farewell);
    }
  },
};

sasha.greet(true, true);
// 'HELLO, I AM SASHA!'
// BYE.

const pepe = { name: 'Pepe' };
//pepe.greet = sasha.greet;
//pepe.greet(); ✅ It works, but it's not what we want to do

sasha.greet.call(pepe, true, true);
// 'HELLO, I AM PEPE!'
// BYE.


/* ===================
   ====== APPLY ======
   =================== */

sasha.greet.call(pepe, [true, false]); //HELLO, I AM PEPE!

/* ===================
   ====== BIND ======
   =================== */

const andrea = {
  name: "Andrea",
  greet: function () {
    console.log(`Hi, I am ${this.name}.`); // Hi, I am Andrea. ✅
  },
};

const buttonEle = document.getElementById("button");
buttonEle.addEventListener("click", andrea.greet.bind(andrea));

const boundGreeting = andrea.greet.bind(andrea);
// Hi, I am Andrea. ✅