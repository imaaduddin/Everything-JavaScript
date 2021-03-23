// object = a container for properties/methods 
// property = values/variables that describe what an object has 
// methods = functions that describe what an object can do 

let ninja = {
  name : "Sasuke",
  age : 15,

  train : function() {
    console.log("Sasuke is training fire style jutsu");
  },

  eat : () => {
    console.log("Sasuke is eating some rice balls");
  },

  drink : () => {
    console.log("Sasuke is drinking some tea");
  }
}

// ninja.name; // dot notation 
// ninja["age"]; // bracket notation 

console.log(ninja.drink());
console.log(ninja.name);
console.log(ninja.train());