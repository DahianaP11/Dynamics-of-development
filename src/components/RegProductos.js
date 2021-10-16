import {useRef} from "react";
import "../css/regproduc.css";
import NavBar from "./NavBar";

export default function RegProductos(){
    let refRegistrar = useRef(),
        refIdentificadorP = useRef()

    function MuestraMensaje() {
        alert('Se ha registrado el producto exitosamente');
    };

    function makeid(){   
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 9; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));      
        };      
            return result;
    };
    return(
        <>
          <NavBar />
          <title>Registro de Productos</title>
          {/* Titulo formulario y tabla*/}
          <div className="container-fluid">
            <h1 className="display-4" id="title">REGISTRO DE PRODUCTOS</h1>
            <br /><br />
            <div className="row">
              <div className="col-6">
                <form id="formulario">
                  <div className="form-group row">
                    <label htmlFor="identificador" className="col-sm-2 col-form-label">Identificador</label>
                    <div className="col-sm-3">
                      <input type="text" className="form-control input" id="identificadorP" ref={refIdentificadorP} value={makeid()} readOnly />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label htmlFor="Descripcion" className="col-sm-2 col-form-label">Descripción</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="descripcion" placeholder="Descripción" />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label htmlFor="vunitario" className="col-sm-2 col-form-label">Valor Unitario</label>
                    <div className="col-sm-2">
                      <input type="input" className="form-control" id="vunitario" placeholder="Valor unitario" />
                    </div>
                  </div>
                <br />
                <div className="form-group row">
                    <div className="col-sm-2">Estado</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">Disponible</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">No Disponible</label>
                            </div>
                    </div>
                </div>
                  <br />
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-space" id="Registrar" ref={refRegistrar} onClick={MuestraMensaje}>
                        Registrar producto
                      </button>
                      <button type="reset" className="btn btn-space" id="Borrar">
                        Borrar datos
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-6">
                {/*Tabla*/}
                <center><p className="h2">Ultimos productos registrados</p></center><table className="table table-responsive" id="Table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Identificador</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Valor Unitario</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>oHOBqxI6b</td>
                      <td>Cuido para perros Dogchow</td>
                      <td>35.000</td>
                      <td>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
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
                    </tr>
                    <tr>
                      <th scope="row">4</th>
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
    )
}