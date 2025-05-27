function greeting() {
  let userName = 'Lili';

	function displayUserName() {
		return `Hello ${userName}!`;
	}

	return displayUserName();
}

const g = greeting();
console.log(g); // Hello Lili!

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