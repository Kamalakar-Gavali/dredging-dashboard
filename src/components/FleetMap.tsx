import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icons
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
});

type Vessel = {
  id: string;
  name: string;
  status: string;
  lastUpdated: string;
  lat: number;
  lng: number;
};

interface FleetMapProps {
  vessels: Vessel[];
}

const FleetMap: React.FC<FleetMapProps> = ({ vessels }) => {
  return (
    <MapContainer
      center={[20, 78]} // Default: India
      zoom={4}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {vessels?.map((v) => (
        <Marker key={v.id} position={[v.lat, v.lng]}>
          <Popup>
            <strong>{v.name}</strong>
            <br />
            Status: {v.status}
            <br />
            Last Updated: {v.lastUpdated}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default FleetMap;
