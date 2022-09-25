const txtEntrada = document.querySelector(".texto-entrada");
const txtSalida = document.querySelector(".texto-salida");
const Codigos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function botonEncriptar(){
    const textoEncriptado = encriptar(txtEntrada.value);
    txtSalida.value = textoEncriptado.replace(/[^a-zA-Z ]/g, '');
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(txtEntrada.value);
    txtSalida.value = textoEncriptado.replace(/[^a-zA-Z ]/g, '');
}

function encriptar(texto){
    texto = texto.toLowerCase();

    for(i = 0; i < Codigos.length; i++){
        if(texto.includes(Codigos[i][0])){
            texto = texto.replaceAll(Codigos[i][0], Codigos[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto){
    texto = texto.toLowerCase();

    for(let i = 0; i < Codigos.length; i++){
        if(texto.includes(Codigos[i][1])){
            texto = texto.replaceAll(Codigos[i][1], Codigos[i][0]);
        }
    }
    return texto;
}

function copiar(){
    txtSalida.select();
    document.execCommand('copy');
}