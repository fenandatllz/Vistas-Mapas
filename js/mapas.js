// import  * as alertas  from "./alertas.js";
import { openLoginForm } from "./alertas.js";
import { AbrirLoginForm } from "./login.js";
// const btnGetDesarrollo = document.querySelector('#get-desarrollo');
// const getDesarrollo = document.querySelector('#nombre-desarrollo');
// console.log(getDesarrollo.innerHTML);
const correoUsuario = "fernandaciprian31@gmail.com";
const contra = "123456";

let posicionY = 0;
let posicionX = 0;
// let posicionModal = 0;
const toolTip = document.getElementById('info-lote');
let mapa = document.getElementById('mapa-interactivo');

const loadManzana = async (desarrollo, manzana) => {
  fetch(`./desarrollos/${desarrollo}/Manzanas/${manzana}.svg`)
    .then((svg) => svg.text())
    .then((html) => (mapa.innerHTML = html))
console.log(loadManzana);
    
}

// btnGetDesarrollo.addEventListener('click', (e) => {
//   const desarrollo = document
//     .querySelector('#desarrollo')
//     .value.toLowerCase()
//     .replace(' ', '-')

//   mapa.innerHTML = ''
//   fetch(`./desarrollos/${desarrollo}/plano.svg`)
//     .then((svg) => svg.text())
//     .then((html) => (mapa.innerHTML = html))  
// })

  const desarrollo = document
    .querySelector('#nombre-desarrollo')
    .innerHTML
    .toLowerCase()
    .replace(' ', '-')

  mapa.innerHTML = ''
  fetch(`./desarrollos/${desarrollo}/plano.svg`)
    .then((svg) => svg.text())
    .then((html) => (mapa.innerHTML = html))  


mapa.addEventListener('click', (e) => {
  if (e.target.matches('[data-manzana]')) {
    let auxManzana = e.target.id.split('-') 
    const manzana = auxManzana[0];
    const fraccionamiento = e.target.closest('svg').dataset.desarrollo
    console.log(fraccionamiento, manzana)
    loadManzana(fraccionamiento, manzana)
  }
})

mapa.addEventListener('click', (e) => {
  const desarrollo = document.querySelector('#nombre-desarrollo').innerHTML
  const info = document.querySelector('.info-apartado')
  let posicionModal = e.pageY;
  const modal = document.getElementById('modal');
  const modalLogin = document.getElementById('modal-login');


  if (e.target.matches('[data-lote]')) {
    console.log(`${desarrollo} ${e.target.id}`)
    // console.log(`posicion:  ${posicionModal}`);
    if(sessionStorage.getItem("correo") == correoUsuario && sessionStorage.getItem("contrase_a") == contra){
      modal.style.top = posicionModal + 'px';
      openLoginForm();
      info.innerHTML = desarrollo + " " +e.target.id;
    }
    else{
      modalLogin.style.top = posicionModal + 'px';
      AbrirLoginForm();
    }
    
  }
})

mapa.addEventListener('mouseover', (e) => {
  if (e.target.matches('[data-lote]')) {
    toolTip.innerHTML="";
    let lote = document.createElement("p");
    lote.textContent = e.target.id;
    toolTip.appendChild(lote);
    let dimension = document.createElement("p");
    dimension.textContent = "Dimension: " + e.target.dataset.dimension + " m2";
    toolTip.appendChild(dimension);
    let costoMetro = document.createElement("p");
    costoMetro.textContent = "Costo M2: $ " + e.target.dataset.costom2 
    toolTip.appendChild(costoMetro);
    let total = document.createElement("p");
    total.textContent = "Costo total: $ " + e.target.dataset.costototal;
    toolTip.appendChild(total); 
     posicionX = e.pageX;
     posicionY = e.pageY;
    showPopup();
  }
})

mapa.addEventListener('mouseout', (e) => {
  if (e.target.matches('[data-lote]')) {
    hidePopup();
  }
})

    function showPopup(evt) {
      let mapaSvg = mapa.querySelector('#map'); 
      let map = mapaSvg.getBoundingClientRect();
      toolTip.style.left = posicionX + 'px';
      toolTip.style.top = posicionY + 'px';
      toolTip.style.display = "block";
    }
    
    function hidePopup(evt) {
      toolTip.style.display = "none";
    }


/*
  fetch(`./desarrollos/${desarrollo}/plano.svg`)
    .then((svg) => {
      if (!svg.ok) {
        throw Error('No esta disponible por el momento')
      }
      svg.text()
    })
    .then((html) => (mapa.innerHTML = html))
    .catch((err) => alert(err))
*/