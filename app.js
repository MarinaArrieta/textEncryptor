function messageAlert(caracter){

    const mayuscula = /[A-Z]/;
    const numero = /\d/i;
    const espessialCaracter = /\W/i;
    const tab = /\s/i;

    for (i=0; i<caracter.length; i++){
        if (mayuscula.test(caracter[i]) || numero.test(caracter[i]) || espessialCaracter.test(caracter[i]) && !tab.test(caracter[i])){
            console.log('Solo letras minúsculas, sin acentos ni caracteres especiales');
        } 
    }
}

messageAlert('yola');

// function encript(cadena){
//     let cadena2 = [];
//     let cadena3 = [];

//     for (i=0; i<cadena.length; i++){
//         cadena2 = cadena.replaceAll('a', 'ai').replaceAll('e', 'enter').replaceAll(/i/ig, 'imes').replaceAll('o', 'ober').replaceAll('u', 'ufat');
//         cadena3 = cadena2.replaceAll('aimes', 'ai');
//     }

//     return cadena3;
// }
// console.log(encript('ue holaii a i aii ia'));

// function desencript(cadena){
//     let cadena2 = [];

//     for (i=0; i<cadena.length; i++){
//         cadena2 = cadena.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll(/imes/ig, 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
//     }

//     return cadena2;
// }
// console.log(desencript('ufatenter hoberlaiimesimes ai imes aiimesimes imesai'));