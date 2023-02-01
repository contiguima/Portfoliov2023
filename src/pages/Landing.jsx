import Navbar from "../components/Navbar";
import Proyecto from "../components/Proyecto";
import Certificacion from "../components/Certificacion";
import Footer from "../components/Footer";

const Landing = () => {
    return <>
        <Navbar/>
        <section className= "presentacion">
            <div className = "presentacion-img"></div>
            <div className="presentacion-texto">
                <h1>Constanza Guimaraez</h1>
                <h2>INGENIERÍA QUÍMICA & DESARROLLO DE SOFTWARE</h2>
                <p>¡Hola! Soy Constanza. Estudio Ingeniería Química pero también hago desarrollo IT. Estoy buscando construir mi carrera profesional en la intersección de estos mundos, trabajando en proyectos que utilicen la tecnología para optimizar procesos, mejorar la calidad de vida de las personas y construir un mundo más sustentable. Por esto, tengo un gran interés en la biotecnología, el área que engloba mis dos pasiones. Además, estoy interesada en la investigación científica y en colaborar en proyectos que contribuyan al avance de conocimiento en esta área</p>
            </div>
        </section> 

        <section className="why">
            <h1> Pero... ¿por qué estos campos?</h1>
            <p>Desde muy chica me interesó la ciencia y entender como funcionan las cosas. Me declaré la primera ambientalista a los siete años con un proyecto escolar para concientizar sobre la importancia de recoger los papeles del suelo. Después, me convertí en lectora de etiquetas profesional: alimentos, perfumes, productos de limpieza; quería saber qué tenía cada cosa y por qué. Más adelante, me empezó a intrigar el funcionamiento de las máquinas y, en particular, de las aplicaciones y sitios webs que fueron protagonistas de mi adolescencia. A la hora de elegir que estudiar, no sabía muy bien a que lado inclinarme, ya que seguía apasionándome por la ciencia, el cuidado ambiental y el conocimiento informático. Más adelantr, noté que no tenía por qué escoger solo una y descartar las otras: el mundo de la biotecnología está en su auge y, a mi parecer, es la forma de encontrar un equilibrio entre el avance tecnológico, la biología y el cuidado ambiental, que muchas veces se ven como opuestos. </p>
        </section>

        <section className="proyectos" id="proyectos">
            <h1>Últimos proyectos</h1>
            <div className="proyectos-carrusel">
                <Proyecto
                    nombre= "Proyecto.Ejemplo"
                    stack = "HTML - CSS"
                    descripcion = "Este es un texto corto que contiene el proyecto"
                    link = "www.github.com"
                    />
            </div>
        </section>
        
        <section className="educacion" id="educacion">
            <h1> Educacion </h1>
            <div className="educacion-facultad">
                <h2>INGENIERÍA QUÍMICA</h2>
                <h3>Universidad Nacional de Misiones - 2021 a 2025 </h3>
                <p>Orientación en Biotecnología. Actualmente cursando tercer año, con el 30% de las materias de la carrera aprobadas. Dentro de mis actividades en la facultad, pertenezco a un grupo de invesgación del Laboratorio de Materiales, donde se evalúan las propiedades físico-químicas de moléculas, alimentos, plásticos y otros para ser utilizados en envases, bolsas y diversos materiales. También formo parte de la Asociación Misionera de Estudiantes de Ingeniería Química (AMEIQ)</p>
            </div>
            <div className="educacion-certificaciones">
                <h1>Certificaciones</h1>
                <Certificacion
                    nombre="Curso1"
                    empresa_fecha= "Google - agosto 2022"
                    descripcion = "Aprendi sobre HTML"/>

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
        </section>

        <section className="contacto" id="contacto">
            <h1>Contacto</h1>
            <button>Descargar CV</button>
        </section>

        <Footer/>
        </>

}

export default Landing;