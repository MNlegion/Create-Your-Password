// Assignment code here

// Array and values
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialCharacter = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"]
// Will I run into issues with this being a string and the " and \ symbols? I tried to call them out correctly using the slash before inputting the symbol itself?

function generatePassword() {
    var choices = []
    var passwordLength = window.prompt("Passwords may contain between 8 and 128 characters. Please determine the length of your password.");
        if(parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8 || passwordLength === "" || passwordLength === null) {
        window.alert("Password must contain a minimum of 8 characters and a maximum of 128 characters. Please enter a valid number and try again.");
        return generatePassword();
        }
        console.log(passwordLength);
        
    var upperConfirm = window.confirm("Do you want your password to contain uppercase characters?");
        console.log(upperConfirm);
    var lowerConfirm = window.confirm("Do you want your password to contain lowercase characters?");
        console.log(lowerConfirm);
    var numericConfirm = window.confirm("Do you want your password to contain numbers?");
        console.log(numericConfirm);
    var specialConfirm = window.confirm("Do you want your password to contain special characters?");
        console.log(specialConfirm);

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

    // Thought process on concat conditions above: 
        // 1. Determine total password length from user input prompt. 
        // 2. If uppercase is true, concat array upperCase + character total specified and move to next question asking for lower case. Continue through to concat needed info and unneeded info. 
            // 2a. If uppercase is false, no concat takes place as the array values are unneeded for user password
        // 3. Determine which arrarys through user input are required in order to determine what values should be used within generation of password and how many total random characters.






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

// generatePassword();

// test coding for commit purposes

