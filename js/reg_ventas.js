document.getElementById("Registrarv").onclick = muestraMensaje;

function muestraMensaje() {    
      alert('Venta registrada exitosamente'); 
          
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

function vTotal(){
   var resultado=0;
   resultado=document.getElementById("Cantidad").value*document.getElementById("vunitario").value;

   document.getElementById('vtVenta').value=resultado;
}




makeid();









