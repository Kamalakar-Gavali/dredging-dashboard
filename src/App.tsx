import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import FleetMap from "./components/FleetMap";
import PerformanceMetrics from "./components/PerformanceMetrics";

type Vessel = {
  id: string;
  name: string;
  status: "Active" | "Idle" | "Maintenance";
  lastUpdated: string;
  lat: number;
  lng: number;
  fuelHistory?: { timestamp: string; value: number }[];
  depthSpeedHistory?: { depth: number; speed: number }[];
  engineTempHistory?: { timestamp: string; value: number }[];
};

const App: React.FC = () => {
  const [vessels, setVessels] = useState<Vessel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVessels = async () => {
      try {
        const res = await axios.get<Vessel[]>(
          "https://682f2101746f8ca4a47ff775.mockapi.io/VesselData"
        );
        setVessels(res.data);
      } catch (err) {
        console.error("Error fetching vessels:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVessels();
  }, []);

  if (loading) {
    return <p className="p-6 text-lg">Loading fleet data...</p>;
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview vessels={vessels} />} />
            <Route path="/fleet-map" element={<FleetMap vessels={vessels} />} />
            <Route
              path="/performance-metrics"
              element={<PerformanceMetrics vessels={vessels} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
