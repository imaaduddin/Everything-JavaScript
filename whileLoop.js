// while loop = repeats some code while the loop's condition remains true 

let creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR CREDIT CARD TO GET RID OF IT!");

while (creditNum == "") {
  creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR CREDIT CARD TO GET RID OF IT!");
}

console.log("THANK YOU! Your computer has no virus!");
