// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  return myPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






var tempPass;
var myPassword;
var passLength;
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()-_=+{}[]|\;:<>?/";

function generatePassword() {

  var askLength = prompt("How many characters would you like your password to be (8-128)?");
    console.log(askLength);
      if (askLength >= 8 && askLength <= 128) {
        passLength = Number(askLength);
      }
  var askUppercase = confirm("Would you like to include uppercase characters?");
    console.log(askUppercase);
      if (askUppercase == true) {
        tempPass = tempPass + numbers;
      }
  var askNumbers = confirm("Would you like to include numbers?");
    console.log(askNumbers);
      if (askNumbers == true) {
        tempPass = tempPass + numbers;
      }
  var askSpecialChar = confirm("Would you like to include special characters?");
    console.log(askSpecialChar);
      if (askSpecialChar == true) {
        tempPass = tempPass + specialChar;
      }
  for (var i = 0; i == passLength; i++) {
    myPassword = tempPass[Math.floor(Math.random()*tempPass.length)];
  }
}
