 var divboton = $('.botoncito')
 var unBoton = $('.boton');

 var imagenes = $('.lugares');

 var volverajugar = $('#volverajugar');

 function obtenerRandomEntreNumeros(nroMinimo, nroMaximo) {
     return Math.floor(Math.random() * (nroMaximo - nroMinimo)) + nroMinimo;
 }


 unBoton.click(function () {

     $(imagenes[obtenerRandomEntreNumeros(0, 10)]).show()
     volverajugar.show();
     divboton.hide();
 })

 volverajugar.click(function () {

     imagenes.hide();
     volverajugar.hide();
     divboton.show();
 })