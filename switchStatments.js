// switch = statement that evaluates a value/expression
// matches the value to many case clauses 
// more efficient that many "else if" statements 


let grade = "E";

switch (grade) {
  case "A":
    console.log("You did great!");
    break;

  case "B":
    console.log("You did good!");
    break;
  
  case "C":
    console.log("You did alright!");
    break;
  
  case "D":
    console.log("Didn't do so well!");
    break;
  
  case "F":
    console.log("I'm sorry to tell you that you failed.");
    break;

  default:
    console.log("No grade posted.");
}