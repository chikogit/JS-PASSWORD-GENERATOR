// Empty string variable declared that will have other vars added to it depending on the person's answer
var possiblechars = "";
// All variables for the answers the user gives are declared here as well as the final generated password that will show up
var lowercaseletters = "qwertyuiopasdfghjklzxcvbnm";
var numbersIncluded = "1234567890";
var specialCharacters = "~`!@#$%^&*()_-=+';:,<.>/?";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var generatedpassword = "";

// declared the function for generatePassword that was in the starter code at the bottom
function generatePassword() {
  // These empty strings allow the user to keep generating passwords without previous uses affecting the new choices
  possiblechars = "";
  generatedpassword = "";
  // This prompt closes the prompt with an alert window if the password is not within the allowed perimeters while also setting the text back to "Your Secure Password" so it doesn't show as undefined
  var lengthChoice = prompt("Select a password length between 8 and 128 characters");
  if (lengthChoice < 8 || lengthChoice > 128) {
    alert("Please enter a valid password length");
    return "Your Secure Password";
  }
  // If a valid length is inputted then these if statements will run
  // Each if statement has a confirm window so only true false are run and if true is picked then it adds that string of options to the possiblechars empty string at the top
  // If cancel is picked then that is a false answer and the code proceeds forward
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    var lower = confirm("Would you like to include letters in your password?");
    if (lower == true) {
      possiblechars += lowercaseletters;
    }
    // This if statement will add upper case letters if chosen
    var upper = confirm("Would you like uppercase letters included in your password?");
    if (upper == true) {
      possiblechars += upperCase;
    }
    // This if statement will add numbers if chosen
    var numbers = confirm("Would you like to include numbers in your password?");
    if (numbers == true) {
      possiblechars += numbersIncluded;
    }
    // This if statement will add special characters if chosen
    var special = confirm("Would you like to include special characters in your password?");
    if (special == true) {
      possiblechars += specialCharacters;
    }
    // This for loop converts the answer for length choice to an integer and as it runs through adds a random value from the string possiblechars and places it in the generatedpassword empty string
    for (let i = 0; i < parseInt(lengthChoice); i++) {
      var randomnumber = Math.floor(Math.random() * parseInt(possiblechars.length));
      generatedpassword += possiblechars.charAt(randomnumber);
    }
    // Returns our completed password
    return generatedpassword;
  }
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
