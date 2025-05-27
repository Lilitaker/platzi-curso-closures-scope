function fruits(){
	if(true){
		var fruit1 = 'Apple';
		let fruit2 = 'Kiwi';
		const fruit3 = 'Banana';

		console.log(fruit2); // Block scope
		console.log(fruit3); // Block scope
	}
	console.log(fruit1); // Function scope
	// console.log(fruit2); // Error
	// console.log(fruit3); // Error
}

fruits();