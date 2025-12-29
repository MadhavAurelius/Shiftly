import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const position = [27.51017419147506, 41.72306449979337]; // Hail

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "350px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          <div style={{ textAlign: "center" }}>
            <h3>Shiftly</h3>
            <img
              src="/preview.png"
              alt="Shiftly"
              style={{ width: 120, borderRadius: 8 }}
            />
            <p>📞 +966 59 277 0758</p>
            <p>📍 Hail, Saudi Arabia</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
