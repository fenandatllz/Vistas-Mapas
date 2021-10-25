const a = document.getElementById('login');
const b = document.getElementById('registro');
const c = document.getElementById('btn');
const closeLogin = document.getElementById('popup-login-close');
//--botones
const login = document.querySelector('.btn-login');//iniciar sesion index
const btnLogout = document.querySelector('.btn-logout');// cerrar sesion index

let iniciarSesion = document.querySelector('#iniciar-sesion');// boton iniciar sesion en formulario
const btnIniciar = document.getElementById('btn-iniciar'); // iniciar sesion formulario (arriba)
const btnRegistrar = document.getElementById('btn-registrar');// registrar formulario


iniciarSesion.addEventListener('click',()=>{
    iniciar();
})

btnLogout.addEventListener('click', ()=>{
    logout();
})

function iniciar(){

    sessionStorage.setItem("usuario", "Fernanda")
    sessionStorage.setItem("correo", document.getElementById('correo').value)
    sessionStorage.setItem("contrase_a", document.getElementById('contrase_a').value)
    sessionStorage.setItem("sesion", true)
    // btnLogout.style.display = "flex";
    
    

    // alert(localStorage.getItem("correo") +"\n" + localStorage.getItem("contra"));
}
function logout(){
    sessionStorage.clear();
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


