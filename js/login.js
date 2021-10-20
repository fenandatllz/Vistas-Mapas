const a = document.getElementById('login');
const b = document.getElementById('registro');
const c = document.getElementById('btn');
const closeLogin = document.getElementById('popup-login-close');
const login = document.querySelector('.btn-login');
const logout = document.querySelector('#btn-logout');
let iniciarSesion = document.querySelector('#iniciar-sesion');
const btnIniciar = document.getElementById('btn-iniciar');
const btnRegistrar = document.getElementById('btn-registrar');
// let registrarUsuario = document.getElementById('registrar-usuario');

iniciarSesion.addEventListener('click',()=>{
    iniciar();
    botonLog();
})


function iniciar(){

    sessionStorage.setItem("usuario", "Fernanda")
    sessionStorage.setItem("correo", document.getElementById('correo').value)
    sessionStorage.setItem("contrase_a", document.getElementById('contrase_a').value)
    sessionStorage.setItem("sesion", true)
    document.getElementById('usuario').innerHTML = "Bienvenido(a): " + sessionStorage.getItem("user");

    // alert(localStorage.getItem("correo") +"\n" + localStorage.getItem("contra"));
}


btnIniciar.addEventListener('click', () => {
    inicio();
})
btnRegistrar.addEventListener('click', () =>{
    registro();
})

function registro (){
    a.style.left ='-400px';
    b.style.left = '50px';
    c.style.left = '140px'
}

function inicio (){
    a.style.left ='50px';
    b.style.left = '450px';
    c.style.left = '0px';
}

// FormularioLogin 
export function AbrirLoginForm(){
    document.body.classList.add("MostrarLoginForm");
} 
function CerrarLoginForm(){
    document.body.classList.remove("MostrarLoginForm");
}

closeLogin.addEventListener('click', ()=>{
    CerrarLoginForm();
})
login.addEventListener('click',()=>{
    AbrirLoginForm();
})

function botonLog(){
    if (login.style.display ==  "none"){
        login.style.display = "block";
    }
    else{
        login.style.display = "none";
    }
}

function botonL(){
    if (logout.style.display ==  "none"){
        logout.style.display = "block";
    }
    else{
        logout.style.display = "none";
    }
}


