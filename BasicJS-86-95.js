// 86. Returning Boolean Values from Functions
		function isLess(a, b) {
			// Only change code below this line
			return a < b;
			// Only change code above this line
		}
		isLess(10, 15);

// 87. Return Early Pattern for Functions
    // Setup
    function abTest(a, b) {
      // Only change code below this line
        if (a < 0 || b < 0) {
          return undefined;
        }
      // Only change code above this line
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    abTest(2,2);

// 88. Counting Cards
		let count = 0;
		function cc(card) {
		// Only change code below this line
			switch (card) {
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				count++;
				break;
				case 10:
				case "J":
				case "Q":
				case "K":
				case "A":
				count--;
				break;
			};
		if (count > 0) {
				return count + " Bet";
		} else {
			return count + " Hold";
		};
		return "Change Me";
		// Only change code above this line
		}
		cc(2); cc(3); cc(7); cc('K'); cc('A');

// 89. Build JavaScript Objects
		const myDog = {
			// Only change code below this line
			"name": "Bianka",
			"legs": 4,
			"tails": 1,
			"friends": ["Human", "Food"]
			// Only change code above this line
		};

// 90. Accessing Object Properties with Dot Notation
    // Setup
    const testObj = {
      "hat": "ballcap",
      "shirt": "jersey",
      "shoes": "cleats"
    };
    // Only change code below this line
    const hatValue = testObj.hat;      // Change this line
    const shirtValue = testObj.shirt;    // Change this line

// 91. Accessing Object Properties with Bracket Notation
    // Setup
    const testObj = {
      "an entree": "hamburger",
      "my side": "veggies",
      "the drink": "water"
    };
    // Only change code below this line
    const entreeValue = testObj["an entree"];   // Change this line
    const drinkValue = testObj["the drink"];    // Change this line

// 92. Accessing Object Properties with Variables
		// Setup
		const testObj = {
			12: "Namath",
			16: "Montana",
			19: "Unitas"
		};
		// Only change code below this line
		const playerNumber = 16;  // Change this line
		const player = testObj[playerNumber];   // Change this line

// 93. Updating Object Properties
    // Setup
    const myDog = {
      "name": "Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"]
    };
    // Only change code below this line
    myDog.name = "Happy Coder";

// 94. Add New Properties to a JavaScript Object
		const myDog = {
			"name": "Happy Coder",
			"legs": 4,
			"tails": 1,
			"friends": ["freeCodeCamp Campers"]
		};
		myDog["bark"] = "woof";

// 95. Delete Properties from a JavaScript Object
    // Setup
    const myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"],
      "bark": "woof"
    };
    // Only change code below this line
    delete myDog.tails;