import React,{useState} from "react";
import logo from "../img/logo_DOD.png";
import {Link} from "react-router-dom"; 
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function NavBar() {
  const clientId = "63877292622-c1t5d3kgagvsbk5injdro5qjcii408se.apps.googleusercontent.com";
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [logins, setLogins] = useState(false);

  const onLoginSuccess = (res) => {
      console.log('Inicio de sesión correcto:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
      setLogins(true);
      process.env.REACT_APP_LOGIN ="true";
  };

  const onLoginFailure = (res) => {
      console.log('Falló el inicio de sesión:', res);
  };

  const onSignoutSuccess = () => {
      alert("Cerraste sesión correctamente ^^");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
      setLogins(false);
      process.env.REACT_APP_LOGIN = "false";
  };
  return (
    <>
      {!logins ? (
      <>      
      <nav
        className="navbar navbar-dark navbar-expand-md pb-0 "
        style={{ backgroundColor: "#3a0652c7" }}
      >
        <div className="container row  d-flex justify-content-md-between">
          {/* Logo */}
          <div className="col-md-1 ps-5 pb-2">
            <Link to="/" type="button" className="navbar-brand pb-1">
              {" "}
              <img
                src={logo}
                alt="Logo del sitio"
                width="80px"
                className="pbt-md-2 m-0"
              />
            </Link>
          </div>
          {/* Botón collapse en navegación por móvil*/}
          <div className="col-2 d-md-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu_principal"
              aria-controls="menu-principal"
              aria-expanded="false"
              aria-label="Desplegar menú de navegación"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          {/* Lista: Menú */}
          <div className="col-md-10 ps-5 d-flex flex-md-row-reverse">
            <div className="collapse navbar-collapse" id="menu_principal">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-uppercase"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Login */}
          <div className="col-md-2 d-flex justify-content-md-end ">
            <div
              className="dropdown border-start link_dropwdown"
              id="boton_dropdown"
            >
              {/* Login */}
              <a
                className="btn btn btn-link dropdown-toggle a-menu_usuario"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                IDENTIFÍCATE
              </a>
              {/* Dropdown */}
              <ul className="dropdown-menu">
                { showloginButton ?
                  <GoogleLogin
                      clientId={clientId}
                      buttonText="Iniciar Sesión"
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                      className="g-signin"
                  /> : null}

              { showlogoutButton ?
                  <GoogleLogout
                      clientId={clientId}
                      buttonText="Cerrar Sesión"
                      onLogoutSuccess={onSignoutSuccess}
                      className="g-signin"
                  >
                  </GoogleLogout> : null
              }
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>):(
      <>
      <nav
        className="navbar navbar-dark navbar-expand-md pb-0 "
        style={{ backgroundColor: "#3a0652c7" }}
      >
        <div className="container row  d-flex justify-content-md-between">
          {/* Logo */}
          <div className="col-md-1 ps-5 pb-2">
            <Link to="/" type="button" className="navbar-brand pb-1">
              {" "}
              <img
                src={logo}
                alt="Logo del sitio"
                width="80px"
                className="pbt-md-2 m-0"
              />
            </Link>
          </div>
          {/* Botón collapse en navegación por móvil*/}
          <div className="col-2 d-md-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu_principal"
              aria-controls="menu-principal"
              aria-expanded="false"
              aria-label="Desplegar menú de navegación"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          {/* Lista: Menú */}
          <div className="col-md-10 ps-5 d-flex flex-md-row-reverse">
            <div className="collapse navbar-collapse" id="menu_principal">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-uppercase"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/Registro_Venta">
                    Registrar venta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/Maestro_Ventas">
                    Gestionar de ventas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase"
                    to="/Registro_Productos"
                  >
                    Registrar producto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/Maestro_Productos">
                    Gestionar de productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/Maestro_Usuario">
                    Maestro de usuario
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Login */}
          <div className="col-md-2 d-flex justify-content-md-end ">
            <div
              className="dropdown link_dropwdown border-start"
              id="boton_dropdown"
            >
              {/* Login */}
              <a
                className="btn btn btn-link dropdown-toggle a-menu_usuario"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-alt" id="a-icono_usuario"></i>
              </a>
              {/* Dropdown */}
              <ul className="dropdown-menu">
                { showloginButton ?
                  <GoogleLogin
                      clientId={clientId}
                      buttonText="Iniciar Sesión"
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                      className="g-signin"
                  /> : null}

              { showlogoutButton ?
                  <GoogleLogout
                      clientId={clientId}
                      buttonText="Cerrar Sesión"
                      onLogoutSuccess={onSignoutSuccess}
                      className="g-signin"
                  >
                  </GoogleLogout> : null
              }
              </ul>
            </div>
          </div>
        </div>
      </nav></>)}

    </>
  );
}
