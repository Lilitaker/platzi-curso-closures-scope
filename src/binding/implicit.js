//Es fácil de identificar ya que el llamado del método estará acompañado de un punto a su izquierda y del objeto que será el valor de this.

const sasha = {
  name: 'Sasha',
  greet: function() {
    console.log(`Hi, I am ${this.name}.`);
  },
  brother: {
    name: 'Eric',
    greet: function() {
      console.log(`I am ${sasha.name}'s brother. My name is ${this.name}.`);
    },
  },
};

sasha.greet(); // 'Hi, I am Sasha.' ✅
sasha.brother.greet(); // "I am Sasha's brother. My name is Eric." ✅

/* ================================================== 
   ================================================== 
   ================================================== */

// Aquí se muestra un ejemplo de la diferencia entre invocación de método e invocación directa:

const natalia = {
  name: 'Natalia',
  twitter: '@natalialifs',
  greet: function() {
    function followMeOnTwitter() {
      console.log(`Follow me on Twitter:  ${this.twitter}.`);
      // 'Follow me on Twitter:  undefined.' ❌
    }
    
    console.log(`Hi, I am ${this.name}.`); // 'Hi, I am Natalia.' ✅
    
    // Invocación directa
    followMeOnTwitter(); 
  },
};

// Invocación de método
natalia.greet(); 

const pedro = {
  name: 'Pedro',
  twitter: '@pedrolifs',
  greet: function() {
    console.log(`Hi, I am ${this.name}.`); // 'Hi, I am Pedro.' ✅
    this.followOnTwitter();
  },
  followOnTwitter: function() {
      console.log(`Follow me on Twitter:  ${this.twitter}.`);
      // 'Follow me on Twitter:  @pedrolifs.' ✅
    },
};

// Invocación de método
pedro.greet();