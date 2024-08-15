const textArea = document.querySelector(".contenido__seccion1__texto");
const mensaje = document.querySelector(".contenido__seccion2__resultado");
const imagenMuneco = document.querySelector(".contenido__seccion2__imagen");
const loader = document.querySelector(".loader");
const tituloImagen = document.querySelector(".contenido__seccion2_tituloImagen");
const texto = document.querySelector(".contenido__seccion2__texto");
const btnEncrip = document.querySelector(".contenido__seccion1__inferior__botones__encriptar")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    loader.classList.add("hidden");
    tituloImagen.textContent = ""
    
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    loader.classList.add("hidden");
    tituloImagen.textContent = ""
}

function btnCopiar(){
    const copiar = document.getElementById("contenido__seccion2__resultado")
    copiar.select();
    copiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiar.value);
    alert("Se copió el texto: " + copiar.value);
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
return stringDesencriptada;
}

textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loader.classList.remove("hidden");
    tituloImagen.textContent = "Esperando mensaje";
    texto.textContent = "";
})

