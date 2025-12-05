import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    collection,
    onSnapshot,
    deleteDoc,
    doc
} from "firebase/firestore";
import "./admin.css";

const AdminMesas = () => {

    const [mesas, setMesas] = useState([]);
    const [reservas, setReservas] = useState([]);

    // Fecha seleccionada por el admin
    const [fechaFiltro, setFechaFiltro] = useState(() => {
        return new Date().toISOString().split("T")[0]; // hoy por defecto
    });

    useEffect(() => {
        const unsubMesas = onSnapshot(collection(db, "mesas"), (snap) => {
            setMesas(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        });

        const unsubReservas = onSnapshot(collection(db, "reservas"), (snap) => {
            setReservas(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        });

        return () => {
            unsubMesas();
            unsubReservas();
        };
    }, []);

    // Obtiene la reserva para la fecha filtrada
    const getReservaPorFecha = (mesaId) => {
        return reservas.find(
            (r) => r.mesaId === mesaId && r.date === fechaFiltro
        );
    };

    const liberarMesa = async (reservaId) => {
        await deleteDoc(doc(db, "reservas", reservaId));
        alert("Mesa liberada exitosamente ✨");
    };

    // Reservas solo de la fecha seleccionada
    const reservasFiltradas = reservas.filter(r => r.date === fechaFiltro);

    return (
        <div className="admin-container">

            {/* SELECTOR DE FECHA */}
            <div className="fecha-selector">
                <label>Seleccionar Fecha:</label>
                <input
                    type="date"
                    value={fechaFiltro}
                    onChange={(e) => setFechaFiltro(e.target.value)}
                />
            </div>

            {/* TARJETAS */}
            <div className="cards-grid">
                <div className="card">
                    <h3>Mesas Totales</h3>
                    <p>{mesas.length}</p>
                </div>

                <div className="card">
                    <h3>Ocupadas</h3>
                    <p className="red">{reservasFiltradas.length}</p>
                </div>

                <div className="card">
                    <h3>Libres</h3>
                    <p className="green">{mesas.length - reservasFiltradas.length}</p>
                </div>

                <div className="card">
                    <h3>Reservas de la Fecha</h3>
                    <p>{reservasFiltradas.length}</p>
                </div>
            </div>

            {/* TABLA */}
            <div className="table-container">
                <h2>Estado de Mesas – Fecha: {fechaFiltro}</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Mesa</th>
                            <th>Capacidad</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mesas.map((mesa) => {
                            const reserva = getReservaPorFecha(mesa.id);

                            return (
                                <tr key={mesa.id}>
                                    <td>{mesa.id}</td>
                                    <td>{mesa.capacidad}</td>

                                    <td className={reserva ? "estado ocupado" : "estado libre"}>
                                        {reserva ? "Ocupada" : "Libre"}
                                    </td>

                                    <td>{reserva?.date || "-"}</td>
                                    <td>{reserva?.time || "-"}</td>

                                    <td>
                                        {reserva ? (
                                            <button
                                                className="btn-liberar"
                                                onClick={() => liberarMesa(reserva.id)}
                                            >
                                                Liberar
                                            </button>
                                        ) : (
                                            <span className="guion">—</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AdminMesas;
