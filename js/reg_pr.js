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

function myFunction() 
{
   
   document.getElementById("Nodisp").disabled = false;
   document.getElementById("disp").disabled = false;
   document.getElementById("disp").checked = false;
   document.getElementById("Nodisp").checked = false;

   if(document.getElementById("disp").checked==true)
   {
      document.getElementById("Nodisp").disabled = true;
      document.getElementById("disp").disabled = false;
   }
    else
   {
      document.getElementById("Nodisp").disabled = false;
      document.getElementById("disp").disabled = true;
      
   }
}

makeid();
myFunction();







