
const nombre = document.getElementById("name");
const cuit= document.getElementById("cuit");
const pass = document.getElementById("password");
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const button= document.getElementById("button")

let arrayDatos=[];

function guardarDatos(){
    let datos= document.getElementsByClassName("input")
        arrayGuardar = [];         
    for (let i = 0; i < datos.length; i++) {    
        arrayGuardar[i] = datos[i].value;
        console.log (datos[i].value);     
        }       
    }  
guardarDatos();

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(pass.value.length< 8){
        warnings += `La contraseña debe contener un minimo de 8 caracteres <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

