import {useRef} from "react";
import NavBar from "./NavBar";

export default function MaestroVentas() {
    let refConfirmacion = useRef();

    function muestraMensaje() {
        alert('¡La venta ha sido editada de forma exitosa!');
    }
  return (
    <>
      <title>Gestionar ventas</title>
      <NavBar />
      <br />
      <div className="container row">
        {/* Texto de inicio */}
        <div className="col-12 m-3  ps-5">
          <h1 className="text-center fs-1" id="texto_inicio">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gestión de ventas
          </h1>
        </div>
        {/* Columna de búqueda */}
        <div className="col-md-12 m-4">
          <form className="d-flex">
            <input
              className="form-control me-2 barra_busqueda"
              type="search"
              placeholder="Ingrese un ID de venta, nombre o C.C. del cliente"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary boton_buscar"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
        {/* Columna de  botón editar*/}
        <div className="col-12 mx-4">
          <button
            type="button"
            className="btn btn-outline-success boton_editar"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Editar
          </button>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Editar venta
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              {/* Formulario */}
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="inputIDVentas" className="form-label">
                      ID Venta
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="identificadorVID"
                      readOnly
                    />
                    <div className="form-text">
                      Este campo no es posible editar
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputFechaVenta" className="form-label">
                      Fecha de venta
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputIDProducto" className="form-label">
                      ID Producto
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPrecioUnitario" className="form-label">
                      Precio unitario
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputCantidad" className="form-label">
                      Cantidad
                    </label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputTotalVenta" className="form-label">
                      Valor total de la venta
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputCliente" className="form-label">
                      Nombre del cliente
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputCedula" className="form-label">
                      Cédula
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputVendedor" className="form-label">
                      Vendedor
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputEstado" className="form-label">
                      Estado de la venta
                    </label>
                    <br />
                    <select className="custom-select estado">
                      <option selected>Elija una opción</option>
                      <option value={1}>Proceso</option>
                      <option value={2}>Cancelada</option>
                      <option value={3}>Entregada</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-primary boton_formulario_2"
                  data-bs-toggle="collapse"
                  id="confirmacion"
                  ref={refConfirmacion}
                  onClick={muestraMensaje}
                >
                  Guardar cambios
                </button>
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
              <th scope="col">ID de venta</th>
              <th scope="col">Fecha de venta</th>
              <th scope="col">ID del producto</th>
              <th scope="col">Precio unitario</th>
              <th scope="col">Cantidad </th>
              <th scope="col">Valor total de la venta</th>
              <th scope="col">Nombre del cliente</th>
              <th scope="col">Cédula</th>
              <th scope="col">Vendedor</th>
              <th scope="col">Estado de la venta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">23123</th>
              <td>12/05/21</td>
              <td>A34</td>
              <td>30.000</td>
              <td>3</td>
              <td>90.000</td>
              <td>Juan Osorio</td>
              <td>7654342</td>
              <td>Luisa Ospina</td>
              <td>Entregado</td>
            </tr>
            <tr>
              <th scope="row">32312</th>
              <td>13/05/21</td>
              <td>A53</td>
              <td>20.000</td>
              <td>4</td>
              <td>80.000</td>
              <td>Lina Lopez</td>
              <td>2345667</td>
              <td>Luisa Ospina</td>
              <td>Cancelado</td>
            </tr>
            <tr>
              <th scope="row">24324</th>
              <td>12/03/21</td>
              <td>A45</td>
              <td>15.000</td>
              <td>5</td>
              <td>75.000</td>
              <td>Oscar Hernandez</td>
              <td>3456646</td>
              <td>Luisa Ospina</td>
              <td>En proceso</td>
            </tr>
            <tr>
              <th scope="row">32423</th>
              <td>12/02/21</td>
              <td>A23</td>
              <td>40.000</td>
              <td>6</td>
              <td>240.000</td>
              <td>Luis Ramírez</td>
              <td>6457645</td>
              <td>Carlos David</td>
              <td>Entregado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
