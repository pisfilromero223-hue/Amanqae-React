import { useState } from "react";
import { useEffect } from "react";

import "./Talleres.css";

export default function Talleres() {

    const [modal, setModal] = useState(null);
    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden"; // Desactiva scroll
        } else {
            document.body.style.overflow = "auto"; // Activa scroll
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modal]);


    const dataTalleres = {
        1: {
            titulo: "PINTURA VIRAL Y MOMAZOS",
            descripcion:
                "En este taller fusionaremos memes con pintura... <br><br><b>Tallerista:</b> Leonardo Serquen",
            btn: "https://docs.google.com/forms/d/12NOefkSl2th-l6DVEA8h_7V2JrMjGkRy6wD8ZdOce48/viewform",
            img: '/taller1.jpg',
        },
        2: {
            titulo: "TALLER BRATZASO",
            descripcion:
                "Aprenderás a diseñar figurines estilo Bratz... <br><br><b>Tallerista:</b> Trilce Peralta",
            btn: "https://docs.google.com/forms/d/e/1FAIpQLSc-9Pr7PTVOH00JHXRavUVJsBJUR800cI1P0HJigaQ4gOrgDA/viewform",
            img: '/taller2.jpg',
        },
        3: {
            titulo: "SEPARADORES BOTÁNICOS",
            descripcion:
                "Crea separadores con flores prensadas... <br><br><b>Tallerista:</b> Yeny Gutierrez",
            btn: "https://docs.google.com/forms/d/e/1FAIpQLSek-Cnj1Hg1limWv09eZuf0xroQnjqGnJ7B7aeNjQ-4_w9TMw/viewform",
            img: '/taller3.jpg',
        },
        4: {
            titulo: "PERÚ EN AZUL PRUSIA",
            descripcion:
                "Aprende a emulsionar papel y crear cianotipias... <br><br><b>Tallerista:</b> Katherine De Lama",
            btn: "https://docs.google.com/forms/d/e/1FAIpQLSfwpZA9upduGmYvw6S98_koEDN7p7gYdKPs9RWNqNcBXklm0Q/viewform",
            img: '/taller4.jpg',
        },
    };

    const openModal = (id) => setModal(dataTalleres[id]);
    const closeModal = () => setModal(null);

    return (
        <>
            <section className="background-dark-2 section-talleres">
                <div className="container">
                    <div className="content">
                        <div className="section-wraper">
                            <span className="badge">Inscríbete Ahora</span>

                            <h2 className="title">
                                NUESTRA PASIÓN POR <span>LA CULTURA</span>
                            </h2>

                            <hr />

                            <p>Nuetros talleres inspirados y mucho más.</p>

                            <div className="contenedor-carta">
                                {Object.entries(dataTalleres).map(([id, item]) => (
                                    <div
                                        key={id}
                                        className="carta-images-container"
                                        onClick={() => openModal(id)}
                                    >
                                        <img src={item.img} alt="" />
                                        <div className="carta-info">
                                            <h3>{item.titulo}</h3>
                                            <a href="#" className="btn-primary">
                                                Infórmate
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {modal && (
                <div className="modal fadeIn" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={closeModal}>
                            &times;
                        </span>

                        <div className="modal-left">
                            <img src={modal.img} alt="" />
                        </div>

                        <div className="modal-right">
                            <h3>{modal.titulo}</h3>
                            <p dangerouslySetInnerHTML={{ __html: modal.descripcion }}></p>

                            <a href={modal.btn} target="_blank" className="btn-inscribite">
                                Inscribite
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
