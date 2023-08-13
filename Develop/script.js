//Here is a list of what the password can be created out of.
var allCharacters = [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
 ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
 ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
 [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "_", "\\"],
]
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordCharacters = prompt("Please enter the number of characters for your password: ", "8 - 128 characters");

if (passwordCharacters < 8 || passwordCharacters > 128) {
alert('the password is not the required length!')
return
} 
  var withNumbers = confirm("Do you want to use numbers?");

  var withLowerCase = confirm("Do you want lowercase characters?");

  var withUpperCase = confirm("Do you have uppercase characters?");

  var withSymbols = confirm("Do you want symbols?");

  if(withNumbers === false && withLowerCase === false && withUpperCase === false && withSymbols === false){
    alert('Please make atleast one selection.')
    return
  }
  else {
    var userOptions = [
      withNumbers,
      withLowerCase,
      withUpperCase,
      withSymbols,
    ]
    // var index = Math.floor(Math.random() * numberCharacters.length);
   
    var possibleCharacters = [];
    var i = 0;
      for (let opt in userOptions) {
        console.log(userOptions[opt]);
        if (userOptions[opt]) {
          possibleCharacters = [...possibleCharacters, ...allCharacters[i]];
        }
        i += 1;
      }
      console.log(possibleCharacters);
      var finalPassword = '';
    for (var i = 0; i < passwordCharacters; i++) {
      var charIndex = Math.floor(Math.random() * possibleCharacters.length);
      
      finalPassword = finalPassword + possibleCharacters[charIndex];
    }
    return finalPassword
  }
}



function writePassword() {
  var password = generatePassword();
  console.log('password', password);
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);