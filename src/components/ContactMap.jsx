import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"; // tus estilos si deseas

// Marcador rojo estilo Google Maps
const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function ContactMap() {
  const position = [-12.04608, -77.03743]; // Plaza San Martín

  return (
    <section className="container-map">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: "450px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={redIcon}>
          <Popup>Estamos aquí: Plaza San Martín</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
