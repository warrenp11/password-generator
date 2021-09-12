// Assignment code

// ARRAYS OF POTENTIAL CHARACTERS
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", ",", "+", "-", ".", "/", "<", ">", "?", "~"];

//console.log(lowercase);
//console.log(uppercase);
//console.log(number);
//console.log(specialCharacter);

// GLOBAL VARIABLE DECLARATIONS
var confirmLength = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialCharacter;

// GENERATE PASSWORD FUNCTION
function generatePassword() {
    // Prompt to confirm how many characters the user would like in their password
    var confirmLength = window.prompt("How many characters would you like your password to contain? (between 8-128)");

    // Loop if answer is outside the parameters
    while (confirmLength < 8 || confirmLength > 128) {
        window.alert("Password length must be between 8-128 characters. Try again");
        // Reprompt user to choose password length
        var confirmLength = window.prompt("How many characters would you like your password to contain? (between 8-128)"); 
    }

    // Repeat back to user how many characters they've selected to use
    window.alert("Your password will have " + confirmLength + " characters")
    
    /*Another way I was shown to display same message above
    window.alert(`Your password will have ${confirmLength} charcters`); */

    // Determine which characters to use in password
    var confirmLowercase = window.confirm("Click OK to confirm if you'd like to include lowercase characters");
    var confirmUppercase = window.confirm("Click OK to confirm if you'd like to include uppercase characters");
    var confirmNumber = window.confirm("Click OK to confirm if you'd like to include numbers");
    var confirmSpecialCharacter = window.confirm("Click OK to confirm if you'd like to include special characters");

        // Loop if user selects to use no characters (all cancel = false)
        while (confirmLowercase === false && confirmUppercase === false && confirmNumber === false && confirmSpecialCharacter === false) {
            window.alert("You must choose at least one set of characters. Try again");
            // Repromt user which characters to use
            var confirmLowercase = window.confirm("Click OK to confirm if you'd like to include lowercase characters");
            var confirmUppercase = window.confirm("Click OK to confirm if you'd like to include uppercase characters");
            var confirmNumber = window.confirm("Click OK to confirm if you'd like to include numbers");
            var confirmSpecialCharacter = window.confirm("Click OK to confirm if you'd like to include special characters");
        }

            // Empty array to add all characters user has chosen to use for password
            var passwordCharacters = [];

            // IF statements to add chosen characters to empty passwordCharacters array
            if (confirmLowercase) {
                passwordCharacters = passwordCharacters.concat(lowercase)
            }
            if (confirmUppercase) {
                passwordCharacters = passwordCharacters.concat(uppercase)
            }
            if (confirmNumber) {
                passwordCharacters = passwordCharacters.concat(number)
            }
            if (confirmSpecialCharacter) {
                passwordCharacters = passwordCharacters.concat(specialCharacter)
            }
            //console.log(passwordCharacters);

                // Choosing random selection of characters from passwordCharacters array
                var randomPassword = "";
                
                for (var i = 0; i < confirmLength; i++) {
                    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
                    //console.log(randomPassword);
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