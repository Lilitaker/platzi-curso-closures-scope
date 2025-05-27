// Ámbito léxico

const global = 0;

function myFunction() {
  const number = 1;
	console.log(number);

	function parent() { // Closure
		const inner = 2;
		console.log(`number = ${number} - global = ${global}`);

		function child() {
			console.log(`inner = ${inner} - number = ${number} - global = ${global}`);
		}

		return child();
	}

	return parent();
};

myFunction();

/* 
1
number = 1 - global = 0
inner = 2 - number = 1 - global = 0
*/