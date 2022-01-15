var chars = ["a", "b", "c", "d,", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var charsCapital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d,", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var charsSpecial = ["a", "b", "c", "d,", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "/", "?", "~"]

var charsBoth = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d,", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "/", "?", "~"]

var generatePassword = function() {
  var minCharacter = parseInt(window.prompt("What is the MINIMUM number of characters needed for your password?"));
  var maxCharacter = parseInt(window.prompt("What is the MAXIMUM number of characters needed for your password?"));
  var capital = window.prompt("Would you like to include capital letters?");
  var special = window.prompt("Would you like to include speacial characters?");
  var length = Math.floor(Math.random() * maxCharacter);
  length = length + minCharacter
  if (length > maxCharacter) {
    length = maxCharacter
  }
  console.log(length)
  var generatedPassword = "";
// capital only
  if (((capital === "yes") || (capital === "YES")) && (special === "no") || (special === "NO")) {
    for (i=length; i > 0; i--) {
      var number = Math.floor(Math.random() * charsCapital.length);
      console.log(number)
      var character = charsCapital[number]
      console.log(character)
      generatedPassword = generatedPassword + character
    }
  }
  // special only
  else if (((capital === "no") || (capital === "NO")) && (special === "yes") || (special === "YES")) {
    for (i=length; i > 0; i--) {
      var number = Math.floor(Math.random() * charsSpecial.length);
      console.log(number)
      var character = charsSpecial[number]
      console.log(character)
      generatedPassword = generatedPassword + character
    }
  }

  // both
  else if (((capital === "yes") || (capital === "YES")) && (special === "yes") || (special === "YES")) {
    for (i=length; i > 0; i--) {
      var number = Math.floor(Math.random() * charsBoth.length);
      console.log(number)
      var character = charsBoth[number]
      console.log(character)
      generatedPassword = generatedPassword + character
    }
  }

  else {
    for (i=length; i > 0; i--) {
      var number = Math.floor(Math.random() * chars.length);
      console.log(number)
      var character = chars[number]
      console.log(character)
      generatedPassword = generatedPassword + character
    }
  }

  return generatedPassword;
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