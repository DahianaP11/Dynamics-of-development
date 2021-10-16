import NavBar from './NavBar';

export default function RegVentas(){
    <>
        <title>Registro de Ventas</title>
        <NavBar />
        {/* Titulo formulario y tabla*/}
          <div className="container-fluid">
            <h1 className="display-4" id="title">REGISTRAR VENTA</h1>
            <br />
            <div className="row">
              <div className="col-12">
                <form id="formulario">
                  <div className="form-group row">
                    <label htmlFor="identificador" className="col-sm-2 col-form-label">Identificador</label>
                    <div className="col-sm-3">
                      <input type="text" className="form-control input" id="identificadorP" readOnly />
                    </div>
                  </div>            
                  <div className="form-group row">
                    <label htmlFor="Cantidad" className="col-sm-2 col-form-label">Cantidad</label>
                    <div className="col-sm-4">
                      <input type="number" className="form-control" id="Cantidad" placeholder="Cantidad" min={1} />
                    </div>
                  </div>            
                  <div className="form-group row">
                    <label htmlFor="vunitario" className="col-sm-2 col-form-label">Valor Unitario</label>
                    <div className="col-sm-2">
                      <input type="currency" className="form-control" id="vunitario" placeholder="Valor unitario" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="vtVenta" className="col-sm-2 col-form-label">Valor total venta</label>
                    <div className="col-sm-4">
                      <input type="currency" className="form-control" id="vtVenta" placeholder="Valor total venta" onclick="vTotal()" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="fVenta" className="col-sm-2 col-form-label">Fecha venta</label>
                    <div className="col-sm-4">
                      <input type="date" className="form-control" id="fVenta" placeholder="Fecha venta" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="idCliente" className="col-sm-2 col-form-label">Identificacion cliente</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="idCliente" placeholder="Identificación cliente" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="nCliente" className="col-sm-2 col-form-label">Nombre cliente</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="nCliente" placeholder="Nombre cliente" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="vendedor" className="col-sm-2 col-form-label">Vendedor encargado</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="vendedor" placeholder="Vendedor encargado" />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-space" id="Registrarv">
                        Registrar venta
                      </button>
                      <button type="reset" className="btn btn-space" id="Borrar">
                        Borrar datos
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <br />
              <div className="col-12">
                {/*Tabla*/}
                <center><p className="h2">Ultimas ventas registradas</p></center><table className="table table-responsive" id="Table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Identificador</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Valor Unitario</th>
                      <th scope="col">Valor Total</th>
                      <th scope="col">Fecha venta</th>
                      <th scope="col">Identificación Cliente</th>
                      <th scope="col">Nombre Cliente</th>
                      <th scope="col">Vendedor encargado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>oHOBqxI6b</td>
                      <td>5</td>
                      <td>$35.000</td>
                      <td>$175.000</td>
                      <td>01/09/2021</td>
                      <td>1000256225</td>
                      <td>Joaquin Gonzalez</td>
                      <td>Lorena Hernandez</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td />
                      <td />
                      <td />
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
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*JS archivo personalizado*/}
          <footer>
            <img src="img/logo_DOD.png" width="60px"/>
            <p><center>Contactanos: ventasdod@dod.com</center></p>
          </footer>
          {/* Option 1: Bootstrap Bundle with Popper */}
        </>
}
