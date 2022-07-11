/*Declaracion de variables globales*/
var aceptar = document.querySelector('#aceptar');
var contenedor__hijo = document.querySelector('.contenedor__hijo');
var textoDeEntrada = document.querySelector('#textoDeEntrada');


var botonEliminar = document.querySelector('.boton__Eliminar');

/* Declaracion del evento para la tarea nueva */

aceptar.addEventListener('click',()=>{
    var textoDeSalida = document.createElement('input');
    textoDeSalida.classList.add('escrito');
    textoDeSalida.type='text';
    textoDeSalida.value=textoDeEntrada.value;
    textoDeSalida.setAttribute('readonly', 'readonly');
    contenedor__hijo.appendChild(textoDeSalida);
    botones();
});


// Añadir botones a los inputs
function botones (){
    
    const botonEditar = document.createElement('button');
    botonEditar.type='submit';
    botonEditar.innerHTML='Editar'
    botonEditar.classList.add('boton__editar');
    contenedor__hijo.appendChild(botonEditar);



    const botonEliminar = document.createElement('button');
    botonEliminar.type='submit';
    botonEliminar.innerHTML='Eliminar'
    botonEliminar.classList.add('boton__Eliminar');
    contenedor__hijo.appendChild(botonEliminar);
    eventoEditar(botonEditar)
    // Evento para editar el Elemento
}
function eventoEditar(botonEditar){
    botonEditar.addEventListener('click',()=>{
        console.log('holii')
        const botonEliminar = document.createElement('button');
        botonEliminar.type='submit';
        botonEliminar.innerHTML='Eliminar'
        botonEliminar.classList.add('boton__Eliminar');
        contenedor__hijo.appendChild(botonEliminar);
    })
}



