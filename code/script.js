/*
// **************************************************************************** //
// ******************** ACCEPTANCE CRITERIA ******************** //

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
// **************************************************************************** //
*/
// ***********************
// Assignment code 
// ***********************

// arrays to choose characters from
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '%', '&', ',', '*', '+', '-', '.', '/', '<', '>', '?','~'];

var passwordChar = [];


// prompt to confirm length of password (between 8-128)
function generatePassword() {
  var confirmLength = window.prompt(
    "How many characters would you like your password to contain? (between 8-128)"
  );

  // if answer is less than 8 or more than 128
  while(confirmLength < 8 || confirmLength > 128) {
    window.alert(
      "Password length must be between 8-128 characters. Please choose again."
    );
    var confirmLength = window.prompt(
      "How many characters would you like your password to contain? (between 8-128)"
    );
  }

  // confirm which characters to use in pasword
  var confirmLowerCase = window.confirm(
    "Click OK if you would you like your password to include lowercase characters."
    );
  var confirmUpperCase = window.confirm(
    "Click OK if you would you like your password to include uppercase characters."
    );
  var confirmNumber = window.confirm(
    "Click OK if you would you like your password to include numbers."
    );
  var confirmSpecialChar = window.confirm(
    "Click OK if you would you like your password to include special characters."
    );
  
  // if no character parameters are chosen
  while (confirmLowerCase === false && confirmUpperCase === false && confirmNumber === false && confirmSpecialChar === false) {
    window.alert("You must choose at least one parameter. Please choose again.");
    // reloop through choices
    var confirmLowerCase = window.confirm(
      "Click OK if you would you like your password to include lowercase characters."
      );
    var confirmUpperCase = window.confirm(
      "Click OK if you would you like your password to include uppercase characters."
      );
    var confirmNumber = window.confirm(
      "Click OK if you would you like your password to include numbers."
      );
    var confirmSpecialChar = window.confirm(
      "Click OK if you would you like your password to include special characters."
      );
  }

  var passwordChar = [];

  if (confirmLowerCase) {
    passwordChar += lowercase;
  }
  if (confirmUpperCase) {
    passwordChar += uppercase;
  }
  if (confirmNumber) {
    passwordChar += number;
  }
  if (confirmSpecialChar) {
    passwordChar += specialChar;
  }

  console.log(passwordChar);

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordChar(Math.floor(Math.random) * passwordChar.length)
    console.log(randomPassword);
  }
  return randomPassword;

}


// ***************************************
// !!!!! DO NOT CODE BELOW HERE !!!!!!!!
// ***************************************


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
