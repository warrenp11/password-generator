// ***********************
// Assignment code 
// ***********************

// arrays to choose characters from
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!@#$^&%*()+=-[]{}|:<>?,.';
var number = '1234567890';

var confirmLength = "";
var randomPassword = "";



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

  var passwordChar = "";
  passwordChar += (confirmLowerCase ? lowercase : "");
  passwordChar += (confirmUpperCase ? uppercase : "");
  passwordChar += (confirmNumber ? number : "");
  passwordChar += (confirmSpecialChar ? specialChar : "");
  console.log(passwordChar);

  randomPassword = password(confirmLength, passwordChar);
  console.log(randomPassword);
}


function writePassword(l, passwordChar) {
    var randomPassword = "";
    for (var i =0; i < l; i++) {
      randomPassword += passwordChar.charAt(Math.floor(Math.random() * passwordChar.lenth));
    }   
    return randomPassword;

}

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
