// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

// Arrays to store generated passwords
let passOne = [];
let passTwo = [];

// Color switch default state
let colorSwitchState = true;


// Main function that starts password generation and outputs results
function generatePassword() {
    let lengthValidation = lengthValueValidation();

    if (lengthValidation) {
        let lengthPassOne = document.getElementById("length-password-one").value;
        let lengthPassTwo = document.getElementById("length-password-two").value;

        //Arrays to store generated passwords
        let arrayLengthOne = arrayLength(lengthPassOne);
        let arrayLengthTwo = arrayLength(lengthPassTwo);

        // Gather values of Additional settings checkboxes
        let symbolsPassOne = document.getElementById("pass-one-symbols");
        let numbersPassOne = document.getElementById("pass-one-numbers");

        let symbolsPassTwo = document.getElementById("pass-two-symbols");
        let numbersPassTwo = document.getElementById("pass-two-numbers");

        passwordOne.textContent = generator(arrayLengthOne, symbolsPassOne, numbersPassOne);
        passwordTwo.textContent = generator(arrayLengthTwo, symbolsPassTwo, numbersPassTwo);
    }
    else {
        alert("Password length should be between 1 and 20");
    }
}

// Loops through the arrays for each password and pick random character from characters array
function generator(lengthOfArray, symbs, nums) {
    let charsArray = arrayConfigurator(symbs, nums);
    let passwordArr = [];
    for (let i = 0; i < lengthOfArray; i++) {
        passwordArr[i] = charsArray[Math.floor(Math.random() * charsArray.length)];
    }
    return passwordArr.join("");
}


function arrayLength(lengthValue) {
    if (lengthValue == 0) {
        lengthValue = 15;
    }
    return lengthValue;
}

function arrayConfigurator(symbolsCheckbox, numbersCheckbox) {
    let charactersArray = [];
    charactersArray.push(...letters);

    if (symbolsCheckbox.checked) {
        charactersArray.push(...symbols);
    }
    if (numbersCheckbox.checked) {
        charactersArray.push(...numbers);
    }
    console.log("Final array: " + charactersArray);
    return charactersArray;
}

// Copy the password to clipboard by click
function clickToCopy(id) {
    let copyPassword = document.getElementById(id).textContent;
    navigator.clipboard.writeText(copyPassword);

}

// Length value validation after 
function lengthValueValidation() {
    let passLengthOne = document.getElementById("length-password-one");
    let passLengthTwo = document.getElementById("length-password-two");
    if (passLengthOne.value < 0 || passLengthOne.value > 21) {
        passLengthOne.style.border = "1px solid red";
        passLengthOne.style.margin = "-1px";
       return false;
    }
    else if (passLengthTwo.value < 0 || passLengthTwo.value > 21) {
        passLengthTwo.style.border = "1px solid red";
        passLengthTwo.style.margin = "-1px";
        return false;
    }
    else {
        passLengthOne.style.border = "none";
        passLengthTwo.style.border = "none";
        return true;
    }
};

// Color theme switcher
function colorSwitch() {
    colorSwitchState = colorSwitchState ? false : true;
    let root = document.documentElement;

    // true is light theme
    // false is dark theme
    if (colorSwitchState) {
        root.style.setProperty("--container-bg-color", "#ECFDF5");
        root.style.setProperty("--header-one", "#2B283A");
        root.style.setProperty("--header-two", "#10B981");
        root.style.setProperty("--supporting-text", "#6B7280");
        root.style.setProperty("--separator-line", "#D5D4D8");
    }
    else {
        root.style.setProperty("--container-bg-color", "#1F2937");
        root.style.setProperty("--header-one", "#FFFFFF");
        root.style.setProperty("--header-two", "#4ADF86");
        root.style.setProperty("--supporting-text", "#D5D4D8");
        root.style.setProperty("--separator-line", "#2F3E53");
    }
}