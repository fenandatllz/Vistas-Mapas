import { openLoginForm } from "./alertas.js";
import { AbrirLoginForm } from "./login.js";
// const btnGetDesarrollo = document.querySelector('#get-desarrollo');
// const getDesarrollo = document.querySelector('#nombre-desarrollo');
let zoom = 1;

const correoUsuario = "fernandaciprian31@gmail.com";
const contra = "123456";

let posicionY = 0;
let posicionX = 0;

const toolTip = document.getElementById('info-lote');
let mapa = document.getElementById('mapa-interactivo');
let svg = document.querySelector('#Manzana')

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
    posicionY = e.pageY;
    posicionX = e.pageX;
    // console.log(svg);
    // svg.style.transform = "scale ("+zoom+")";
    console.log(fraccionamiento, manzana)
    loadManzana(fraccionamiento, manzana)
    e.preventDefault()
    console.log(e)
    
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
mapa.addEventListener('touchstart',showPopup);
mapa.addEventListener('touchend',hidePopup);

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
		
		$('.zoom').on('click', function(){
			zoom += 0.1;
			$('.target').css('transform', 'scale(' + zoom + ')');
		});
		$('.zoom-init').on('click', function(){
			zoom = 1;
			$('.target').css('transform', 'scale(' + zoom + ')');
		});
		$('.zoom-out').on('click', function(){
            if(zoom != 1){
                zoom -= 0.1;
                $('.target').css('transform', 'scale(' + zoom + ')');
            }	
		});