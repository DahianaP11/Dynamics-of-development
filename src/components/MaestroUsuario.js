import "../css/maeU.css"

export default function MaestroUsuario(){
    return(
        <>
          <title>Gestion de usuarios</title>
          <br /><br />
          <center><h1 id="heading">Maestro de usuarios</h1></center>       
          {/*barra de busqueda*/}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Ingresa el Id, Nombre o Apellido" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          {/*Boton ordenar por*/}
          <select name="ordenar" className="ordenar">
            <option selected disabled>Odenar por</option>
            <option value="cc" className="op">ID</option>
            <option value="nombre" className="op">Nombre</option>
            <option value="apellido" className="op">Apellido</option>
            <option value="rol" className="op">Rol</option>
            <option value="estado" className="op">Estado</option>
          </select><br />
          {/*<button name="button" id="button2">Odenar por</button>*/}
          {/*Tabla */}
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col" className>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th scope="row">2</th>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th scope="row">3</th>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th scope="row">4</th>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th scope="row">5</th>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
          <button name="button3" id="button3">Actualizar</button>
          <div className="col-12">
            {/*Actualizar*/}
            <div className="overlay" id="overlay">
              <div className="popup" id="popup">
                <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x={4} y={4} width={16} height={16} rx={2} />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                  </svg></a>
                <h3>Rol</h3>
                <div className="contenedor-inputs">
                  <input type="radio" name="Rol" defaultValue={1} /> Vendedor<br />
                  <input type="radio" name="Rol" defaultValue={2} /> Administrador<br />
                </div>
                <input type="submit" className="btn-submit" defaultValue="Actualizar" id="actualizar1" />
                <br /><br />
                <h4>Estado</h4>
                <div className="contenedor-inputs">
                  <input type="radio" name="Estado" defaultValue={1} /> Aceptado<br />
                  <input type="radio" name="Estado" defaultValue={2} /> Denegado<br />
                </div>
                <input type="submit" className="btn-submit" defaultValue="Actualizar" id="actualizar2" />
              </div>
            </div>  
          </div>  
        </>
    )
}
