// Assignment code here

// Array and values
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialCharacter = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"]
// Will I run into issues with this being a string and the " and \ symbols? I tried to call them out correctly using the slash before inputting the symbol itself?

function generatePassword() {
    var passwordLength = window.prompt("Passwords can contain between 8 and 128 characters. Please determine the length of your password.");
    var upperConfirm = window.confirm("Do you want uppercase characters in your password?");
    var lowerConfirm = window.confirm("Do you want lowercase characters in your password?");
    var numericConfirm = window.confirm("Do you want your password to contain numbers?");
    var specialConfirm = window.confirm("Do you want your password to contain special characters?");
    

    if(upperConfirm) {
        choices = choices.concat(upperCase);
        }

    if(lowerConfirm) {
        choices = choices.concat(lowerCase);
    }

    if(numericConfirm) {
        choices = choices.concat(numericValue);
    }

    if(specialConfirm) {
        choices = choices.concat(specialCharacter);
    }
}
        






// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// test coding for commit purposes

generatePassword();