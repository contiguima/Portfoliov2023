
const Certificacion  = (props) => {
    return<>
    <div className="certificacion-card">
    <h2>{props.nombre}</h2>
    <h3>{props.empresa_fecha}</h3>
    <p>{props.descripcion}</p>
    </div>
    </>
}

export default Certificacion;