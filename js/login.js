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
let sesion = sessionStorage.getItem("sesion");

const correoUsuario = "fernandaciprian31@gmail.com";
const contra = "123456";

function MostrarBtnLogout() {
    if (sesion = true){
        btnLogout.style.display = "block";
        login.style.display = "none";
        
     }
     else{
        btnLogout.style.display = "none";
         login.style.display = "block";
     }

    // btnLogout.style.display = sesion ? "block" : "none";
    // login.style.display = sesion ? "none" : "block";
}

function MostrarBtnLogin(){
    if (sesion = true){
       login.style.display = "block";
       btnLogout.style.display = "none";
    }
    else{
        login.style.display = "none"
        btnLogout.style.display = "block";
    }
//     login.style.display = sesion ? "block" : "none"
//     btnLogout.style.display = sesion ? "none" : "block";
}
function logout(){
    sessionStorage.clear();
}

btnLogout.addEventListener('click', ()=>{
    logout();
    MostrarBtnLogin();
})


iniciarSesion.addEventListener('click',()=>{
    iniciar();
})

function iniciar(){

    sessionStorage.setItem("usuario", "Fernanda")
    sessionStorage.setItem("correo", document.getElementById('correo').value)
    sessionStorage.setItem("contrase_a", document.getElementById('contrase_a').value)
    sessionStorage.setItem("sesion", true)
    // btnLogout.style.display = "flex";
    // alert(localStorage.getItem("correo") +"\n" + localStorage.getItem("contra"));
}



btnIniciar.addEventListener('click', () => {
    inicio();
    MostrarBtnLogout();
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



