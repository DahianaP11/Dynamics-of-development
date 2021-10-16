import React from 'react';
import logo from "../img/logo_DOD.png"

export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-dark navbar-expand-md pb-0 " style={{backgroundColor: '#3a0652c7'}}>
            <div className="container row  d-flex justify-content-md-between">
              {/* Logo */}
              <div className="col-md-1 ps-5 pb-2">
                <a href="#" type="button" className="navbar-brand pb-1"> <img src={logo} alt="Logo del sitio" width="80px" className="pbt-md-2 m-0" /></a>  
              </div>
              {/* Botón collapse en navegación por móvil*/}
              <div className="col-2 d-md-none">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu_principal" aria-controls="menu-principal" aria-expanded="false" aria-label="Desplegar menú de navegación"> 
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              {/* Lista: Menú */}
              <div className="col-md-12 ps-5 d-flex flex-md-row-reverse">
                <div className="collapse navbar-collapse" id="menu_principal">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active text-uppercase" href="index.html">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="reg_ventas.html">Registrar venta</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="mae_ventas.html">Gestionar de ventas</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="reg_productos.html">Registrar producto</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="maeProduct.html">Gestionar de productos</a></li>
                    <li className="nav-item"><a className="nav-link text-uppercase" href="interUsu.html">Maestro de usuario</a></li>
                  </ul>
                </div>
              </div>
              {/* Login */}
              <div className="col-md-1 d-flex justify-content-md-end ">
                <div className="dropdown border-start link_dropwdown" id="boton_dropdown">
                  {/* Login */}
                  <a className="btn btn btn-link dropdown-toggle menu_usuario" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    IDENTIFÍCATE
                  </a>
                  {/* Dropdown */}
                  <ul className="dropdown-menu">
                    <div className="google-btn">
                      <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                      </div>
                      <p className="btn-text">Iniciar con Google</p>
                    </div>
                    <li><hr className="dropdown-divider" /></li>
                    <div className="google-btn">
                      <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                      </div>
                      <p className="btn-text">Registro con Google</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div> {/* Fin del container*/}
          </nav>  {/* Fin de Navbar*/}
          </>
    )
}