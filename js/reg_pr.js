document.getElementById("Registrar").onclick = muestraMensaje;

function muestraMensaje() {
    alert('Se ha registrado el producto exitosamente');
  }

  const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
    
}
document.getElementById("id").innerHTML = result1;
document.getElementById('id').addEventListener('click', generateRandomString);