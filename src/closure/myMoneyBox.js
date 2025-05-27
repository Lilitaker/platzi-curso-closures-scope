/* function moneyBox(coins){
  let saveCoins = 0;
	saveCoins += coins;
	console.log(`MoneyBox = $${saveCoins}`);
}

// No guarda el valor anterior
moneyBox(5); // 5
moneyBox(5); // 5 */

function moneyBox(){
  let saveCoins = 0;
	function countCoins(coins) {
		saveCoins += coins;
		console.log(`MoneyBox = $${saveCoins}`);
	}
	return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // 5
myMoneyBox(15); // 20

const moneyBoxAna = moneyBox();
moneyBoxAna(10); // 10
moneyBoxAna(20); // 30
moneyBoxAna(5); // 35

/* ========================== */

function subjectsEnrollment(studentName) {
	let subjectsList = [];
	function addSubjects(subjects) {
		subjects.map(subject => subjectsList.push(subject));
		console.log(`${studentName} enrolled in ${subjectsList.join(' and ')}.`);
	}
	return addSubjects;
}

const mariaSubjects = subjectsEnrollment('María')(['Math', 'Spanish']);
console.log(mariaSubjects); // María enrolled in Math and Spanish.

const pedroSubjects = subjectsEnrollment('Pedro');
pedroSubjects(['Piano', 'Italian']); // Pedro enrolled in Piano and Italian.