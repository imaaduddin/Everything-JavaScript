// ternary operator = shortcut for if statements
// takes 3 operands 
// 1. a condition with ?
// 2. expression if True :
// 3. expression if False 

// condition ? exprIfTrue : exprIfFalse 

function checkWinner(win) {
  win ? console.log("You win!") : console.log("You lose!");
}

checkWinner(true)
checkWinner(false)