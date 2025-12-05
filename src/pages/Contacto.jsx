import { Link } from "react-router-dom";
import Header from '../components/Header';
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

function Contacto() {
  return (

    <>
      <Header />

      <section className="acerca-banner">
        <div className="container">
          <div className="content">
            <h1>CONTACTANOS</h1>
            <p>
              <Link to="/">Inicio</Link>
              {" / "}
              <span>Contacto</span>
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <ContactMap />
      <BookingForm />
      <Footer />

    </>
  );
}

export default Contacto;
