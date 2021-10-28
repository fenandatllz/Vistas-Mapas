const btnLogout = document.querySelector('.btn-logout');// cerrar sesion header
let sesion = sessionStorage.getItem('sesion');
const nombreUsuario = document.getElementById('nombre-usuario');

if(sesion = true)
{
    btnLogout.style.display = "block"
    nombreUsuario.innerText = "Bienveido(a): "+ sessionStorage.getItem('usuario')
}

function logout(){
    sessionStorage.clear();
}

btnLogout.addEventListener('click', ()=>{
    logout();
    window.location.href = "index.html";
})