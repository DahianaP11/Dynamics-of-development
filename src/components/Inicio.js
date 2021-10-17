import React from "react";
import img from "../img/Imagenes-editadas/1.png";
import img3 from "../img/Imagenes-editadas/4.jpg";
import "../css/estilos_home.css";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

export default function inicio() {
  return (
    <>
      {/* Estilos personalizadas CSS */}
      <title>Inicio | DOD</title>
      {/* Barra de navegación */}
      <NavBar />
      {/* Carrusel */}
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
              <h4>Registrar venta</h4>
              <a href="reg_ventas.html" id="link_reg_ventas">
                Ingrese aquí
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              id="img_carru_4"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "#ffffff" }}>Registrar producto</h4>
              <a href="reg_productos.html" id="link_reg_pro">
                Ingrese aquí
              </a>
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
