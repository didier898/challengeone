document.getElementById("encriptarBtn").addEventListener("click", encriptar);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptar);
document.getElementById("copiarBtn").addEventListener("click", copiarResultado);
document.getElementById("limpiarBtn").addEventListener("click", limpiarResultado);

function encriptar() {
    let textoOriginal = document.getElementById("texto").value;
    let textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufer");
    document.getElementById("resultado").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("texto").value;
    let textoOriginal = textoEncriptado.replace(/ufer/g, "u")
                                        .replace(/ober/g, "o")
                                        .replace(/ai/g, "a")
                                        .replace(/imes/g, "i")
                                        .replace(/enter/g, "e");
    document.getElementById("resultado").value = textoOriginal;
}

function copiarResultado() {
    let resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Resultado copiado al portapapeles");
}

function limpiarResultado() {
    document.getElementById("resultado").value = "";

}

function validateInput(input) {
    input.value = input.value.toLowerCase().replace(/[^a-z\s]/g, ''); 
}
