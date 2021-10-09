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
   
   //document.getElementById("identificadorP").setAttribute('identificadorP',result);     
   document.getElementById('identificadorP').value=result;
   // document.getElementById("identificadorP").disabled = true;  
   
   // return result;
}

function disponibleClick(){
   document.getElementById("Nodisp").disabled = true;

   if (document.getElementById("disp").checked==false){
      document.getElementById("Nodisp").disabled = false;
   }
}

function NodispClick(){
   document.getElementById("disp").disabled = true;
   if (document.getElementById("Nodisp").checked==false){
      document.getElementById("disp").disabled = false;
   }
}


makeid();








