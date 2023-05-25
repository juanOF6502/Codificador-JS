const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const texto1 = document.querySelector('.texto-1');
const texto2 = document.querySelector('.texto-2')
mensaje.disabled = true

let letrasEncriptadas = [
    ['e', 'enter'], 
    ['i', 'imes'], 
    ['a', 'ai'], 
    ['o', 'ober'],
    ['u', 'ufat']
];

function encriptarTexto(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < letrasEncriptadas.length; i++){
        if(stringEncriptada.includes(letrasEncriptadas[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(letrasEncriptadas[i][0], letrasEncriptadas[i][1])
        }
    }
    return stringEncriptada;
}

function desencriptarTexto(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < letrasEncriptadas.length; i++){
        if(stringDesencriptada.includes(letrasEncriptadas[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(letrasEncriptadas[i][1], letrasEncriptadas[i][0])
        }
    }
    return stringDesencriptada;
}


function botonEncriptar(){
    const textoEncriptado = encriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    texto1.style.display = 'none'; 
    texto2.style.display = 'none';
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptarTexto(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    texto1.style.display = 'none'; 
    texto2.style.display = 'none';
}

function botonCopiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado)
}
