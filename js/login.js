const a = document.getElementById('login');
const b = document.getElementById('registro');
const c = document.getElementById('btn');
const closeLogin = document.getElementById('popup-login-close');
//--botones
const login = document.querySelector('.btn-login');//iniciar sesion header
const btnLogout = document.querySelector('.btn-logout');// cerrar sesion header
let iniciarSesion = document.querySelector('#iniciar-sesion');// boton iniciar sesion en formulario
const btnIniciar = document.getElementById('btn-iniciar'); // iniciar sesion formulario (arriba)
const btnRegistrar = document.getElementById('btn-registrar');// registrar formulario

const nombreUsuario = document.getElementById('nombre-usuario');
let Msg = document.getElementById('error');

const correoUsuario = "fernandaciprian31@gmail.com";
const contra = "123456";


//     login.style.display = sesion ? "block" : "none"
//     btnLogout.style.display = sesion ? "none" : "block";

btnLogout.addEventListener('click', ()=>{
    logout();
})

function logout(){
    sessionStorage.clear();

}

iniciarSesion.addEventListener('click',()=>{
    iniciar();
})

function iniciar(){

    sessionStorage.setItem("usuario", "Fernanda")
    sessionStorage.setItem("correo", document.getElementById('correo').value)
    sessionStorage.setItem("contrase_a", document.getElementById('contrase_a').value)
    sessionStorage.setItem("sesion", true)
    
    if(sessionStorage.getItem("correo") == correoUsuario && sessionStorage.getItem("contrase_a") == contra)
    {   
        // window.location.href = "index-copia.html";
        btnLogout.style.display = "block"
        login.style.display = "none"
        nombreUsuario.innerText = "Bienveido(a): "+ sessionStorage.getItem('usuario')
        CerrarLoginForm();
    } 
    else
    {
        Msg.innerText = "Usuario y/o contraseña incorrectos";
        Msg.style.display = "block";
    }
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

if(sessionStorage.getItem("sesion") == true)
{
    btnLogout.style.display = "block"
    login.style.display = "none"
    nombreUsuario.innerText = "Bienveido(a): "+ sessionStorage.getItem('usuario')
    window.location.href = "index.html";

}
else{
    btnLogout.style.display = "none"
    login.style.display = "block"
    nombreUsuario.style.display = "none"
}

