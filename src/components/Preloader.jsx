import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        // Espera mínimo 1.5s como tu HTML original
        const timer = setTimeout(() => {
            setHide(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="preloader" className={hide ? "hidden" : ""}>
            <img src="/logo.svg.svg" alt="Amanqae Logo" className="logo-preload" />
        </div>
    );
};

export default Preloader;
