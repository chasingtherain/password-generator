const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|\:;<,>.?/";


function getLowercase(){
    return lowerLetters[Math.floor(Math.random()*
    lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random()*
        upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*
        numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*
        symbols.length)];
}

function generatePassword(){
    let length = lengthEl.value;
    if (length < 5) length = 8;
    let password = '';
    for(i=0;i<length;i++){  
        let x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}

function generateX(){
    let functionList = [];

    if (lowerEl.checked) functionList.push(getLowercase());
    if (upperEl.checked) functionList.push(getUppercase());
    if (numberEl.checked) functionList.push(getNumber());
    if (symbolEl.checked) functionList.push(getSymbol());
    let arrayValue = Math.floor(Math.random() * functionList.
    length);

    if (functionList.length == 0) return "";

    return functionList[arrayValue];
}

generateEl.addEventListener('click',generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});