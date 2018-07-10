// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  
  
  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var PC = myObj[checkProp];
  return PC || "Not Found";
 
}

// Test your code by modifying these values
checkObj("gift");



var myMusic = [
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
    "artist": "Marianna OLE",
    "title": "Piano",
    "release_year": 2017,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }// Add record here
];



// Setup
var myStorage = {
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

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line




// Setup
var myPlants = [
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

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

