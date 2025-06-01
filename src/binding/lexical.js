'use strict';

const sasha = {
  name: 'Sasha',
  twitter: '@sashalifs',
  greet: function() {
    const followMeOnTwitter = () => {
      console.log(`Follow me on Twitter: ${this.twitter}.`);
      // 'Follow me on Twitter: @sashalifs.' ✅
    }
    
    console.log(`Hi, I am ${this.name}.`); // 'Hi, I am Sasha.' ✅
    
    // Invocación directa
    followMeOnTwitter(); 
  },
};

// Invocación de método
sasha.greet(); 

/* ===================================== */

class Person {
	constructor(name){
		this.name = name;
		this.greet = this.greet.bind(this);
	}

	greet() {
		console.log(`Hello, I am ${this.name}.`);
	}
}

const pepe = new Person('Pepe');

pepe.greet(); // Hello, I am Pepe. ✅

/* ========================================= */

// Podemos lograr lo mismo con arrow functions

class PersonOne {
	constructor(name){
		this.name = name;
	}

	greet = () => {
		console.log(`Hello, I am ${this.name}.`);
	}
}

const laura = new Person('Laura');

laura.greet(); // Hello, I am Laura. ✅
