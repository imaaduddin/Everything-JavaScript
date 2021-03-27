// useful string properties and methods 

let myName = "Itachi Uchiha";
let myVilliage = "Konoha";
let myOrganization = "Akatsuki";
let myPhone = "123-456-7890";

myPhone = myPhone.replaceAll("-", "");
console.log(myPhone);

let myInfo = myVilliage.concat(" ", myOrganization);
console.log(myInfo);

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("i"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// let firstName = myName.slice(0, 3);

// let firstName = myName.slice(0, myName.lastIndexOf("i"));

// let lastName = myName.slice(4)

let lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

