import { useState } from "react";
import './Enfoque.css';

function Enfoque() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="background-dark-2 section-enfoque">
      <div className="contain">
        <div className="content">
          <span className="badge">NUESTRO ENFOQUE</span>

          <h2 className="title">
            Ofreciendo una experiencia <span>gastronomica memorable</span>
          </h2>

          {/* TABS */}
          <div className="container-tabs">
            <button
              className={`tab ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => setActiveTab("mission")}
            >
              Nuestra Misión
            </button>

            <button
              className={`tab ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              Nuestra Visión
            </button>

            <button
              className={`tab ${activeTab === "values" ? "active" : ""}`}
              onClick={() => setActiveTab("values")}
            >
              Nuestros Valores
            </button>
          </div>

          {/* ============================== */}
          {/* CONTENIDO MISIÓN */}
          {/* ============================== */}
          <div
            className={`container-blogs ${
              activeTab === "mission" ? "active" : ""
            }`}
          >
            <div className="container-dish">
              <div className="contenedor">
                <span className="badge">NUESTRA MISIÓN</span>

                <h2>
                  CREANDO MOMENTOS INOLVIDABLES A TRAVÉS{" "}
                  <span>& DEL SABOR</span>
                </h2>

                <p>
                  En Amanqae, nuestra misión es transformar la experiencia
                  gastronómica en un viaje sensorial único, conectando a las
                  personas con sabores auténticos elaborados con pasión.
                </p>

                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Ofrecer platillos exquisitos que despierten emociones y
                      recuerdos
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Fomentar un ambiente acogedor donde la comida une a las
                      personas
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>Priorizar la sostenibilidad y el apoyo a la cultura</span>
                  </li>
                </ul>
              </div>

              <div className="container-img">
                <img
                  src={'/Ideas-for-a-coffee-shop.jpg'}
                  alt="Imagen Mision"
                />
              </div>
            </div>
          </div>

          {/* ============================== */}
          {/* CONTENIDO VISIÓN */}
          {/* ============================== */}
          <div
            className={`container-blogs ${
              activeTab === "vision" ? "active" : ""
            }`}
          >
            <div className="container-dish">
              <div className="contenedor">
                <span className="badge">NUESTRA VISIÓN</span>

                <h2>
                  SER EL DESTINO CAFETERO MÁS <span>& APRECIADO</span>
                </h2>

                <p>
                  Aspiramos a ser un referente en la cocina de calidad,
                  expandiendo nuestra propuesta sin perder nuestra esencia.
                  Queremos que cada visita sea inolvidable.
                </p>

                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Innovar en la creación de sabores únicos y auténticos.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Expandir nuestra marca y compartir nuestra pasión por la
                      comida.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Brindar un servicio excepcional que haga sentir especial a
                      cada cliente.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="container-img">
                <img
                  src= {'/Table-Condition.jpg'}
                  alt="Imagen vision"
                />
              </div>
            </div>
          </div>

          {/* ============================== */}
          {/* CONTENIDO VALORES */}
          {/* ============================== */}
          <div
            className={`container-blogs ${
              activeTab === "values" ? "active" : ""
            }`}
          >
            <div className="container-dish">
              <div className="contenedor">
                <span className="badge">NUESTROS VALORES</span>

                <h2>
                  COMPROMISO, CALIDAD Y CULTURA POR{" "}
                  <span>LA GASTRONOMÍA</span>
                </h2>

                <p>
                  Creemos en una cocina con propósito, basada en valores que
                  garantizan calidad, compromiso y respeto por los ingredientes.
                </p>

                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Ofrecer platillos que despierten emociones y recuerdos.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Fomentar un ambiente acogedor donde la comida une a las
                      personas.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>Priorizar sostenibilidad y apoyo a la cultura.</span>
                  </li>
                </ul>
              </div>

              <div className="container-img">
                <img
                  src={'Cafetería-Vintage.jpg'}
                  alt="Imagen Valores"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Enfoque;
