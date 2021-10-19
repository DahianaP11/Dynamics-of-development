import React from "react";
import { Link } from "react-router-dom";
import img from "../img/Imagenes-editadas/1.png";
import img3 from "../img/Imagenes-editadas/4.jpg";
import Footer from "./Foooter";

export default function inicio() {
  return (
    <>
      <title>Inicio | DOD</title>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src={img}
              className="d-block w-100"
              id="img_carru_1"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{color:"#000000", textDecoration: "none" }}>Registrar venta</h4>
              <Link style={{color:"#000000", textDecoration: "none" }} to="/Registro_Venta" id="link_reg_ventas">
                Ingrese aquí
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{}}
              src={img3}
              className="d-block w-100"
              id="img_carru_4"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{color:"#FFFFFF", textDecoration: "none"}}>Registrar producto</h4>
              <Link style={{color:"#FFFFFF", textDecoration: "none"}} to="/Registro_Productos" id="link_reg_pro">
                Ingrese aquí
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
