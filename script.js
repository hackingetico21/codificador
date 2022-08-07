function cifrar (){
    var texto = document.querySelector("#input-texto").value;
    if(texto == ""){
        alert("Favor ingrese un texto para cifrar");
    }else{
        var textoCifrado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
    }
}
var boton1 = document.querySelector("#btn-cifrar");
boton1.onclick = cifrar;

function descifrar (){
    var texto = document.querySelector("#input-texto").value;
    if(texto == ""){
        alert("Favor ingrese un texto para descifrar");
    }else{
        var textoDescifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector("#text-input-salida").value = textoDescifrado;
        document.querySelector("#input-texto").value;
    }
}
var boton2 = document.querySelector("#btn-descifrar"); 
boton2.onclick = descifrar;

function BotonCopiar(){
    var copia = document.getElementById("text-input-salida").value
    navigator.clipboard.writeText(copia)
    alert("Texto copiado al portapapeles" )
}