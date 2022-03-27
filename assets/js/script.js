
// Array and specified values
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialCharacter = ["+", "-", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]


function generatePassword() {
    // arrayIndex is used to store confirm input if value = true
    var arrayIndex = []
    var charLimit = parseInt(window.prompt("Passwords may contain between 8 and 128 characters. Please determine the length of your password."));
    if (charLimit > 128 || charLimit < 8 || charLimit === "" || charLimit === null) {
        window.alert("Password must contain a minimum of 8 characters and a maximum of 128 characters. Please enter a valid number and try again.");
        return generatePassword();
    }
    console.log(charLimit);

    // Confirm user inputs to specify which arrays above are eligible for entry
    var upperConfirm = window.confirm("Do you want your password to contain uppercase characters?");
    console.log(upperConfirm);
    var lowerConfirm = window.confirm("Do you want your password to contain lowercase characters?");
    console.log(lowerConfirm);
    var numericConfirm = window.confirm("Do you want your password to contain numbers?");
    console.log(numericConfirm);
    var specialConfirm = window.confirm("Do you want your password to contain special characters?");
    console.log(specialConfirm);

    if (upperConfirm) {
        arrayIndex.push(upperCase);
    }

    if (lowerConfirm) {
        arrayIndex.push(lowerCase);
    }

    if (numericConfirm) {
        arrayIndex.push(numericValue);
    }

    if (specialConfirm) {
        arrayIndex.push(specialCharacter);
    }
    console.log("Here are the user input selections and outputs", arrayIndex)

    // totalSet is used to distribute the filler characters in order to meet specified password length by concatenating TRUE array elements within arrayIndex
    var totalSet = [].concat.apply([], arrayIndex);
    function randomIndex(length) {
        return Math.floor(Math.random() * length);
    }


    // For Loop starts here
    var result = "";
    for (var i = 0; i < arrayIndex.length; i++) {
        result += arrayIndex[i][randomIndex(arrayIndex[i].length)];
        console.log(result);
    }

    // Helps to determine the remaining total characters to place within the password after applying at least 1 of the selected user input confirms
    var remainder = charLimit - arrayIndex.length;
    console.log(remainder);
    for (var i = 0; i < remainder; i++) {
        result += totalSet[randomIndex(totalSet.length)];
        console.log(result);
    }
    return result
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

// test coding for commit purposes
