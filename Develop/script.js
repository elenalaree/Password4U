// Assignment Code


const CHARACTERS = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz';
const SYMBOLS = '!@#$%^&*.~?';
const NUMBERS = '123456789';


function generateString(length, sourceCharacters) {
  let result ='';
  const charactersLength = sourceCharacters.length;
  for ( let i = 0; i < length; i++ ) {
    result += sourceCharacters.charAt(Math.floor(Math.random()* charactersLength));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}; 




function generatePassword() {
  var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  var length = window.prompt('How many characters? 8-128.');
  var i = 0;

 
  while (i < length) {
    i = i + 1;
  }

}
function getRandomCharacter() {
   var ran = randomNumber(1, 3);
 if(ran === 1) {
    var sym = generateString(1, SYMBOLS);
    return sym;
  }
  else if (ran === 2) {
    var num = generateString(1, NUMBERS);
    return num;
  }
  else {
    var car = generateString(1, CHARACTERS);
    return car;
  }
}
generatePassword();