// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let passwordlenght =parseInt(prompt("Enter Passowrd length(8-120)"))
  if( passwordlenght > 7 && passwordlenght < 121){
    getuserchoice(passwordlenght)
  }
  else{
    return generatePassword()
  }
}

function getuserchoice(passwordlenght){
  console.log("Valid length",passwordlenght)
  let yesupper = false;
  let yeslower =false;
  let yesspecials = false;
  let yesnumber = false;

  while(!yeslower && !yesupper && !yesspecials && !yesnumber){
      yesnumber = confirm("Do you want numbers?");
      yesupper= confirm("Do you want upper letters?");
      yesspecials= confirm( "Do you want to included specials characters?");
      yeslower=confirm("do you want lower letters?");
  }
  let validcharacters = [];
  if (yesnumber){
    validcharacters =validcharacters + "1234567890"
  }
  if (yesupper){
    validcharacters =validcharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (yesspecials){
    validcharacters =validcharacters + "!@#$%^&*()_+="
  }
  if (yeslower){
    validcharacters =validcharacters + "abcdefghijklmnopqrstuvwxyz"
  }
  console.log (validcharacters)
  let password=""
  for (let i=0;i < passwordlenght;i++){
    let arrindex = Math.floor(Math.random() * validcharacters.length)
    password= password+validcharacters[arrindex]
  }
 console.log (password)
 return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
