import { useRef } from 'react';
import NavBar from "./NavBar";
import "../css/styles.css";

export default function MaestroProductos(){
    let refConfirmacion = useRef();

    function muestraMensaje() {
        alert('El producto se ha editado con éxito');
    };
    return(
        <>
          <link href="css/styles.css" rel="stylesheet" />
          {/* Iconos CSS Fontawesome */}
          <title>Maestro de Productos</title>
          <NavBar/>
          <br />
          <div className="container row">
            {/* Texto de inicio */}
            <div className="col-12 m-3  ps-5">
              <h1 className="text-center fs-1" id="texto_inicio">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  Maestro de Productos</h1>
            </div>
            {/* Columna de búqueda */}
            <div className="col-md-12 m-4">
              <form className="d-flex">
                <input className="form-control me-2 barra_busqueda" type="search" placeholder="Ingrese ID del producto, descripción o precio unitario" aria-label="Search" />
                <button className="btn btn-outline-primary boton_buscar" type="submit">Buscar</button>
              </form>
            </div>
            {/* Columna de  botón editar*/}
            <div className="col-12 mx-4">
              <button type="button" className="btn btn-outline-success boton_editar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Editar Producto</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  {/* Formulario */}
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="inputIDProducto" className="form-label">ID Producto</label>
                        <input type="text" className="form-control" id="identificadorPID" readOnly />
                        <div className="form-text">No se puede editar este campo</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputDescripcionP" className="form-label">Descripción del producto</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputPrecioUnitario" className="form-label">Precio unitario</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputEstado" className="form-label">Disponibilidad</label>
                        <br />
                        <select className="custom-select estado">
                          <option selected>Seleccione una opción</option>
                          <option value={1}>Disponible</option>
                          <option value={2}>No Disponible</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary boton_formulario_2" data-bs-toggle="collapse" id="confirmacion" ref={refConfirmacion} onClick={muestraMensaje}>Guardar cambios</button>         
                    {/* Confirmación de los cambios en el formulario*/}
                    {/* <div class="collapse" id="confirmacion">
                  <div class="alert alert-success" role="alert">
                      <p>¡Sus cambios han sido guardados con éxito!</p>
                  </div>
                </div> */}
                    {/* href="#confirmacion" */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tabla */}
          <div className="col-11 m-5 border">
            <table className="table table-striped table-hover tabla">
              <thead>
                <tr className="text-left">
                  <th scope="col">ID Producto</th>
                  <th scope="col">Descripción del producto</th>
                  <th scope="col">Precio unitario</th>
                  <th scope="col">Disponibilidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">23123</th>
                  <td>Collar</td>
                  <td>15.000</td>
                  <td>Disponible</td>
                </tr>
                <tr>
                  <th scope="row">32312</th>
                  <td>Botas</td>
                  <td>45.000</td>
                  <td>No Disponible</td>
                </tr>
                <tr>
                  <th scope="row">24324</th>
                  <td>Vacunas</td>
                  <td>27.000</td>
                  <td>No Disponible</td>
                </tr>
                <tr>
                  <th scope="row">32423</th>
                  <td>Polvos</td>
                  <td>20.000</td>
                  <td>Disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
    )
}