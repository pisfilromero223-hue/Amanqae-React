import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca"; 
import Cultura from "./pages/Cultura";
import Carta from "./pages/Carta";
import Contacto from "./pages/Contacto";
import AdminMesa from "./admin/AdminMesa";
import Preloader from "./components/Preloader";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin/mesas" element={<AdminMesa />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
