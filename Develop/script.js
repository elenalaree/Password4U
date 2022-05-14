// Assignment Code


const UP = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
const SYMBOLS = '!@#$%^&*.~?';
const NUMBERS = '123456789';
const LOW = 'abcdefghijklmnpqrstuvwxyz';

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

};






var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}; 


function promptPasswordLength() {
 // TO DO: Make unable to add less than 8 or more than 128
  return window.prompt('How many characters? 8-128.');

};

function promptCharacterTypes() {
  // TO DO: 
   return window.prompt('Do you want to use UpperCase? Y or N?');
 
   return window.prompt('Do you want to use LowerCase? Y or N?');

   return window.prompt('Do you want to use Special Characers? Y or N?');

   return window.prompt('Do you want to use Numbers? Y or N?');
 };

function generatePassword() {
  var generateBtn = document.querySelector("#generate");
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  var length = promptPasswordLength();
  const NUMCHARGROUP = 4;

 
  var sym = generateString(2, SYMBOLS);
  var num = generateString(2, NUMBERS);
  var up = generateString(2, UP);
  var low =generateString(2, LOW)
  var remain = length - 8;
  var moreCharacters = generateString(remain, UP + LOW + NUMBERS + SYMBOLS);

  return sym + num + low + up + moreCharacters;
  
};

console.log(generatePassword());