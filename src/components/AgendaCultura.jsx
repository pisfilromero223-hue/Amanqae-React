import { useState, useEffect } from "react";
import "./Agenda.css";

export default function AgendaCultura() {
    const images = [
        { src: '/age1.jpg', text: "PERÚ EN AZUL PRUSIA / Katherine De Lama" },
        { src: '/age2.jpg', text: "PINTURA VIRAL Y MOMAZOS / Leonardo Serquen" },
        { src: '/age3.jpg', text: "CONVERSATORIO / Voces y Obstaculos" },
        { src: '/age4.jpg', text: "SEPARADORES BOTÁNICOS / Luz Gutiérrez" },
        { src: '/age5.jpg', text: "ACUARELA LIBRE / Leonardo Anco" },
        { src: '/age6.jpg', text: "BRATZAZO / Trilce Peralta" }
    ];


    const totalViews = 3;
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const auto = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalViews);
        }, 4000);
        return () => clearInterval(auto);
    }, []);


    const goTo = (i) => {
        setIndex(i);
    };


    return (
        <section className="agenda-cultura">
            <div className="agenda-bg"></div>
            <h2 className="agenda-title">Agenda Cultura</h2>


            <div className="agenda-wrapper">
                <div
                    className="agenda-carousel"
                    style={{ transform: `translateX(-${(100 / totalViews) * index}%)` }}
                >
                    {images.map((item, i) => (
                        <div key={i} className="cultura-card">
                            <img src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="agenda-dots">
                {[0, 1, 2].map((d) => (
                    <span
                        key={d}
                        className={`dot ${index === d ? "active" : ""}`}
                        onClick={() => goTo(d)}
                    ></span>
                ))}
            </div>
        </section>
    );
}