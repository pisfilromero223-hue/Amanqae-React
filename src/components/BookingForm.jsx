import React from "react";
import "./booking.css";

const BookingForm = () => {
  return (
    <section className="background-dark-2 section-booking-table">
      <div className="container">

        <div className="content">
          <span className="badge">Reserva una mesa</span>

          <h2 className="title">
            Reserva ahora tu mesa y disfruta de una{" "}
            <span>Gran Experiencia</span>
          </h2>

          <div className="schedules">
            <h3>Horario de atención</h3>
            <p>Lunes a Viernes: 10:00 AM - 09:00 PM</p>
            <p>Sábados 09 AM - 10:00 PM</p>
            <p>Domingo y feriados - Cerrado</p>
          </div>
        </div>

        {/* SPACER */}
        <div className="spacer"></div>

        {/* FORM */}
        <form className="contact-form">

          <div className="group-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Andres Pisfil"
            />
          </div>

          <div className="row">
            <div className="group-form">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="ejm: AndresPisfil@gmail.com"
              />
            </div>

            <div className="group-form">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="ejm: +51 982334056"
              />
            </div>
          </div>

          <div className="row">

            <div className="group-form">
              <label htmlFor="date">Fecha</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="group-form">
              <label htmlFor="time">Hora</label>
              <select name="time" id="time" defaultValue="">
                <option value="" disabled>Selecciona una hora</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:00">08:00 PM</option>
                <option value="21:00">09:00 PM</option>
              </select>
            </div>

            <div className="group-form">
              <label htmlFor="number-person">N° de personas</label>
              <select
                name="number-person"
                id="number-person"
                defaultValue=""
              >
                <option value="" disabled>Numero de personas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>

          </div>

          <button type="submit">Reserva ahora</button>

        </form>

      </div>
    </section>
  );
};

export default BookingForm;
