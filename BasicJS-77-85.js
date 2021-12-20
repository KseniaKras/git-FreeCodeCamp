// 77. Introducing Else Statements
function testElse(val) {
	let result = "";
	// Only change code below this line
	if (val > 5) {
		result = "Bigger than 5";
	}
	else {
		result = "5 or Smaller";
	}
	// Only change code above this line
	return result;
}
testElse(4);

// 78. Introducing Else If Statements
function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	}
	else if (val < 5) {
		return "Smaller than 5";
	}
	else {
		return "Between 5 and 10";
	}
}
testElseIf(7);

// 79. Logical Order in If Else Statements
function orderMyLogic(val) {
	if (val < 5) {
		return "Less than 5";
	} else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}
orderMyLogic(7);

// 80. Chaining If Else Statements
function testSize(num) {
	// Only change code below this line
	if (num < 5) {
		return "Tiny"
	} else if (num < 10) {
		return "Small"
	} else if (num < 15) {
		return "Medium"
	} else if (num < 20) {
		return "Large"
	} else if (num >= 20) {
		return "Huge"
	}
	return "Change Me";
	// Only change code above this line
}
testSize(7);

// 81. Golf Code
		const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
		function golfScore(par, strokes) {
		// Only change code below this line
		if (strokes === 1) return "Hole-in-one!";
		if (strokes <= par - 2) return "Eagle";
		if (strokes === par - 1) return "Birdie";
		if (strokes === par) return "Par";
		if (strokes === par + 1) return "Bogey";
		if (strokes === par + 2) return "Double Bogey";
		if (strokes >= par + 1) return "Go Home!";
		return "Change Me";
		// Only change code above this line
		}
		golfScore(5, 4);

// 82. Selecting from Many Options with Switch Statements
		function caseInSwitch(val) {
			let answer = "";
			// Only change code below this line
				switch (val) {  
					case 1: 
					return "alpha";
					break;
					case 2:
					return "beta";
					break;
					case 3:
					return"gamma";
					break;
					case 4:
					return"delta";
					break;
				}
			// Only change code above this line
			return answer;
		}
		caseInSwitch(1);

// 83. Adding a Default Option in Switch Statements
		function switchOfStuff(val) {
			let answer = "";
			// Only change code below this line
			switch (val) {
			case "a":
			return "apple";
			break;
			case "b":
			return "bird";
			break;
			case "c":
			return "cat";
			break;
			default:
			return "stuff";
			break;
			}
			// Only change code above this line
			return answer;
		}
		switchOfStuff(1);

// 84. Multiple Identical Options in Switch Statements 
		function sequentialSizes(val) {
			let answer = "";
			// Only change code below this line
			switch(val) {
				case 1:
				case 2:
				case 3:
					return "Low";
					break;
				case 4:
				case 5:
				case 6:
					return "Mid";
					break;
				case 7:
				case 8:
				case 9:
					return "High";
					break;
			}
			// Only change code above this line
			return answer;
		}
		sequentialSizes(1);

// 85. Replacing If Else Chains with Switch
		function chainToSwitch(val) {
			let answer = "";
			// Only change code below this line
			switch (val) {
			case "bob":
			return "Marley";
			break;
			case 42:
			return "The Answer";
			break;
			case 1:
			return "There is no #1";
			break;
			case 99:
			return "Missed me by this much!";
			break;
			case 7:
			return "Ate Nine";
			break;
			}
			// Only change code above this line
			return answer;
		}
		chainToSwitch(7);

