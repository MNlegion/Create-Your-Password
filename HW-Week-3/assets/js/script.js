// Assignment code here

// Array and values
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialCharacter = ["+", "-", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
// Will I run into issues with this being a string and the " and \ symbols? I tried to call them out correctly using the slash before inputting the symbol itself?

function generatePassword() {
    var arrayIndex = []
    var charLimit = parseInt(window.prompt("Passwords may contain between 8 and 128 characters. Please determine the length of your password."));
    if (charLimit > 128 || charLimit < 8 || charLimit === "" || charLimit === null) {
        window.alert("Password must contain a minimum of 8 characters and a maximum of 128 characters. Please enter a valid number and try again.");
        return generatePassword();
    }
    console.log(charLimit);

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

    //  Not sure the below is needed, it creates one large array of 80 characters
    var totalSet = [].concat.apply([], arrayIndex);
    //   console.log("whats this do?", merge)
    function randomIndex(length) {
        return Math.floor(Math.random() * length);
    }


    // For Loop starts here
    var result = "";
    for (var i = 0; i < arrayIndex.length; i++) {
        result += arrayIndex[i][randomIndex(arrayIndex[i].length)];
        console.log(result);
    }

    var remainder = charLimit - arrayIndex.length;
    console.log(remainder);
    for (var i = 0; i < remainder; i++) {
        result += totalSet[randomIndex(totalSet.length)];
        console.log(result);
    }
    return result
    // For each window.Confirm True (var i = true), select minimum of 1 element from array. 
    // how to select 1 element from each true index of the arrayIndex vs returning the first X elements from the [0] index?
    // out loop - to iterate between outer arrays
    // inner loop - to interate between inner elements
    // merge[rowIndex][columnIndex]
    // Once each True array has a minimum of 1 element selected, randomize remaining elements from available True array elements until charLimit is defined. 

    // arrayPassword.push(totalSet[Math.floor(Math.random() * totalSet.length)]);
    // For Loop ends

    // password = array_password.join("");
}



// Reset Password Function - Work in Progress

// var resetPassword = window.confirm("Would you like to creeate a new password?");

// if (resetPassword) {
//   generatePassword();
// } else {
//   window.alert("Thank you for trying out my password generator. Come back again!");
// };





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
