import React, { useState } from "react";
import "./booking.css";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,

} from "firebase/firestore";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const numberPerson = parseInt(e.target["number-person"].value);

    try {
      // 1️⃣ Calcular capacidad mínima
      let capacidadNecesaria = numberPerson;
      if (numberPerson >= 7) capacidadNecesaria = 7;

      // 2️⃣ Traer mesas que soporten esa capacidad
      const mesasRef = collection(db, "mesas");
      const q = query(mesasRef, where("capacidad", ">=", capacidadNecesaria));
      const mesasSnapshot = await getDocs(q);

      if (mesasSnapshot.empty) {
        alert("⚠ No hay mesas para esa cantidad de personas.");
        setLoading(false);
        return;
      }

      let mesaDisponible = null;

      // 3️⃣ Revisar mesa por mesa si está libre en esa fecha/hora
      for (const mesaDoc of mesasSnapshot.docs) {
        const mesaId = mesaDoc.id;

        const reservasRef = collection(db, "reservas");
        const q2 = query(
          reservasRef,
          where("mesaId", "==", mesaId),
          where("date", "==", date),
          where("time", "==", time)
        );

        const reservaSnapshot = await getDocs(q2);

        if (reservaSnapshot.empty) {
          mesaDisponible = mesaId;
          break;
        }
      }

      if (!mesaDisponible) {
        alert("❌ Todas las mesas compatibles están ocupadas a esa hora.");
        setLoading(false);
        return;
      }

      // 4️⃣ Registrar reserva
      await addDoc(collection(db, "reservas"), {
        name,
        email,
        phone,
        date,
        time,
        personas: numberPerson,
        mesaId: mesaDisponible,
        createdAt: new Date()
      });

      alert(`✅ Reserva realizada. Mesa asignada: ${mesaDisponible}`);
      e.target.reset();

    } catch (error) {
      console.error(error);
      alert("❌ Error al procesar la reserva.");
    }

    setLoading(false);
  };


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

        <div className="spacer"></div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
                type="email"
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
              <input type="date" id="date" name="date" required />
            </div>

            <div className="group-form">
              <label htmlFor="time">Hora</label>
              <select name="time" id="time" required>
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
              <select name="number-person" id="number-person" required>
                <option value="" disabled>Numero de personas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="7">+7 a mas</option>
              </select>
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Procesando..." : "Reserva ahora"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default BookingForm;
