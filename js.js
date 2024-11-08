const nombres = ['Juan', 'marlon', 'miguel', 'jhon', ];


const boton = document.getElementById('botom');
const lista = document.getElementById('nombresLista');


boton.addEventListener('click', function() {
    
    lista.innerHTML = '';


    nombres.forEach(function(nombre) {
        const item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
    });
});