// Assignment Code

//we use the ID for user interaction
//document is the entire index file and the document is an object as well so anything with an object needs a dot notation (.)
//anything that's an object has a method (querySelector) - basically a function inside an onject. It targets a selector of your element


//create variable to save special characters
//create variables to save numbers (doesn't need to be saved in an array, can be saved in a string)
//create variable for lowercase all letters from A to Z
//create variable for uppercase all letters from A to Z


//first prompt - ask user for size of password between 8 and 128
//if the size is outside of 8 and 128, then alert user of "invalid"

//second prompt - confirm special characters

//third prompt- confirm numbers characters

//fourth prompt- confirm lowercase

//fifth prompt - confirm uppercase


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var specialChar = "!@#$%^&*()-=+{}";
var num = "0123456789";



//so when we reference the btn we could add properties to the button or user interaction
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var savedPassword = "";
  var passSize = window.prompt("Choose a password size between 8 and 128 characters");


  //prompt allows the user to type in a value
  // var userLength = window.prompt("How many characters would you like your password to contain?");

  if (passSize >= 8 && passSize <= 128) {
    var isSpecialChar = window.confirm("Do you want to include special character in your password?");

    var isNum = window.confirm("Do you want to include numbers in your password?");
    var isLower = window.confirm("Do you want to include lowercase in your password?");

    var isUpper = window.confirm("Do you want to include uppercase in your password?");

    
    if (isSpecialChar === true) {
      //generates random password
      //randomizes password from 0-9
      var randomIndex = Math.floor(Math.random() * specialChar.length);
      savedPassword = savedPassword + specialChar[randomIndex];
    }

    if (isNum === true) {
      //generates random password
      //randomizes password from 0-9
      var randomIndex = Math.floor(Math.random() * num.length);
      savedPassword = savedPassword + num[randomIndex];
    }

    if (isLower === true) {
      //generates random password
      //randomizes password from 0-9
      var randomIndex = Math.floor(Math.random() * lowerCase.length);
      savedPassword = savedPassword + lowerCase[randomIndex];
    }

    if (isUpper === true) {
      //generates random password
      //randomizes password from 0-9
      var randomIndex = Math.floor(Math.random() * upperCase.length);
      savedPassword = savedPassword + upperCase[randomIndex];
    }

      //validation
    if(specialChar === false && isNum === false && isUpper === false && isLower === false){
      window.alert("You must pick one character type");
      return ""; //double quotes so the text box does not show up as undefined
    }
  

  } else {
    window.alert("Sorry, you are outside the password range");
  }

//loop
for (var i = savedPassword.length; i < passSize; i++) {
  // Generate a random index based on the available character types
  var randomIndex;

  if (isSpecialChar === true && savedPassword.length < passSize) {
    randomIndex = Math.floor(Math.random() * specialChar.length);
    savedPassword += specialChar[randomIndex];
  }

  if (isNum === true && savedPassword.length < passSize) {
    randomIndex = Math.floor(Math.random() * num.length);
    savedPassword += num[randomIndex];
  }

  if (isLower === true && savedPassword.length < passSize) {
    randomIndex = Math.floor(Math.random() * lowerCase.length);
    savedPassword += lowerCase[randomIndex];
  }

  if (isUpper === true && savedPassword.length < passSize) {
    randomIndex = Math.floor(Math.random() * upperCase.length);
    savedPassword += upperCase[randomIndex];
  }
}



  return savedPassword;
}
//confirm is like a boolean value - true or false. shows ok and cancel
//var isLowerCase = window.confirm("Inlcude Lower Case");

//just an alert message and it doesn't need a variable because it doesn't return anything
//no input values to get from the user
//   window.alert("Invalid");

//   console.log(userLength);

//   console.log(isLowerCase);
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//has addEventListener method that adds user interaction
generateBtn.addEventListener("click", writePassword);

