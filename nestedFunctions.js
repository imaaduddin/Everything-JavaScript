// nested functions = functions inside other functions 
// outer functions have access to inner functions 
// inner functions are "hidden" from outside the scope used in closures 

function login() {
  let userName = "Sharingan";
  let userInbox = 0;

  function displayUserName() {
    console.log("Hello", userName);
  }

  function displayUserInbox() {
    console.log("You have", userInbox, "new messages");
  }

  displayUserInbox();
  displayUserName();
}

login();

