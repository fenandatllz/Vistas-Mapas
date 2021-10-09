import  * as alertas  from "./alertas.js";
const btnGetDesarrollo = document.querySelector('#get-desarrollo')
const mapa = document.querySelector('#mapa-interactivo')

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
    // alert(`${desarrollo} ${e.target.id}`)
    // alertas.AbrirLoginForm();
    alertas.openLoginForm();
    // info.innerHTML = 
  }
})

// fetch ('./producto.json')
//   .then(resp =>resp.json())
//   .then(data=>{
//     console.log(data);
//   })

fetch ('./producto.json')
  .then(resp =>resp.json())
  .then(data=>{
      document.querySelector(".l1").innerText = data.Nombre_Fraccionamiento;
      document.querySelector(".l2").innerText =data.Manzana;
      document.querySelector(".l3").innerText =data.Lote;
      document.querySelector(".l4").innerText =data.Dimension_del_Terreno_M21;
      document.querySelector(".l5").innerText =data.Costo_total_del_terreno;
      
    })

  

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
