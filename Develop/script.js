//Here is an array of what the password can consist of.
var allCharacters = [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
 ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
 ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
 [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "_", "\\"],
]
var generateBtn = document.querySelector("#generate");

// this function is a prompt, asking the user the minimum and maximum requirement for the password.
function generatePassword(){
  var passwordCharacters = prompt("Please enter the number of characters for your password: ", "8 - 128 characters");
//this will allow the user to only choose between 8 OR 128 chracters. If password is less than 8 or more than 128, then it will alert the user to pick a different number.
if (passwordCharacters < 8 || passwordCharacters > 128) {
alert('the password is not the required length!')
return
} //if user has picked a number between 8 and 128 chracters, a series of comnfirms will appear.
  var withNumbers = confirm("Do you want to use numbers?");

  var withLowerCase = confirm("Do you want lowercase characters?");

  var withUpperCase = confirm("Do you have uppercase characters?");

  var withSymbols = confirm("Do you want symbols?");

  //
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