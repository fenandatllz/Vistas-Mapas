const a = document.getElementById('login');
const b = document.getElementById('registro');
const c = document.getElementById('btn');
const closeLogin = document.getElementById('popup-login-close');
const login = document.querySelector('.btn-login');
const logout = document.querySelector('#btn-logout')

document.getElementById('iniciar-sesion').addEventListener("click", iniciarSesion);

function iniciarSesion(){
    sessionStorage.setItem("usuario", "prueba")
    sessionStorage.setItem("correo", document.getElementById('correo').value)
    sessionStorage.setItem("contra", document.getElementById('contrase_a').value)
    sessionStorage.setItem("sesion", true)
    alert(sessionStorage.getItem("usuario") +"\n" + sessionStorage.getItem("correo") +"\n" + sessionStorage.getItem("sesion"))
}
if(sessionStorage.getItem("sesion") == true)
{
    logout.style.display = "block";
    login.style.display = "none";
}

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
function AbrirLoginForm(){
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