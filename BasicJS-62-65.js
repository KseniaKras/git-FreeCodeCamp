// 62. Assignment with a Returned Value
		// Setup
		let processed = 0;
		function processArg(num) {
		return (num + 3) / 5;
		}
		// Only change code below this line
		processed = processArg(7);

// 63. Stand in Line
		function nextInLine(arr, item) {
			// Only change code below this line
			arr.push(item);
			var removed = arr.shift();
			return removed;
			// Only change code above this line
		}
		// Setup
		const testArr = [1, 2, 3, 4, 5];
		// Display code
		console.log("Before: " + JSON.stringify(testArr));
		console.log(nextInLine(testArr, 6));
		console.log("After: " + JSON.stringify(testArr));

// 64. Understanding Boolean Values
		function welcomeToBooleans() {
			// Only change code below this line
			return true; // Change this line
			// Only change code above this line
		}

// 65. Use Conditional Logic with If Statements
		function trueOrFalse(wasThatTrue) {
			// Only change code below this line
		if (wasThatTrue) {
			return "Yes, that was true";
		} else { 
			return "No, that was false";
		}
			// Only change code above this line
		}