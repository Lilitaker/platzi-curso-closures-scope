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

/* =================================== */

function sumWithClosure(firstNum) {
  return function sumSecondNumber(secondNum = 0) {
    return firstNum + secondNum;
  }
}

sumWithClosure();

const sum1 = sumWithClosure(1)(2);
const sum2 = sumWithClosure(90)();

console.log('1 + 2 = ', sum1); // 3
console.log('90 + 0 = ', sum2); // 90