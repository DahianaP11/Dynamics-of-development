export default function MaestroUsuario() {
  return (
    <>
      <title>Gestion de usuarios</title>
      <br />
      <br />
      <center>
        <h1 id="G-heading">Maestro de usuarios</h1>
      </center>
      {/*barra de busqueda*/}
      <form className="d-flex">
        <input
          className="G-form-control me-2"
          type="search"
          placeholder="Ingresa el Id, Nombre o Apellido"
          aria-label="Search"
        />
        <button className="btn G-btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
      {/*Boton ordenar por*/}
      <select name="ordenar" className="G-ordenar">
        <option selected disabled>
          Odenar por
        </option>
        <option value="cc" className="op">
          ID
        </option>
        <option value="nombre" className="op">
          Nombre
        </option>
        <option value="apellido" className="op">
          Apellido
        </option>
        <option value="rol" className="op">
          Rol
        </option>
        <option value="estado" className="op">
          Estado
        </option>
      </select>
      <br />
      {/*<button name="button" id="button2">Odenar por</button>*/}
      {/*Tabla */}
      <div className="col-11 m-5 border G-table">
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

      {/*Actualizar*/}

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn Ga-btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Actualizar
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Actualizar
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="contenedor-inputs">
                <h4 class="rol">Rol</h4>
              <input type="radio" name="Rol" value="1"/> Vendedor <br/>
              <input type="radio" name="Rol" value="2"/> Administrador <br/>
            </div></div>
            <div class="modal-body">
              <div class="contenedor-inputs">
                <h4 class="rol">Estado</h4>
              <input type="radio" name="Estado" value="1"/> Aceptado <br/>
              <input type="radio" name="Estado" value="2"/> Denegado <br/>
            </div></div>
            
            <div class="modal-footer">
              <button
                type="button"
                class="btn G-btn-secondary"
                data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="button" class="btn G-btn-primary">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
