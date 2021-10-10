var btnAbrirPopup = document.getElementById('button3'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
});


document.getElementById("actualizar1").onclick = muestraMensaje;

function muestraMensaje() {
    alert('Se ha actualizado el rol exitosamente');
}

document.getElementById("actualizar2").onclick = muestraMensajeDos;

function muestraMensajeDos() {
    alert('Se ha actualizado el estado exitosamente');
}