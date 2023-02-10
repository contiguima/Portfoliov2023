import React from "react";
import "../stylesheets/proyecto.css";

function Proyecto(props) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.imagen})` }}
      />
      <div className="card-text">
        <h2>{props.nombre}</h2>
        <p>{props.stack}</p>
        <p>{props.texto}</p>
        <p><a href={props.repo}>Ver Repositorio</a> | <a href={props.deploy}>Ver Deploy</a></p>
      </div>
    </div>
  );
}

export default Proyecto;
