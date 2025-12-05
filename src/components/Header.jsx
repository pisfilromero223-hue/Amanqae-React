import { useEffect } from "react";
import "../assets/css/header.css";
import { Link } from "react-router-dom";


function Header() {

  useEffect(() => {
    const btnReponsive = document.querySelector(".btn-toggle");
    const menuReponsive = document.querySelector(".menu-responsive");
    const header = document.querySelector("header");

    const handleClick = () => {
      const iconBars = document.querySelector(".fa-chevron-right");
      const iconClose = document.querySelector(".fa-xmark");

      if (iconBars.classList.contains("active")) {
        iconBars.classList.remove("active");
        iconClose.classList.add("active");
        menuReponsive.classList.add("show");
        menuReponsive.style.top = `${header.clientHeight}px`;
      } else {
        iconBars.classList.add("active");
        iconClose.classList.remove("active");
        menuReponsive.classList.remove("show");
      }
    };

    btnReponsive.addEventListener("click", handleClick);

    return () => {
      btnReponsive.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header>
      <div className="container header-expand">

        {/* Logo */}
        <div className="container-logo">
          <img src={'/logo.svg.svg'}
            alt="Logo"
            className="logo" />
          <span>Amanqae</span>
        </div>

        {/* Menú principal */}
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca">Acerca</Link></li>
            <li><Link to="/cultura">Cultura</Link></li>
            <li><Link to="/carta">Carta</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* Botón de reserva */}
        <a href="Contacto.html#formulario-reserva" className="btn btn-primary">
          Reserva una mesa <i className="fa-solid fa-check"></i>
        </a>

        {/* Toggle */}
        <button className="btn-toggle">
          <i className="fa-solid fa-chevron-right active"></i>
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Menú responsive */}
        <div className="menu-responsive">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca">Acerca</Link></li>
            <li><Link to="/cultura">Cultura</Link></li>
            <li><Link to="/carta">Carta</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

      </div>
    </header>
  );
}

export default Header;
