import "../stylesheets/proyecto.css"
import { Link } from "react-router-dom";

const Proyecto = (props) => {
    return<>
    <div className ="proyecto-img" href={props.linkDeploy}>
        <img src={props.img} alt="Imagen alusiva al proyecto"/>
        <div className="proyecto-card">
            <div className="proyecto-info">
                <h2>{props.nombre}</h2>
                <h4>{props.stack}</h4>
                <p>{props.descripcion}</p>
                <a target="_blank" href={props.linkRepo}>Repo: {props.linkRepo} </a>
            </div>
        </div>
    </div>
    
    </>

}

export default Proyecto;