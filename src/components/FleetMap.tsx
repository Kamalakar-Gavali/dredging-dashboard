import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import type { Vessel } from "../types";

// Fix default Leaflet icons (Vite specific)
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
});

interface FleetMapProps {
  vessels: Vessel[];
}

// Component to fit map to all markers
const FitBounds: React.FC<{ vessels: Vessel[] }> = ({ vessels }) => {
  const map = useMap();
  const bounds = vessels.map(v => [v.location.lat, v.location.lng] as [number, number]);
  if (bounds.length > 0) map.fitBounds(bounds);
  return null;
};

const FleetMap: React.FC<FleetMapProps> = ({ vessels }) => {
  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[20, 78]} // fallback center
        zoom={4}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {vessels.map((v) => (
          <Marker key={v.id} position={[v.location.lat, v.location.lng]}>
            <Popup>
              <strong>{v.name}</strong>
              <br />
              Status: {v.status}
              <br />
              Last Updated: {new Date(v.lastUpdated).toLocaleString()}
            </Popup>
          </Marker>
        ))}

        {/* Fit map bounds to all vessels */}
        <FitBounds vessels={vessels} />
      </MapContainer>
    </div>
  );
};

export default FleetMap;
