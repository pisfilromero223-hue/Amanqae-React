import { Link } from "react-router-dom";
import Header from '../components/Header';
import '../assets/css/Cultura.css';
import AgendaCultura from "../components/AgendaCultura";
import Talleres from "../components/Talleres";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";




function Cultura() {
  return (
    <>
      <Preloader />
      <Header />

      <section className="acerca-banner">
        <div className="container">
          <div className="content">
            <h1>NUESTRA CULTURA</h1>
            <p>
              <Link to="/">Inicio</Link>
              {" / "}
              <span>Cultura</span>
            </p>
          </div>
        </div>
      </section>

      <AgendaCultura />

      <Talleres />

      <Footer />


    </>

  );
}

export default Cultura;
