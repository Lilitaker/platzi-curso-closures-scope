'use strict';

// Si usamos strict el valor de this sería undefined
// Si usamos import/export el modo strict viene habilitado por defecto

function whoIAm() {
	console.log(`Hi, I am: `, this); 
};

whoIAm(); // Hi, I am undefined.

// Si no usamos strict el valor de this sería Window

function whoIAm() {
	console.log(`Hi, I am: `, this);
};

whoIAm();
// Hi, I am:  
// Window {0: global, window: Window, self: Window, ...}


