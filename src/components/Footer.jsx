import "../stylesheets/footer.css";
const Footer = () => {
  return (
    <>
      <div className="ftr">
        <ul>
          <li>
            <a href="#proyectos"> Proyectos</a>
          </li>
          <li>
            {" "}
            <a href="#educacion"> Educación </a>
          </li>
          <li>
            <a href="#stack"> Stack</a>
          </li>
          <li>
            <a href="#contacto"> Contacto</a>
          </li>
        </ul>
        <p> Constanza Guimaraez - 2023 </p>
      </div>
    </>
  );
};

export default Footer;
