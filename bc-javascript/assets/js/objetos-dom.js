/*let persona = {
    rut: "18856034-2",
    firstName: "Isaac",
    lastName: "Mora",
    birthDate: "17-08-1994",
    sleep: function() {console.log('Estoy durmiendo')},
    wakeUp: function() {console.log('Estoy despertando')}

}

console.log(persona.sleep("23:00"))
persona.firstName = "Andres"
console.log(persona)

let avion = {
    modelo: "boeing 737 ",
    capacidadPasajeros: "186",
    matricula: "XSSFS10",
    volar: function(){console.log('Vuelo activado')}
}

console.log(avion.modelo)
avion.volar() */
 let labelName = document.getElementById('labelName')
 let labelWelcome = document.getElementById('labelWelcome')
 let labelJob = document.getElementById('labelJob')
 let btnCito = document.getElementById('btnCito')
 let inputNombre = document.getElementById('inputNombre')
 let btnVisitar = document.getElementById('btnVisitar')

 console.log(labelName)
 console.log(labelWelcome)

 
 labelJob.innerHTML = '<strong>DEVELOPER<strong>'

 btnCito.addEventListener('click', function(){
    /*alert('Hola desde el click del boton')*/
    labelName.innerText = "Hola Andres !!"
    inputNombre.value = "Isaac"
    labelName.classList.remove('colorGreen')
    labelName.classList.add('colorAquaMarine')
    //labelName.classList.toggle('colorAquaMarine')

 })

 btnVisitar.addEventListener('click', () => {
    let visitar = document.getElementsByTagName('a')
    visitar[0].setAttribute('href', 'https://google.com')
    visitar[0].innerText = 'Visitar google'
    labelName.classList.toggle('text-30')
    
 })

let btnAgregar = document.getElementById('btnAgregar')
btnAgregar.addEventListener('dblclick', () => {
    let body = document.getElementById('bodyPrincipal')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let lib = document.createElement('li')
    li.innerText = 'Primer Elemento'
    lib.innerText = 'Segundo Elemento'
    ul.appendChild(li)
    ul.appendChild(lib)
    body.appendChild(ul)
},)

 /*
 <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
 */ 