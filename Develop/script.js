// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//Defining variables that outline the options offered to the user
var passLength = "";
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()-_=+{}[]|\;:<>?/";

//Function operating user prompts
function generatePassword() {
  //Variables placed inside the function in order to ensure a separate password is generated each time
  var tempPass = "";
  var myPassword = "";

  //How many characters?
  var askLength = prompt("How many characters would you like your password to be (8-128)?");
    console.log(askLength);
      //If length is between 8-128, this is the number of characters that will later be randomized
      if (askLength >= 8 && askLength <= 128) {
        passLength = Number(askLength);
      }

  //Uppercase?    
  var askUppercase = confirm("Would you like to include uppercase characters?");
    console.log(askUppercase);
      //If uppercase is confirmed, the uppercase value will be added to the temporary password
      if (askUppercase == true) {
        tempPass = tempPass + uppercase;
      }

  //Lowercase?    
  var askLowercase = confirm("Would you like to include lowercase characters?");
    console.log(askLowercase);
      //If lowercase is confirmed, the lowercase value will be added to the temporary password
      if (askLowercase == true) {
        tempPass = tempPass + lowercase;
      }

  //Numbers?    
  var askNumbers = confirm("Would you like to include numbers?");
    console.log(askNumbers);
      //If numbers is confirmed, the numbers value will be added to the temporary password
      if (askNumbers == true) {
        tempPass = tempPass + numbers;
      }
  
  //Special Characters?    
  var askSpecialChar = confirm("Would you like to include special characters?");
    console.log(askSpecialChar);
      //If special characters are confirmed, the special characters value will be added to the temporary password
      if (askSpecialChar == true) {
        tempPass = tempPass + specialChar;
      }
  //When criteria have been confirmed, these criteria are randomized
  for (var i = 0; i < passLength; i++) {
    myPassword += tempPass[Math.floor(Math.random()*tempPass.length)];
  }
  //Specifying what information to return when called
  return myPassword;
}
