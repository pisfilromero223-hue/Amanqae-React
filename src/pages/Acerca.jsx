import Header from '../components/Header';
import '../assets/css/Acerca.css';
import { Link } from "react-router-dom";
import Enfoque from "../components/Enfoque";
import Footer from '../components/Footer';

function Acerca() {
    return (
        <>
            <Header />

            <section className="acerca-banner">
                <div className="container">
                    <div className="content">
                        <h1>SOBRE NOSOTROS</h1>
                        <p>
                            <Link to="/">Inicio</Link>
                            {" / "}
                            <span>Nosotros</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="background-dark-1 section-about">
                <div className="container">

                    <div className="container-images">
                        <img
                            src={'/bg-about-us.jpg'}
                            className="main-image"
                            alt="About us"
                        />

                        <img
                            src={'/chef-about-us.jpg'}
                            className="alt-image"
                            alt="Chef About"
                        />

                        <div className="card-info">
                            <i
                                className="fa-solid fa-dog"
                                style={{ color: "#f7f7f7" }}
                            ></i>
                            <h3>Somos Pet Friendly</h3>
                        </div>
                    </div>

                    <div className="content">
                        <span className="badge">Sobre Nosotros</span>

                        <h2 className="title">
                            NUESTRO COMPROMISO CON EL SABOR
                            <span>& LA CULTURA</span>
                        </h2>

                        <p>
                            Cada taza de café que servimos es una experiencia única,
                            preparada con pasión y dedicada a crear momentos inolvidables.
                            En Amanqae Café celebramos el encuentro entre el aroma del buen café,
                            el arte y la calidez de compartir.
                        </p>

                        <ul>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Café de especialidad, seleccionado de origen peruano</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Opciones artesanales y saludables para todos los gustos</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Un espacio cultural acogedor que inspira creatividad</span>
                            </li>
                        </ul>

                        <div className="container-buttons">
                            <a href="Carta.html" className="btn btn-primary">
                                Nuestra Carta <i className="fa-solid fa-arrow-right"></i>
                            </a>

                            <a href="Acerca.html" className="btn btn-secundary">
                                Conoce más <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <Enfoque />

            <section className="background-dark-1 section-empleados">
                <div className="container">
                    <div className="content">
                        <span className="badge">PREMIANDO LA EXCELENCIA</span>

                        <h2 className="title">
                            LAS MENTES TALENTOSAS DETRÁS DE CADA <span>MOMENTO INOLVIDABLE</span>
                        </h2>

                        <div className="grid-cards-empleados">

                            {/* Card 1 */}
                            <div className="card-emple background-emple-1">
                                <div className="info">
                                    <a href="#">
                                        <h3>Sofia Martinez</h3>
                                    </a>
                                    <p>Barista Ejecutiva</p>

                                    <div className="container-social">
                                        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="card-emple background-emple-2">
                                <div className="info">
                                    <a href="#">
                                        <h3>Astrid Guillen</h3>
                                    </a>
                                    <p>Ayudante Barista</p>

                                    <div className="container-social">
                                        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="card-emple background-emple-3">
                                <div className="info">
                                    <a href="#">
                                        <h3>Andres Romer</h3>
                                    </a>
                                    <p>Barista Profesional</p>

                                    <div className="container-social">
                                        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="card-emple background-emple-4">
                                <div className="info">
                                    <a href="#">
                                        <h3>Pamela Tafur</h3>
                                    </a>
                                    <p>Atención al cliente</p>

                                    <div className="container-social">
                                        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <p className="footer-content">
                            Conoce al apasionado equipo que da vida a cada sabor y experimenta la excelencia culinaria con nosotros.
                        </p>
                    </div>
                </div>
            </section>

            <section className="background-dark-2 section-cultura">
                <div className="container">
                    <div className="content">

                        <div className="escrito">
                            <span className="badge">La cultura nos importa</span>

                            <h2 className="title">
                                NUESTRO COMPROMISO CON LA EXPOSICIÓN <span>DE LA CULTURA</span>
                            </h2>

                            <p>
                                Amanqae Café y Cultura es un espacio donde el arte, la creatividad y la identidad peruana se encuentran.
                                Aquí se celebran exposiciones, talleres, presentaciones artísticas y encuentros comunitarios que buscan
                                revalorar nuestras raíces y construir cultura desde la colaboración.
                                Cada experiencia conecta a las personas con la historia, el talento local y el espíritu cultural del corazón de Lima.
                            </p>
                        </div>

                        <div className="container-images">
                            <img
                                src={'/cuadrooo12.jpg'}
                                alt="About us"
                                className="main-image"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />

        </>

    );
}

export default Acerca;
