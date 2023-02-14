// Assignment code here
// Prompts user for what they would like in password, then generates off selection
function generatePassword() {
  //Tools for future use
  var password = "";
  var lettersLower = confirm("Would you like lower case letters in your password?");
  var lettersUpper = confirm("Would you like upper case letters in your password?")
  var numbers = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters (!, ?, @, etc) in your password?");
  var passLength = prompt("How long would you like the password to be? Please select a number between 8 and 128.");

  //Dev console-logs
  console.log("Lower Letters: " + lettersLower + ".");
  console.log("Upper Letters: " + lettersUpper + ".");
  console.log("Numbers: " + numbers + ".");
  console.log("Special Characters: " + special + ".");

  //This variable is a key to the upcoming while loop, and sets passlength to a usable int
  var whileKey = false;

  //Sets whileKey to true to avoid the while loop
  var intKey = !isNaN(passLength);
  console.log(intKey);

  if(intKey && 128 >= passLength && passLength >= 8){
    whileKey = true;
    console.log("Set whileKey to True");
  }

  //Keeps re-prompting user for a valid response.
  while(!whileKey){
    passLength = prompt("Invalid selection, please select a number between 8 and 128.");
    intKey = !isNaN(passLength);

    //Allows the user out of while loop purgatory when they play along
    if(intKey && 128 >= passLength && passLength >= 8){
      whileKey = true;
      console.log("Set whileKey to True.");
    }else if(!passLength){
      //Just so user isn't confused on why cancelling here returns undef
      alert("User selected cancel, returning undefined value.");
      return;
    }
  }

  //Couple of variables for randomization.
  var rand1 = 0;
  var rand2 = 0;

  //Sets of characters for selection.
  var usedList = '';
  var charLower = 'abcdefghijklmnopqrstuvwxyz';
  var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numList = '1234567890';
  var specList = '!@#$%^&*()-_=+,./<>?';

  //Input for switch statement
  var poss = 0;

  //Determines which lists to use
  if(lettersLower){
    poss = poss + 1;
  }
  if(lettersUpper){
    poss = poss + 2;
  }
  if(numbers){
    poss = poss + 4;
  }
  if(special){
    poss = poss + 8;
  }

  //Switch statement to create list of used characters
  switch(poss){
    //All selected as no, returns nothing.
    case 0:
      alert("Undefined returned, no characters allowed.")
      return;
    case 1:
      //Password with lower case
      usedList += charLower;
      break;
    case 2:
      //Password with upper case
      usedList += charUpper;
      break;
    case 4:
      //Password with numbers
      usedList += numList;
      break;
    case 8:
      //Password with specials
      usedList += specList;
      break;
    case 3:
      //Password of lower and upper
      usedList += charLower;
      usedList += charUpper;
      break;
    case 5:
      //Password of lower and numbers
      usedList += charLower;
      usedList += numList;
      break;
    case 9:
      //Password of lower and specials
      usedList += charLower;
      usedList += specList;
      break;
    case 6:
      //Password of upper and numbers
      usedList += charUpper;
      usedList += numList;
      break;
    case 10:
      //Password of upper and specials
      usedList += charUpper;
      usedList += specList;
      break;
    case 12:
      //Password of numbers and specials
      usedList += numList;
      usedList += specList;
      break;
    case 15:
      //Password of ALL options
      usedList += charLower;
      usedList += charUpper;
      usedList += numList;
      usedList += specList;
      break;
  }
  
  //Checks new list length
  var newListLength = usedList.length;

  //Uses newly made list to create a password of input length
  var counter = 0;
  while(counter < passLength){
    password += usedList.charAt(Math.floor(Math.random() * newListLength));
    counter = counter + 1;
  }

  //Returns the newly made password
  return password;
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