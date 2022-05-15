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


var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}; 


function promptPasswordLength() {
 
  var length = 0;
  var done = false;
  while(!done) {
    length = window.prompt('How many characters? 8-128.');
    if (length < 8 || length > 128) {
      done = false;
      window.alert('Please pick a valid number.')
    } else {
      done = true;
    }
  }

  return length;
};

function promptYesNoQuestion(question) {
 
  var answer = '';
  while(!['y','n'].includes(answer)) {
    answer = window.prompt(question +' Y or N?').toLowerCase();
  }
  
  
  return answer === 'y';
 };

function generatePassword() {
 


  var length = promptPasswordLength();
  const NUMCHARGROUP = 4;
  var password = '';
  var totalCharacterSet = '';

  if (promptYesNoQuestion('Do you want to use Special Characers?')) {
   var sym = generateString(2, SYMBOLS);
   password = password + sym;
   totalCharacterSet = totalCharacterSet + SYMBOLS;
  }
  
  if (promptYesNoQuestion('Do you want to use numbers?')) {
    var num = generateString(2, NUMBERS);
    password = password + num;
   totalCharacterSet = totalCharacterSet + NUMBERS;
  }

  if (promptYesNoQuestion('Do you want to use UpperCase?')) {
    var up = generateString(2, UP);
    password = password + up;
   totalCharacterSet = totalCharacterSet + UP;
  }

  if (promptYesNoQuestion('Do you want to use LowerCase?')) {
    var low =generateString(2, LOW)
    password = password + low;
    totalCharacterSet = totalCharacterSet + LOW;
  }


  var remain = length - password.length;
  var moreCharacters = generateString(remain, totalCharacterSet);

  return password + moreCharacters;
  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
  if (password === '') {
    passwordText.value = 'Try again, Dumbass';
    setTimeout(writePassword, 5000);
  }
};

function main(){

   var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}

main()