// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
// addEventListener('click') is a method used to attach an event listener to a DOM element, specifically for the "click" event. The "click" event occurs when the user clicks on the specified element.
generateBtn.addEventListener("click", writePassword);

// Function to prompt the user for password criteria
// The parseInt() function is used to switch the user's string input to an integer.

function getPasswordCriteria() {
  
  // Prompt the user to enter the length of the password
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate the length input

  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length. Please enter a number between 8 and 128:"));
  }

  // Ask the user for character types to include in the password
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("You must select at least one character type.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Return the password criteria as an object
  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function to generate a random password based on the provided criteria
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var characterPool = "";

  // Add lowercase characters to the pool if selected
  if (includeLowercase) {
    characterPool += "abcdefghijklmnopqrstuvwxyz";
  }

  // Add uppercase characters to the pool if selected
  if (includeUppercase) {
    characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Add numeric characters to the pool if selected
  if (includeNumeric) {
    characterPool += "0123456789";
  }

  // Add special characters to the pool if selected
  if (includeSpecial) {
    characterPool += "!@#$%^&*()-_=+[]{}<>.,;:/?";
  }

  var password = "";

  // Generate random characters from the character pool to create the password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  // Return the generated password
  return password;
}

// Function to write the generated password to the password input field
function writePassword() {
 
  // Get the password criteria from the user
  var criteria = getPasswordCriteria();

  // Generate the password based on the criteria
  var password = generatePassword(
    criteria.length,
    criteria.includeLowercase,
    criteria.includeUppercase,
    criteria.includeNumeric,
    criteria.includeSpecial
  );
  
  // Select the password input field
  var passwordText = document.querySelector("#password");

  // Write the generated password to the password input field
  passwordText.value = password;
}