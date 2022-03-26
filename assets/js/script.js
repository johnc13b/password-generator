
// Ref
const characters = {
  lcase: 'abcdefghijklmnopqrstuvwxyz',
  upcase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Button Click
generateBtn.addEventListener("click", writePassword);

// My Head Hurts
function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Please enter a password length. Must be between 8-128 characters.");
  while (isNaN(length) || length < 8 || length > 128)
  length = Number(prompt("Must be between 8-128 characters. Please enter a password length."));

  var numbers = window.confirm("Include NUMBERS?");
  if (numbers) {
    passwordCharSet += characters.numbers;
  };
  
  var symbols = window.confirm("Include SYMBOLS?");
  if (symbols) {
    passwordCharSet += characters.symbol;
  };

  var upcase = window.confirm("Include UPPERCASE letters?");
  if (upcase) {
    passwordCharSet += characters.upcase;
  };

  var lcase = window.confirm("Include LOWERCASE letters?");
  if (lcase) {
    passwordCharSet += characters.lcase;
  };

  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}
