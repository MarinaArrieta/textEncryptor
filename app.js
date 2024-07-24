const inpuText = document.getElementById('input__text');
const encrypt = document.getElementById('encrypt');
const image = document.getElementById('image');
const encrypText = document.getElementById('encrypt__text');
const text = document.getElementById('text');
const decrypt = document.getElementById('decrypt');
const messageAlertCat = document.getElementById('message__alert__cat');
const messagealertCatHappy = document.getElementById('message__alert__cat__happy');
const messagealertCatSad = document.getElementById('message__alert__cat__sad');
const close = document.getElementById('close');
const closeCatHappy = document.getElementById('close_cat_happy');
const closeCatSad = document.getElementById('close__cat__sad');

function messageAlert(character){

    character = inpuText.value;

    const upperLetter = /[A-Z]/;
    const number = /\d/i;
    const espessialcharacter = /\W/i;
    const tab = /\s/i;

    if(!character.value){
        image.style.display = 'block';
        text.style.display = 'block';
        encrypText.style.display = 'none';
    }

    for (i=0; i<character.length; i++){
        if (upperLetter.test(character[i]) || number.test(character[i]) || espessialcharacter.test(character[i]) && !tab.test(character[i])){
            messageAlertCat.style.display = 'flex';
            upperLetterNo = character.replace(upperLetter, '');
            numberNo = upperLetterNo.replace(number, '');
            espessialcharacterNo = numberNo.replace(espessialcharacter, '');
            inpuText.value = espessialcharacterNo;
        } 
    }
}

inpuText.addEventListener('input', ()=>{
    messageAlert();
});

close.addEventListener('click', ()=> {
    messageAlertCat.style.display = 'none';
});

closeCatHappy.addEventListener('click', ()=> {
    messagealertCatHappy.style.display = 'none';
});

closeCatSad.addEventListener('click', ()=> {
    messagealertCatSad.style.display = 'none';
});

function encript(encryptCharacter){
    image.style.display = 'none';
    text.style.display = 'none';
    encrypText.style.display = 'block';

    encryptCharacter = inpuText.value;

    let encryptCharacter2 = [];
    let encryptCharacter3 = [];

    for (i=0; i<encryptCharacter.length; i++){
        encryptCharacter2 = encryptCharacter.replaceAll('a', 'ai').replaceAll('e', 'enter').replaceAll(/i/ig, 'imes').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        encryptCharacter3 = encryptCharacter2.replaceAll('aimes', 'ai');
    }
    return encrypText.textContent = encryptCharacter3;
}

encrypt.addEventListener('click', ()=> {
    encript();
});

function decryptString(decryptCharacter){
    decryptCharacter = inpuText.value;
    let decryptCharacter2 = [];

    for (i=0; i<decryptCharacter.length; i++){
        decryptCharacter2 = decryptCharacter.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll(/imes/ig, 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    }

    return encrypText.textContent = decryptCharacter2;
}

function decryptStringInput(decryptCharacterInput){
    image.style.display = 'none';
    text.style.display = 'none';
    encrypText.style.display = 'block';

    decryptCharacterInput = encrypText.innerText;
    let decryptCharacterInput3 = [];

    for (i=0; i<decryptCharacterInput.length; i++){
        decryptCharacterInput3 = decryptCharacterInput.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll(/imes/ig, 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    }

    return encrypText.textContent = decryptCharacterInput3;
}

decrypt.addEventListener('click', ()=> {
    decryptString();
    decryptStringInput();
});

function clipboardCopy() {

    let copyTex = encrypText.innerText; 
    navigator.clipboard.writeText(copyTex).then(function () {
        messagealertCatHappy.style.display = 'flex';
    }).catch(function (err) {
        messagealertCatSad.style.display = 'flex' + err;
    });
  }

    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copy__button").addEventListener("click", clipboardCopy);
});