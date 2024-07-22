const inpuText = document.getElementById('input__text');
const encrypt = document.getElementById('encrypt');
const image = document.getElementById('image');
const encrypText = document.getElementById('encrypt__text');
const text = document.getElementById('text');
const decrypt = document.getElementById('decrypt');

function messageAlert(caracter){

    caracter = inpuText.value;

    const upperLetter = /[A-Z]/;
    const number = /\d/i;
    const espessialCaracter = /\W/i;
    const tab = /\s/i;

    if(!caracter.value){
        image.style.display = 'block';
        text.style.display = 'block';
        encrypText.style.display = 'none';
    }

    for (i=0; i<caracter.length; i++){
        if (upperLetter.test(caracter[i]) || number.test(caracter[i]) || espessialCaracter.test(caracter[i]) && !tab.test(caracter[i])){
            alert('Solo letras minúsculas, sin acentos ni caracteres especiales');
            upperLetterNo = caracter.replace(upperLetter, '');
            numberNo = upperLetterNo.replace(number, '');
            espessialCaracterNo = numberNo.replace(espessialCaracter, '');
            inpuText.value = espessialCaracterNo;
        } 
    }
}

inpuText.addEventListener('input', ()=>{
    messageAlert();
})

function encript(cadena){
    image.style.display = 'none';
    text.style.display = 'none';
    encrypText.style.display = 'block';

    cadena = inpuText.value;
    let cadena2 = [];
    let cadena3 = [];

    for (i=0; i<cadena.length; i++){
        cadena2 = cadena.replaceAll('a', 'ai').replaceAll('e', 'enter').replaceAll(/i/ig, 'imes').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        cadena3 = cadena2.replaceAll('aimes', 'ai');
    }

    return encrypText.textContent = cadena3;
}

encrypt.addEventListener('click', ()=> {
    encript();
});

function decryptString(cadena){
    cadena = encrypText.innerText;
    let cadena2 = [];

    for (i=0; i<cadena.length; i++){
        cadena2 = cadena.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll(/imes/ig, 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    }

    return encrypText.textContent = cadena2;
}

decrypt.addEventListener('click', ()=> {
    decryptString();
});

function clipboardCopy() {

    let copyTex = encrypText.innerText; 
    navigator.clipboard.writeText(copyTex).then(function () {
      alert('Texto copiado al portapapeles');
    }).catch(function (err) {
        alert('Error al copiar texto: ' + err);
    });
  }

    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copy__button").addEventListener("click", clipboardCopy);
});