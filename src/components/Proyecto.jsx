
const Proyecto = (props) => {
    return<>
    <div className="proyecto-card">
        <div className ="proyecto-img">
            <div className="proyecto-info">
                <h2>{props.nombre}</h2>
                <h4>{props.stack}</h4>
                <p>{props.descripcion}</p>
                <a href={props.link}>Repo: {props.link} </a>
            </div>
        </div>
    </div>
    
    </>

}

export default Proyecto;