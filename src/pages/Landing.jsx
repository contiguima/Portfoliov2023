import Navbar from "../components/Navbar";
import Proyecto from "../components/Proyecto";
import Certificacion from "../components/Certificacion";
import Footer from "../components/Footer";
import profilepic from "../archivos/imagenes/php.jpg";
import htmlLogo from "../archivos/logos/html.png";
import cssLogo from "../archivos/logos/css.png";
import jsLogo from "../archivos/logos/js.png";
import reactLogo from "../archivos/logos/react.png";
import matlabLogo from "../archivos/logos/matlab.png";
import excelLogo from "../archivos/logos/excel.png";
import latexLogo from "../archivos/logos/latex.png";
import twitterLogo from "../archivos/logos/twitter.png";
import linkedinLogo from "../archivos/logos/linkedin.png";
import gmailLogo from "../archivos/logos/mail.png";
import githubLogo from "../archivos/logos/github.png";
import Slider from "../components/Slider";

const Landing = () => {
  const proyectosArr = [
    <Proyecto
      nombre="Vita"
      stack="React - Firebase"
      texto="MVP web que busca conectar pacientes y médicos y unificar espacio de consultas, historia clínica y sistema de turnos"
      repo="https://github.com/contiguima/Vita"
      deploy="https://vitaditella.netlify.app/"
      imagen="https://i.pinimg.com/564x/d3/7a/c0/d37ac005bf1bbb1f9952c5ad71272533.jpg"
    />,
    <Proyecto
      nombre="Calculadora masa molar"
      stack="HTML- CSS - JavaScript"
      texto="Web para calcular la masa molar de compuestos químicos. "
      repo="https://github.com/contiguima/MasaMolecular"
      deploy="https://calculadoraquimica.netlify.app/"
      imagen="https://i.pinimg.com/564x/89/d7/a6/89d7a67c21670110ecab1d82793d7be6.jpg"
    />,
    <Proyecto
      nombre="LegalVerse"
      stack="React - Firebase"
      texto="Web que conecta abogados y clientes. Landing page y análisis de documentos"
      repo="https://github.com/contiguima/LegalVerseVf"
      deploy="https://legalverse.ar/"
      imagen="https://i.pinimg.com/564x/78/4e/b0/784eb01df305e91f1eecccab2581627d.jpg"
    />,
  ];
  return (
    <>
      <Navbar />
      <section className="presentacion">
        <div className="presentacion-img">
          <img src={profilepic} alt="Imagen de Constanza Guimaraez" />
        </div>
        <div className="presentacion-texto">
          <h1>Constanza Guimaraez</h1>
          <h2>INGENIERÍA QUÍMICA & DESARROLLO DE SOFTWARE</h2>
          <p>
            ¡Hola! Soy Constanza. Estudio Ingeniería Química pero también hago
            desarrollo IT. Estoy buscando construir mi carrera profesional en la
            intersección de estos mundos, trabajando en proyectos que utilicen
            la tecnología para optimizar procesos, mejorar la calidad de vida de
            las personas y construir un mundo más sustentable. Por esto, tengo
            un gran interés en la biotecnología porque es el área que engloba
            mis dos pasiones. Además, estoy interesada en la investigación
            científica y en colaborar en proyectos que contribuyan al avance del
            conocimiento en esta área.
          </p>
        </div>
      </section>

      <section className="why">
        <h1> Pero... ¿por qué estos campos?</h1>
        <p>
          Desde muy chica me interesó la ciencia y entender cómo funcionan las
          cosas. Me declaré la primera ambientalista a los 7 años con un
          proyecto escolar para concientizar sobre la importancia de recoger los
          papeles del suelo. Después, me convertí en lectora de etiquetas
          profesional: alimentos, perfumes, productos de limpieza; quería saber
          qué tenía cada cosa y por qué. Más adelante, me empezó a intrigar el
          funcionamiento de las máquinas y, en particular, de las aplicaciones y
          sitios web que fueron protagonistas de mi adolescencia. A la hora de
          elegir qué estudiar, no sabía muy bien a qué lado inclinarme, ya que
          seguía apasionándome por la ciencia, el cuidado ambiental y el
          conocimiento informático. Más tarde, noté que no tenía por qué escoger
          solo una y descartar las otras: el mundo de la biotecnología está en
          su auge y, a mi parecer, es la forma de encontrar un equilibrio entre
          el avance tecnológico y el cuidado ambiental, que muchas veces se ven
          como opuestos.
        </p>
      </section>

      <section className="proyectos" id="proyectos">
        <h1>Últimos proyectos</h1>
        <Slider proyectos={proyectosArr} />
      </section>

      <section className="educacion" id="educacion">
        <div className="educacion-facultad">
          <h1> Educacion </h1>
          <h2>INGENIERÍA QUÍMICA</h2>
          <h3>Universidad Nacional de Misiones - 2021 a 2025 </h3>
          <p>
            Orientación en Biotecnología. Actualmente cursando tercer año, con
            el 30% de las materias de la carrera aprobadas. Dentro de mis
            actividades en la facultad, pertenezco a un grupo de invesgación del
            Laboratorio de Materiales, donde se evalúan las propiedades
            físico-químicas de moléculas, alimentos, plásticos y otros para ser
            utilizados en envases, bolsas y diversos materiales. También formo
            parte de la Asociación Misionera de Estudiantes de Ingeniería
            Química (AMEIQ)
          </p>
        </div>
        <div className="educacion-certificaciones">
          <h1>Certificaciones</h1>
          <Certificacion
            nombre="Curso1"
            empresa_fecha="Google - agosto 2022"
            descripcion="Aprendi sobre HTML"
          />
        </div>

        <div className="educacion-idiomas">
          <h2>IDIOMAS</h2>
          <ul>
            <li>Español - Nativo</li>
            <li> Inglés - Nivel C1 </li>
            <li> Francés & Portugués - Nivel A2</li>
          </ul>
        </div>
      </section>

      <section className="stack" id="stack">
        <h1>Stack</h1>

        <h2>Desarrollo de software</h2>
        <div className="stack-img-container">
          <img src={htmlLogo} alt="html,logo" />
          <img src={cssLogo} alt="css, logo" />
          <img src={jsLogo} alt="javascript, logo" />
          <img src={reactLogo} alt="react, logo" />
        </div>

        <h2>Ciencia e investigación</h2>
        <div className="stack-img-container">
          <img src={matlabLogo} alt="matlab, logo" />
          <img src={excelLogo} alt="excel, logo" />
          <img src={latexLogo} alt="latex, logo" />
        </div>
      </section>
      <section className="experiencia" id="experiencia">
        <h1>Experiencia</h1>
      </section>

      <section className="contacto" id="contacto">
        <h1>Contacto</h1>
        <div className="contacto-img-container">
          <a
            href="mailto:contiguima@gmail.com?subject=Contacto via Portfolio&body=Hola Constanza!"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailLogo} alt="gmail,logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/constanza-guimaraez-277939209/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="linkedin, logo" />
          </a>
          <a
            href="https://github.com/contiguima"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="github, logo" />
          </a>
          <a
            href="https://twitter.com/@contiguima28"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="twitter, logo" />
          </a>
        </div>
        <button>Descargar CV</button>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
