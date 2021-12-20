// 106. Iterate Through an Array with a For Loop
    const myArr = [2, 3, 4, 5, 6];
    let total = 0
    for (let i = 0; i < myArr.length; i++) {
      total += myArr[i];
    }

// 107. Nesting For Loops
		function multiplyAll(arr) {
			let product = 1;
			// Only change code below this line
			for (let i = 0; i < arr.length; i++) {
				for (let j = 0; j < arr[i].length; j++) {
					product = product * arr[i][j];
				}
			}
			// Only change code above this line
			return product;
		}
		multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 108. Iterate with JavaScript Do...While Loops
		const myArray = [];
		let i = 10;
		// Only change code below this line
		do {
		myArray.push(i)
		i++;
		}
		while (i < 5);

// 109. Replace Loops using Recursion
		function sum(arr, n) {
			// Only change code below this line
			if(n <= 0) {
				return 0;
			} else {
				return sum(arr, n-1) + (arr[n-1]);
			}
			// Only change code above this line
		}

// 110. Profile Lookup






// Use the parseInt Function
		function convertToInteger(str) {
			return parseInt(str);
		}
		convertToInteger("56");

// Use the parseInt Function with a Radix
		function convertToInteger(str) {
			return parseInt(str, 2);
			}
			convertToInteger("10011");

// Use the Conditional (Ternary) Operator
		function checkEqual(a, b) {
			return a === b ? "Equal" : "Not Equal";
			}
			checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators
		function checkSign(num) {
			return (num > 0) ? "positive"
			: (num < 0) ? "negative"
			: "zero" ;
		}
		checkSign(10);

