import { useRef, useState } from "react";
import MakeID from "./MakeID";
import "../AppCss.css";

export default function RegProductos() {
  const [form, setForm] = useState({});
  let refRegistrar = useRef(),
    refIdentificadorP = useRef();

  function MuestraMensaje() {
    alert("Se ha registrado el producto exitosamente");
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <title>Registro de Productos</title>
      {/* Titulo formulario y tabla*/}
      <div className="container-fluid">
        <h1 className="display-4" id="c-title">
          REGISTRO DE PRODUCTOS
        </h1>
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <form id="c-formulario">
              <div className="form-group row">
                <label
                  htmlFor="identificador"
                  className="col-sm-2 col-form-label"
                >
                  Identificador
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control input"
                    id="c-identificadorP"
                    ref={refIdentificadorP}
                    value={MakeID()}
                    readOnly
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label
                  htmlFor="Descripcion"
                  className="col-sm-2 col-form-label"
                >
                  Descripción
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="c-descripcion"
                    placeholder="Descripción"
                    name="descripcion"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label htmlFor="vunitario" className="col-sm-2 col-form-label">
                  Valor Unitario
                </label>
                <div className="col-sm-2">
                  <input
                    type="input"
                    className="form-control"
                    id="c-vunitario"
                    placeholder="Valor unitario"
                    name="vunitario"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="col-sm-2">Estado</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Disponibilidad"
                      id="c-flexRadioDefault1"
                      value="disponible"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Disponible
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Disponibilidad"
                      id="c-flexRadioDefault2"
                      value="nodisponible"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      No Disponible
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-space"
                    id="c-Registrar"
                    ref={refRegistrar}
                    onClick={MuestraMensaje}
                  >
                    Registrar producto
                  </button>
                  <button type="reset" className="btn btn-space" id="c-Borrar">
                    Borrar datos
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-6">
            {/*Tabla*/}
            <center>
              <p className="h2">Ultimos productos registrados</p>
            </center>
            <table className="table table-responsive" id="c-Table">
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
  );
}
