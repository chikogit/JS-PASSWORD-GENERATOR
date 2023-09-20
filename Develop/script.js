// Assignment code here

//welcome message
window.alert("Welcome to the Password Generator! We grant your wish of wanting a secure password based on the criteria of your choice. Please click 'Generate Password' to get started!");

//started function
function generatePassword() {

  //first password variable for user input 
  var passwordSet = "";

  length = window.prompt("For your password, how long do you want it to be? It can be from 8 characters to 128 characters. Please type a number between the range of 8 and 128.");

  //if length is not entered or entered incorrectly, it's sent back to restart at the length prompt
  if (length === "" || length === null) {
    window.alert("You need to provide a valid number ranging from 8 characters to 128 characters for the password length. Please type a valid entry.");
    return generatePassword();
  }

  if (length < 8 || length > 128) {
    window.alert("The length of your password must be at least 8 characters and not exceed 128 characters. Please retype a valid number ranging from 8 to 128.");
    return generatePassword();
  }

  //with the correct length input, character type selection is followed and users are allowed to choose their desired character types for the password
  if (length >= 8 && length <= 128) {
    var alphabetLower = confirm("Would you like lowercase letters (ex: abcdefg...) in your password? If yes, click 'OK'. If no, click 'CANCEL'."); 
      if (alphabetLower) {
       passwordSet += selectionOfCharacters.alphabetLower;
    };

    var alphabetUpper = confirm("Would you like capital letters (ex: ABCDEFG...) in your password? If yes, click 'OK'. If no, click 'CANCEL'.");
      if (alphabetUpper) {
       passwordSet += selectionOfCharacters.alphabetUpper;
    };

    var numbers = confirm("How about numbers? These are added by single digit only (ex. 0-9). If yes, click 'OK'. If no, click 'CANCEL'. ");
       if (numbers) {
       passwordSet += selectionOfCharacters.numbers;
    };

    var symbols = confirm("Finally, would you like to implement special characters/symbols (ex: !%#@^...) in your password? If yes, click 'OK'. If no, click 'CANCEL'.");
        if (symbols) {
        passwordSet += selectionOfCharacters.symbols;
      };
  }

  //if no character is selected from above, you will be required to restart your password again, returning to the length prompt
  while (alphabetLower === false && alphabetUpper === false && numbers === false && symbols === false) {
     window.alert("You must choose at least one character type for your password! The available options are lowercase alphabet letters, uppercase alphabet letters, numbers, and symbols/special characters. Please retype your password length again to select the character options to create your password.");
     return generatePassword();
  }

  //completed/solved function that generates user input passwords - the first password is fitted in with the completedPassword variable that prints out on the screen with an alert validating its existence
  var completedPassword = ""; 
    for(var i = 0; i < length; i++) {
      completedPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
    }
    window.alert("Your password is ready!");
     return completedPassword;
  }

//variables for characters - lowercase letters, uppercase letters, numbers, and symbols/special characters
const selectionOfCharacters = {
  alphabetLower: 'abcdefghijklmnopqrstuvwxyz',
  alphabetUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '`~!@#$%^&*>()?,_+/-=<[]{}|;":',
};

//from first pull of document - do not alter
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordEl = document.querySelector("#password");

  passwordEl.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);