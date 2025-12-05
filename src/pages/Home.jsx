import Header from '../components/Header';
import Testimonials from "../components/Testimonials";
import '../assets/css/home.css';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Header />

      <section className="hero-banner">
        <div className="container">

          <div className="content">
            <span className="badge">Arte culinario</span>

            <h1>El arte de disfrutar el café</h1>

            <p>
              Un espacio donde los aromas, los sabores y
              las ideas se encuentran. Conecta con la
              cultura y déjate inspirar por un ambiente
              único diseñado para ti.
            </p>

            <div className="container-button">
              <a href="Contacto.html#formulario-reserva" className="btn btn-primary">
                Reserva una mesa
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="container-images">
            <img
              src={'/hero-banner-main.jpg'}
              alt="Hero Banner"
              className="main-image"
            />
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

      <section className="background-dark-2 section-main-dishes">
        <div className="container">
          <div className="content">

            <span className="badge">
              Delicias Principales
            </span>

            <h2 className="title">
              DESCUBRE LOS SABORES ÚNICOS DE AMANQAE
              <span>    CAFÉS Y DELICIAS QUE INSPIRAN MOMENTOS INOLVIDABLES</span>
            </h2>

            <div className="container-dishes">

              {/* 1 */}
              <div className="container-dish">
                <img src={'/main-dish-1.jpg'} alt="Dish 1" />
                <div className="dish-info">
                  <h3>Café de Especialidad</h3>
                  <p>
                    Aromas intensos y sabores únicos
                    en cada taza, preparados
                    con granos seleccionados del Perú.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="container-dish">
                <img src={'/main-dish-2.jpg'} alt="Dish 2" />
                <div className="dish-info">
                  <h3>Postres Artesanales</h3>
                  <p>
                    Dulces preparados con pasión
                    que acompañan a la perfección
                    tu café favorito.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="container-dish">
                <img src={'/main-dish-3.jpg'} alt="Dish 3" />
                <div className="dish-info">
                  <h3>Bebidas Especiales</h3>
                  <p>
                    Infusiones, lattes y
                    combinaciones creativas que
                    sorprenden a tu paladar.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className="container-dish">
                <img src={'/main-dish-4.jpg'} alt="Dish 4" />
                <div className="dish-info">
                  <h3>Snacks y Bocaditos</h3>
                  <p>
                    Opciones ligeras, frescas
                    y sabrosas para disfrutar en
                    cualquier momento del día.
                  </p>
                </div>
              </div>

            </div>

            <p className="dish-link">
              ¿Tienes antojo de algo inigualable?
              <a href="Carta.html">¡ Mira toda nuestra carta !</a>
            </p>

          </div>
        </div>
      </section>

      <section className="section background-dark-1 section-our-ingredients">
        <div className="container">
          <div className="container-images">
            <img
              src={'/chef-our-ingredients.png'}
              alt="Our ingredients"
              className="main-image"
            />

            <div className="card-customers">
              <p>620+ Clientes sastifechos</p>

              <div className="images-customers">
                <img src={'/customer-1.jpg'} alt="Customer 1" />
                <img src={'/customer-2.jpg'} alt="Customer 2" />
                <img src={'/customer-3.jpg'} alt="Customer 3" />
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="content">
            <span className="badge">Nuestros Ingredientes</span>

            <h2 className="title">
              Elaborando cafés y delicias con Sabores Frescos
            </h2>

            <p>
              En nuestra cafetería, nos enorgullecemos de ofrecer cafés de especialidad
              y postres preparados con ingredientes frescos y seleccionados con cuidado.
              Cada taza y cada bocado transmiten la pasión por lo natural y lo auténtico,
              sin conservantes ni aditivos artificiales. Ven y disfruta de la diferencia en
              cada sorbo, mientras compartes momentos únicos en un ambiente acogedor.
            </p>

            <div className="container-options">
              <div className="container-option">
                <i className="fa-solid fa-face-grin-stars"></i>
                <h3>Las mejores cualidades</h3>
              </div>

              <div className="container-option">
                <i className="fa-solid fa-tags"></i>
                <h3>Grandes Promociones</h3>
              </div>

              <div className="container-option">
                <i className="fa-solid fa-dove"></i>
                <h3>Cultura de primera</h3>
              </div>
            </div>

            <div className="container-button">
              <a
                href="Contacto.html#formulario-reserva"
                className="btn btn-primary"
              >
                Reserva una mesa
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="background-dark-1 section-blog">
        <div className="container">
          <div className="content">

            <span className="badge">Referentes de la cultura</span>

            <h2 className="title">
              Descubre Nuestros Talleres y <span>Cultura</span>
            </h2>

            <div className="container-blogs">

              {/* 1 */}
              <div className="container-blog">
                <a href="#" className="container-img">
                  <figure>
                    <img
                      src={'/blog-image-1.jpg'}
                      alt="Post 1"
                    />
                  </figure>
                </a>

                <div className="blog-info">
                  <h3>
                    <a href="Cultura.html">
                      Conoce sobre nuestro taller de acurela
                    </a>
                  </h3>

                  <div className="container-button">
                    <a href="Cultura.html" className="btn-read-more">
                      Leer mas
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="container-blog">
                <a href="Cultura.html" className="container-img">
                  <figure>
                    <img
                      src={'/blog-image-2.jpg'}
                      alt="Post 2"
                    />
                  </figure>
                </a>

                <div className="blog-info">
                  <h3>
                    <a href="Cultura.html">
                      Taller de Pintura libre
                    </a>
                  </h3>

                  <div className="container-button">
                    <a href="Cultura.html" className="btn-read-more">
                      Leer mas
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="container-blog">
                <a href="Cultura.html" className="container-img">
                  <figure>
                    <img
                      src={'/blog-image-3.jpg'}
                      alt="Post 3"
                    />
                  </figure>
                </a>

                <div className="blog-info">
                  <h3>
                    <a href="Cultura.html">
                      Conoce mas sobre nuestro talleres y exposiciones
                    </a>
                  </h3>

                  <div className="container-button">
                    <a href="Cultura.html" className="btn-read-more">
                      Leer mas
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
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

export default Home;
