document.getElementById("Registrar").onclick = muestraMensaje;

function muestraMensaje() {
    alert('Se ha registrado el producto exitosamente');
  }

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
document.getElementById("id").innerHTML = result;
document.getElementById('id').addEventListener('change', generateRandomString);