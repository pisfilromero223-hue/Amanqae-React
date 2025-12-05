import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="background-dark-1">
      <div className="container">
        <div className="content">
          <div className="container-logo">
            <img src={'/logo.svg.svg'} alt="logo" />
            <span>Amanqae</span>
          </div>

          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Jirón Ica 281, Lima 15001</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+ 965325794</span>
            </li>
          </ul>
        </div>

        <div className="container-social-copyright">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/p/Amanqae-Caf%C3%A8-y-Cultura-61570948283616/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@amanqaecafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/amanqaecafe/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>

          <p>© 2025 Amanqae Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
