const closeMonto = document.getElementById('popup-apartado-close');
const closeLogin = document.getElementById('popup-login-close');
const login = document.querySelector('.btn-login');

// Formulario Monto Pago
 export function openLoginForm(){
            document.body.classList.add("showLoginForm");
        } 
        function closeLoginForm(){
            document.body.classList.remove("showLoginForm");
        }
        
closeMonto.addEventListener('click', ()=>{
    closeLoginForm();
})

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

// Alerta Pago Exitoso
let x;
let toast = document.getElementById("toast");
 export function showToast(){
        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        x = setTimeout(()=>{
             toast.style.transform = "translateX(400px)"
             }, 4000);
            }
        function closeToast(){
             toast.style.transform = "translateX(400px)";
        }
//Alerta Error Pago 
        // let y;
        // let alerta = document.getElementById("toast2");
        //     function showAlerta(){
        //         clearTimeout(y);
        //         alerta.style.transform = "translateX(0)";
        //         y = setTimeout(()=>{
        //              alerta.style.transform = "translateX(400px)"
        //              }, 4000);
        //             }
        //         function closeToast(){
        //              alerta.style.transform = "translateX(400px)";
        //         }
        //Nota *Cambiar nombre a la funcion closeToast*

// Modal Pago Exitoso
const btnPago = document.querySelector('#btn-enviar');
btnPago.addEventListener('click', () => {  
     document.getElementsByClassName("success");
     closeLoginForm();
    });

//Modal Pago Sin Exito
const btnCancelar = document.querySelector('#btn-cancelar');
btnCancelar.addEventListener('click', () => {  
     document.getElementsByClassName("error");
     closeLoginForm();
    });



