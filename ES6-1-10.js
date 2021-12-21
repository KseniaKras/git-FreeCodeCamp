// 1. Compare Scopes of the var and let Keywords
		function checkScope() {
			let i = 'function scope';
			if (true) {
			let i = 'block scope';
			console.log('Block scope i is: ', i);
			}
			console.log('Function scope i is: ', i);
			return i;
		}


// 2. Mutate an Array Declared with const
		const s = [5, 7, 2];
		function editInPlace() {
		// Only change code below this line
		s[0] = 2;
		s[1] = 5;
		s[2] = 7;
		// Using s = [2, 5, 7] would be invalid
		// Only change code above this line
		}
		editInPlace();


// 3. Prevent Object Mutation
		function freezeObj() {
			const MATH_CONSTANTS = {
			PI: 3.14
			};
			// Only change code below this line
				Object.freeze(MATH_CONSTANTS);
			// Only change code above this line
			try {
			MATH_CONSTANTS.PI = 99;
			} catch(ex) {
			console.log(ex);
			}
			return MATH_CONSTANTS.PI;
		}
		const PI = freezeObj();

 // 4. Use Arrow Functions to Write Concise Anonymous Functions
		const magic = () => new Date;
		/* var magic = function() {
		return new Date();
		}; */


// 5. Write Arrow Functions with Parameters
		/* var myConcat = function(arr1, arr2) {
		return arr1.concat(arr2);
		}; */
		const myConcat = (arr1, arr2) => arr1.concat(arr2);
		console.log(myConcat([1, 2], [3, 4, 5]));


// 6. Set Default Parameters for Your Functions
		// Only change code below this line
		const increment = ( number, value = 1 ) => number + value;
		// Only change code above this line


// 7. Use the Rest Parameter with Function Parameters
		const sum = (...args) => {
			return args.reduce((a, b) => a + b, 0);
		}
		console.log(sum(1, 2, 3));


// 8. Use the Spread Operator to Evaluate Arrays In-Place
