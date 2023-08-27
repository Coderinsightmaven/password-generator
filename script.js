var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}<>?";

var allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

function getUserOptions() {
  var length = parseInt(prompt("Enter password length (8-128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }

  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChars = confirm("Include special characters?");

  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
    alert("You must select at least one character type.");
    return;
  }

  var userOptions = {
    length: length,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
    useNumbers: useNumbers,
    useSpecialChars: useSpecialChars,
  };

  return userOptions;
}

// use the user options or if the user options are invalid then throw an error and return an empty string
function generatePassword() {
  var userOptions = getUserOptions();
  if (!userOptions) {
    return "";
  }

  //
  var availableChars = "";
  if (userOptions.useLowercase) availableChars += lowercaseChars;
  if (userOptions.useUppercase) availableChars += uppercaseChars;
  if (userOptions.useNumbers) availableChars += numericChars;
  if (userOptions.useSpecialChars) availableChars += specialChars;

  // declare a blank password variable for the javascript to use in the next for statement.
  var password = "";
  for (var i = 0; i < userOptions.length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  // Return the generated password using the confirmed user options.
  return password;
}

// begin the process of allowing the user to select the options they want to include in their password.
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// On Click write the password to the browser for the user to see.
generateBtn.addEventListener("click", writePassword);
