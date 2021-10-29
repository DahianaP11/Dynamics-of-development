export default function MaestroUsuario(){
    return(
        <>
          <title>Gestion de usuarios</title>
          <br /><br />
          <center><h1 id="headingGP">Maestro de usuarios</h1></center>       
          {/*barra de busqueda*/}
          <form className="d-flex">
            <input className="form-controlGP me-2" type="search" placeholder="Ingresa el Id, Nombre o Apellido" aria-label="Search" />
            <button className="btn btn-outline-successGP" type="submit">Buscar</button>
          </form>
          {/*Boton ordenar por*/}
          <select name="ordenar" className="ordenarGP">
            <option selected disabled>Odenar por</option>
            <option value="cc" className="op">ID</option>
            <option value="nombre" className="op">Nombre</option>
            <option value="apellido" className="op">Apellido</option>
            <option value="rol" className="op">Rol</option>
            <option value="estado" className="op">Estado</option>
          </select><br />
          {/*<button name="button" id="button2">Odenar por</button>*/}
          {/*Tabla */}
          <div className="col-11 m-5 border">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
          </table>
      </div>
          
          <button name="button3" id="button3GP">Actualizar</button>
          
        </>
    )
}
