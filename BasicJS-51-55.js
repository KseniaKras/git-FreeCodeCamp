// 51. Manipulate Arrays With pop()
		// Setup
		const myArray = [["John", 23], ["cat", 2]];
		// Only change code below this line
		const removedFromMyArray = myArray.pop();
		console.log(removedFromMyArray);
		console.log(myArray);

// 52. Manipulate Arrays With shift()
		// Setup
		const myArray = [["John", 23], ["dog", 3]];
		// Only change code below this line
		const removedFromMyArray = myArray.shift();
		console.log(myArray);
		console.log(removedFromMyArray);

// 53. Manipulate Arrays With unshift()
		// Setup
		const myArray = [["John", 23], ["dog", 3]];
		myArray.shift();
		// Only change code below this line
		myArray.unshift(["Paul", 35]);

// 54. Shopping List
		const myList = [["Milk", 2], ["Bread", 1], ["Eggs", 10], ["Chocolate", 1], ["Cheese", 1]];

// 55. Write Reusable JavaScript with FunctionsPassed
		function reusableFunction() {
			console.log("Hi World");
		}
		reusableFunction();