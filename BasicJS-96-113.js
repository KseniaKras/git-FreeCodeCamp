// 96. Using Objects for Lookups
		// Setup
		function phoneticLookup(val) {
			let result = "";
			// Only change code below this line
			const lookup = {
			"alpha": "Adams",
			"bravo": "Boston",
			"charlie": "Chicago",
			"delta": "Denver",
			"echo": "Easy",
			"foxtrot": "Frank"
			};
			result = lookup[val];
			// Only change code above this line
			return result;
		}
		phoneticLookup("charlie");

// 97. Testing Objects for Properties
		function checkObj(obj, checkProp) {
			// Only change code below this line
			if (obj.hasOwnProperty(checkProp)) {
			return obj[checkProp];
			} else {
			return "Not Found";
			}
		}
			// Only change code above this line

// 98. Manipulating Complex Objects
	const myMusic = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ],
        "gold": true
      },
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ]
      }
    ];

// 99. Accessing Nested Objects
		const myStorage = {
			"car": {
			"inside": {
				"glove box": "maps",
				"passenger seat": "crumbs"
				},
			"outside": {
				"trunk": "jack"
			}
			}
		};
		
		const gloveBoxContents = myStorage.car.inside["glove box"];

//100. Accessing Nested Arrays
		const myPlants = [
			{
			type: "flowers",
			list: [
				"rose",
				"tulip",
				"dandelion"
			]
			},
			{
			type: "trees",
			list: [
				"fir",
				"pine",
				"birch"
			]
			}
		];
		const secondTree = myPlants[1].list[1];

// 101. Record Collection
		// Setup
		const recordCollection = {
			2548: {
			albumTitle: 'Slippery When Wet',
			artist: 'Bon Jovi',
			tracks: ['Let It Rock', 'You Give Love a Bad Name']
			},
			2468: {
			albumTitle: '1999',
			artist: 'Prince',
			tracks: ['1999', 'Little Red Corvette']
			},
			1245: {
			artist: 'Robert Palmer',
			tracks: []
			},
			5439: {
			albumTitle: 'ABBA Gold'
			}
		};
		// Only change code below this line
		function updateRecords(records, id, prop, value) {
			if (prop !== "tracks" && value !== "") {
			records[id][prop] = value;
			} else if (prop === "tracks" && records[id].hasOwnProperty(tracks)) {
			records[id][prop] = [value];
			} else if (prop === "tracks" && value !== "") {
			records[id][prop].push(value);
			} else if (value === "") {
			delete records[id][prop];
			}
			return records;
		}
		updateRecords(recordCollection, 5439, 'artist', 'ABBA');
    //continue.....

// 102. Iterate with JavaScript While Loops
		const myArray = [];
		let i = 5;
		while(i >= 0) {
		myArray.push(i);
		i--;
		}

// 103. Iterate with JavaScript For Loops
		const myArray = [];
		// Only change code below this line
		for (let i = 1; i <= 5; i++) {
		myArray.push(i);
		}

// 104. Iterate Odd Numbers With a For Loop
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// 105. Count Backwards With a For Loop
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

