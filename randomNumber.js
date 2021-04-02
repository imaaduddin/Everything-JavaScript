// Math.random() = generates a pseudo-random between 0 and 1
// don't use this for security purposes 

let randomNum;

// randomNum = Math.random(); // 0 - 1
// randomNum = Math.floor(Math.random()) * 6; // 0 - 5
// randomNum = Math.floor(Math.random() * 6) + 1; // 1 - 6

let getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}




console.log(getRandomNum(1, 6));