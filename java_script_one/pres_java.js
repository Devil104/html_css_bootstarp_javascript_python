alert("WELCOME TO PAYGU");
var firstname=prompt("Enter Your First Name:");
var lastname=prompt("Enter Your Last Name:");
var age=prompt("Enter Your Age:");
var colour=prompt("Enter yout Favourite colour:");

var namcon=null;
var agecon=null;
var colourcon=null;

if (firstname[0]===lastname[0]) {
  namcon=true;
}  else {
    namcon=false;
  }
if (age>=18 && age<30) {
  agecon=true;
}  else {
    agecon=false;
  }
if (colour[colour.length-1]==="k") {
  colourcon=true;
}  else {
    colourcon=false;
  }
if (namcon && agecon&& colourcon) {
  console.log("welcome");
}  else {
    console.log("Not Welcome");
  }
