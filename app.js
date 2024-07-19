function encript(cadena){
    let cadena2 = [];
    let cadena3 = [];

    for (i=0; i<cadena.length; i++){
        cadena2 = cadena.replaceAll('a', 'ai').replaceAll('e', 'enter').replaceAll(/i/ig, 'imes').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        cadena3 = cadena2.replaceAll('aimes', 'ai');
    }

    return cadena3;
}
console.log(encript('ue holaii a i aii ia'));

function desencript(cadena){
    let cadena2 = [];

    for (i=0; i<cadena.length; i++){
        cadena2 = cadena.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll(/imes/ig, 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    }

    return cadena2;
}
console.log(desencript('ufatenter hoberlaiimesimes ai imes aiimesimes imesai'));