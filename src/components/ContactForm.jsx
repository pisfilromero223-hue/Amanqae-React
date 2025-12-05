import { useState } from "react";
import "./Contact.css"; // si ya tienes tus estilos

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí luego conectamos con backend / BD
    console.log("Formulario enviado:", form);

    alert("Consulta enviada correctamente 👌");

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="background-dark-1 section-contact-us">
      <div className="container">
        <div className="content">
          <span className="badge">Contáctanos</span>

          <h2 className="title">
            PONTE EN CONTACTO <span>CON NOSOTROS</span>
          </h2>

          <p>
            ¿Tienes preguntas o comentarios? Comunícate con nosotros a través
            del formulario a continuación, llámanos o visita nuestro restaurante.
            ¡Estamos aquí para ayudarte!
          </p>

          <div className="container-info">
            <p>Jirón Ica 281, Lima 15001</p>
            <p>+ 965325794</p>
            <p>info@Amanqae.com</p>
          </div>

          <div className="container-social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="spacer"></div>

        <form className="form-contact" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="ejm: Andrés"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="ejm: andres@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="text"
                name="phone"
                placeholder="ejm: +51 993 234 567"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje aquí"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Enviar Consulta</button>
        </form>
      </div>
    </section>
  );
}
