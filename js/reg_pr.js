

document.getElementById("Registrar").onclick = muestraMensaje;

function muestraMensaje() {
    alert('Se ha registrado el producto exitosamente');
  }

function makeid(){   
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 9; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));      
   }
      
      
   document.getElementById("identificadorP").readonly = false;   
   document.getElementById('identificadorP').value=result;
   document.getElementById("identificadorP").readonly = true;
   
   
   
   
   // return result;
}



