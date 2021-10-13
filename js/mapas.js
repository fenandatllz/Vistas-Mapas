import  * as alertas  from "./alertas.js";
const btnGetDesarrollo = document.querySelector('#get-desarrollo');
const toolTip = document.getElementById('info-lote');
const mapa = document.getElementById('mapa-interactivo');

const loadManzana = async (desarrollo, manzana) => {
  fetch(`./desarrollos/${desarrollo}/Manzanas/${manzana}.svg`)
    .then((svg) => svg.text())
    .then((html) => (mapa.innerHTML = html))

    
}

btnGetDesarrollo.addEventListener('click', (e) => {
  const desarrollo = document
    .querySelector('#desarrollo')
    .value.toLowerCase()
    .replace(' ', '-')

  mapa.innerHTML = ''
  fetch(`./desarrollos/${desarrollo}/plano.svg`)
    .then((svg) => svg.text())
    .then((html) => (mapa.innerHTML = html))

    
})

mapa.addEventListener('click', (e) => {
  if (e.target.matches('[data-manzana]')) {
    const manzana = e.target.id
    const fraccionamiento = e.target.closest('svg').dataset.desarrollo
    console.log(fraccionamiento, manzana)
    loadManzana(fraccionamiento, manzana)
  }
})

mapa.addEventListener('click', (e) => {
  const desarrollo = document.querySelector('#desarrollo').value
  const info = document.querySelector('.info-apartado')
  if (e.target.matches('[data-lote]')) {
    console.log(`${desarrollo} ${e.target.id}`)
    alertas.openLoginForm();
    info.innerHTML = desarrollo + " " +e.target.id;
  }
})
closeMonto.addEventListener('click', ()=>{
  closeLoginForm();
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
      toolTip.style.left = (map.right + 20) + "px";
      toolTip.style.top = (window.scrollY + map.top - 60) + "px";
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
