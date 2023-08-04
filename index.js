const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");
let generateBtn = document.getElementById("generate-btn");

function getRandomFirstPassword() {
    let firstPassword = Math.floor(Math.random() * characters.length) 
    return characters[firstPassword]
}

function getRandomSecondPassword() {
    let secondPassword = Math.floor(Math.random() * characters.length) 
     return characters[secondPassword]
}

generateBtn.addEventListener("click", function() {
    let randomFirstPassword = ""
    let randomSecondPassword = ""
    for(let i =0; i < passwordLength; i++) {
        randomFirstPassword += getRandomFirstPassword()
        randomSecondPassword += getRandomSecondPassword()
    }
     passwordOneEl.textContent = randomFirstPassword
     passwordTwoEl.textContent = randomSecondPassword
})

