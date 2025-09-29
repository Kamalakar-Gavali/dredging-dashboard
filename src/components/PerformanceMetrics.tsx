import React from "react";
import Plot from "react-plotly.js";

type Vessel = {
  id: string;
  name: string;
  fuelHistory?: { timestamp: string; value: number }[];
  depthSpeedHistory?: { depth: number; speed: number }[];
  engineTempHistory?: { timestamp: string; value: number }[];
};

interface PerformanceMetricsProps {
  vessels: Vessel[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ vessels }) => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Performance Metrics</h1>

      {/* Fuel Consumption */}
      <div className="bg-white p-4 shadow rounded-lg">
        <Plot
          data={vessels.map((v) => ({
            x: v.fuelHistory?.map((f) => f.timestamp) || [],
            y: v.fuelHistory?.map((f) => f.value) || [],
            type: "scatter",
            mode: "lines+markers",
            name: v.name,
            marker: { size: 8 },
            hovertemplate: `<b>${v.name}</b><br>Fuel: %{y} liters<br>Timestamp: %{x}<extra></extra>`,
          }))}
          layout={{
            title: { text: "Fuel Consumption Over Time" },
            autosize: true,
            hovermode: "closest",
          }}
          style={{ width: "100%", height: "400px" }}
          config={{ responsive: true }}
        />
      </div>

      {/* Dredging Depth vs Speed */}
      <div className="bg-white p-4 shadow rounded-lg">
        <Plot
          data={vessels.map((v) => ({
            x: v.depthSpeedHistory?.map((d) => d.depth) || [],
            y: v.depthSpeedHistory?.map((d) => d.speed) || [],
            type: "scatter",
            mode: "markers",
            name: v.name,
            marker: { size: 10 },
            hovertemplate: `<b>${v.name}</b><br>Depth: %{x} m<br>Speed: %{y} knots<extra></extra>`,
          }))}
          layout={{
            title: { text: "Dredging Depth vs Speed" },
            xaxis: { title: "Depth (m)" },
            yaxis: { title: "Speed (knots)" },
            autosize: true,
          }}
          style={{ width: "100%", height: "400px" }}
          config={{ responsive: true }}
        />
      </div>

      {/* Engine Temperature */}
      <div className="bg-white p-4 shadow rounded-lg">
        <Plot
          data={vessels.map((v) => ({
            x: v.engineTempHistory?.map((t) => t.timestamp) || [],
            y: v.engineTempHistory?.map((t) => t.value) || [],
            type: "scatter",
            mode: "lines+markers",
            name: v.name,
            line: { shape: "spline" },
            hovertemplate: `<b>${v.name}</b><br>Temp: %{y} °C<br>Timestamp: %{x}<extra></extra>`,
          }))}
          layout={{
            title: { text: "Engine Temperature Trends" },
            autosize: true,
          }}
          style={{ width: "100%", height: "400px" }}
          config={{ responsive: true }}
        />
      </div>
    </div>
  );
};

export default PerformanceMetrics;
