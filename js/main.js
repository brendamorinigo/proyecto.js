const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const button= document.getElementById("button")
uCuit=""
uContrasenia=""

const arrayDatos= [
    {nombre: "ADRIAN", cuit:27401858151, pass:"185815bdm"},
    {nombre: "ALESSIO", cuit:271658154, pass:"5698asdfgk"}
]



function iniciarSesion(){
    let uCuit=""
    let uContrasenia=""
    let acceso= false;

    uCuit=document.querySelector('#cuit').value;
    uContrasenia= document.querySelector('#password').value;

    acceso= validarUsuario(uCuit, uContrasenia)
    console.log(acceso)

    if(acceso=true){
        window.location.href="bienvenido.html"
    } 
}

function validarUsuario (){
  let acceso= false

  for (let i=0; i<arrayDatos.length; i++){
      if( uCuit== arrayDatos[i][1] && uContrasenia==arrayDatos[i][2]){
          acceso=true;
          indow.location.href="bienvenido.html"
      } 
  }
}

button.addEventListener("click", iniciarSesion);




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
