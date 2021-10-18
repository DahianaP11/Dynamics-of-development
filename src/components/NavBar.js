import React from "react";
import logo from "../img/logo_DOD.png";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";  

// Ejemplo Robert OAuth

const googleClientId =
  "619306150699-or6k1h4b1r3r76ccmvq8p4o1m16cap00.apps.googleusercontent.com";

const loadGoogleScript = () => {
  (function () {
    const id = "google-js";
    const src = "https://apis.google.com/js/platform.js";

    const firstJs = document.getElementsByTagName("script")[0];

    if (document.getElementById(id)) {
      return;
    }
    const js = document.createElement("script");
    js.id = id;
    js.src = src;
    js.onload = window.onGoogleScriptLoad;
    firstJs.parentNode.insertBefore(js, firstJs);
  })();
};

export default function NavBar() {
  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState();

  const onSuccess = (googleUser) => {
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
  };

  const onFailure = () => {
    setIsLoggedIn(false);
  };

  const logOut = () => {
    (async () => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };

  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render("google.signin", {
      scope: "Profile Email",
      width: 240,
      height: 50,
      logintitle: true,
      theme: "dark",
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  };

  useEffect(() => {
    window.onGoogleScriptLoad = () => {
      const _gapi = window.gapi;
      setGapi(_gapi);

      _gapi.load("auth2", () => {
        (async () => {
          const _googleAuth = await _gapi.auth2.init({
            client_id: googleClientId,
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    };

    loadGoogleScript();
  }, []);

  // Fin ejemplo OAuth

  return (
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
              className="dropdown border-start link_dropwdown"
              id="boton_dropdown"
            >
              {/* Login */}
              <a
                className="btn btn btn-link dropdown-toggle menu_usuario"
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
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p className="btn-text">Iniciar con Google</p>
                </div>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {!isLoggedIn && (
                  <div className="google-signin google-btn">
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      />
                    </div>
                    <p className="btn-text">Registro con Google</p>
                  </div>
                )}
                {/* //Agregado segun ejemplo de Robert */}
                {isLoggedIn && (
                  <div>
                    <div>
                      <img src={imageUrl} />
                    </div>
                    <div>{name}</div>
                    <div>{email}</div>
                    <button className="btn btn-primary" onClick={logOut}>
                      Log out
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* Fin del container*/}
      </nav>{" "}
      {/* Fin de Navbar*/}
    </>
  );
}
