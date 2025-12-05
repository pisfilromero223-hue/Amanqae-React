import { Link } from "react-router-dom";
import Header from '../components/Header';
import '../assets/css/carta.css';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";


function Carta() {
  return (

    <>
      <Preloader />
      < Header />
      <section className="acerca-banner">
        <div className="container">
          <div className="content">
            <h1>NUESTRA CARTA</h1>
            <p>
              <Link to="/">Inicio</Link>
              {" / "}
              <span>Carta</span>
            </p>
          </div>
        </div>
      </section>
      <section className="background-dark-1 section-carta">
        <div className="container">
          <div className="content">
            <div className="section-wraper">
              <span className="badge">Nuestro encanto</span>

              <h2 className="title">NUESTRA CARTA</h2>

              <hr />

              <p>
                Cafés, bebidas calientes y frías, sánguches, ensaladas, pasteles,
                postres y mucho más.
              </p>

              <div className="contenedor-carta">

                {/* CARD 1 */}
                <div className="carta-images-container">
                  <img
                    src='/main-dish-1.jpg'
                    alt="Cafés y bebidas"
                  />
                  <div className="carta-info">
                    <h3>Cafés y bebidas</h3>
                    <a
                      href="https://drive.google.com/file/d/1mIECbqma7iZGVoxiwX1fXPm-kKBVU3gU/view"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver nuestra carta
                    </a>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="carta-images-container">
                  <img
                    src='/main-dish-4.jpg'
                    alt="Sánguches y ensaladas"
                  />
                  <div className="carta-info">
                    <h3>Sánguches y Ensaladas</h3>
                    <a
                      href="https://drive.google.com/file/d/1mIECbqma7iZGVoxiwX1fXPm-kKBVU3gU/view"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver nuestra carta
                    </a>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="carta-images-container">
                  <img src='/main-dish-2.jpg' alt="Postres" />
                  <div className="carta-info">
                    <h3>Postres</h3>
                    <a
                      href="https://drive.google.com/file/d/1mIECbqma7iZGVoxiwX1fXPm-kKBVU3gU/view"
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver nuestra carta
                    </a>
                  </div>
                </div>

              </div>

              {/* BOTÓN INFERIOR */}
              <div className="boton-centro">
                <a
                  href="https://drive.google.com/file/d/1mIECbqma7iZGVoxiwX1fXPm-kKBVU3gU/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carta-boton-inferior"
                >
                  Ver nuestra carta
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <BookingForm />
      <Footer />


    </>
  );
}

export default Carta;
