import { useState, useEffect, useRef } from "react";
import "./Testimonial.css"; 

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      text: `Una experiencia cafetera única. Desde la entrada
             hasta el postre, todo estuvo exquisito. El ambiente
             acogedor y la atención del personal hicieron que
             nuestra cena fuera inolvidable.`,
      img: '/customer-1.jpg',
      name: "Carlos Perez",
    },
    {
      text: `El mejor lugar para disfrutar de una comida espectacular.
             La combinación de sabores y la frescura de los ingredientes
             se nota en cada plato. Además, el servicio es impecable
             y te hacen sentir como en casa.`,
      img: '/customer-2.jpg',
      name: "Thiago Andre",
    },
    {
      text: `Nos sorprendió la creatividad en la presentación de los platos y
             la calidad de los ingredientes. Sin duda, un sitio al que queremos
             regresar muy pronto.`,
      img: '/customer-3.jpg',
      name: "Janet Ore",
    },
  ];

  const total = testimonials.length;

  // actualiza el scroll del contenedor cuando cambia currentIndex
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const width = el.clientWidth;
    el.scrollTo({
      left: currentIndex * width,
      behavior: "smooth",
    });
  }, [currentIndex]);

  // autoplay: arranca y limpia el intervalo
  useEffect(() => {
    // start autoplay
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [total]);

  // funciones de control
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    resetAutoPlay();
  };

  // reiniciar autoplay (clear + start)
  const resetAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
  };

  return (
    <section className="section-testimonials">
      <div className="container">
        <div className="content">
          <span className="badge">Testimonios</span>

          <h2 className="title">
            Historias reales de amor y <span>experiencias memorables</span>
          </h2>

          <div className="carousel-wrapper">
            <div className="container-testimonials" ref={containerRef}>
              {testimonials.map((t, index) => (
                <div className="testimonial" key={index}>
                  <img
                    src={'quote.svg'}
                    alt="Icono Quote"
                    className="quote-icon"
                  />

                  <p>{t.text}</p>

                  <figure>
                    <img src={t.img} alt={`Testimonio ${index + 1}`} />
                  </figure>

                  <h3>{t.name}</h3>
                </div>
              ))}
            </div>

            <button type="button" className="btn-carousel btn-prev" onClick={prevSlide}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button type="button" className="btn-carousel btn-next" onClick={nextSlide}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
