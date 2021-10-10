document.getElementById("confirmacion").onclick = muestraMensaje;

function muestraMensaje() {
    alert('¡La venta ha sido editada de forma exitosa!');
  }

function ventaID(){   
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));      
    }       
       
    document.getElementById('identificadorVID').value=result;
 }

ventaID();