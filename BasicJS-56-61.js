// 56. Passing Values to Functions with Arguments
		function functionWithArgs(param1, param2) {
			console.log(param1+param2);
		}
		functionWithArgs(1, 2);
		functionWithArgs(7, 9);

// 57. Return a Value from a Function with Return
		function timesFive(num) {
			return num * 5;
		}
		const value = timesFive(5);
		console.log(value);
		const value = timesFive(2);
		console.log(value);

		const value = timesFive(0);
		console.log(value);

// 58. Global Scope and Functions
		// Declare the myGlobal variable below this line
		const myGlobal = 10;
		function fun1() {
		oopsGlobal = 5; // Assign 5 to oopsGlobal Here
		}
		// Only change code above this line
		function fun2() {
		var output = "";
		if (typeof myGlobal != "undefined") {
			output += "myGlobal: " + myGlobal;
		}
		if (typeof oopsGlobal != "undefined") {
			output += " oopsGlobal: " + oopsGlobal;
		}
		console.log(output);
		}

// 59. Local Scope and Functions
		function myLocalScope() {
			// Only change code below this line
			var myVar;
			console.log('inside myLocalScope', myVar);
		}
		myLocalScope();
		// Run and check the console
		// myVar is not defined outside of myLocalScope
		console.log('outside myLocalScope', myVar);

// 60. Global vs. Local Scope in Functions
		// Setup
		const outerWear = "T-Shirt";
		function myOutfit() {
		// Only change code below this line
		var outerWear = "sweater";
		// Only change code above this line
		return outerWear;
		}
		myOutfit();

// 61. Understanding Undefined Value returned from a Function
		// Setup
		let sum = 0;
		function addThree() {
		sum = sum + 3;
		}
		// Only change code below this line
		function addFive() {
		sum = sum + 5;
		}
		// Only change code above this line
		addThree();
		addFive();