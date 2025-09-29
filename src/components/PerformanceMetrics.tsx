
import Plot from "react-plotly.js";
import type { Vessel } from "../types";

interface PerformanceMetricsProps {
  vessels: Vessel[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ vessels }) => (
  <div className="p-6 space-y-8">
    <h1 className="text-2xl font-bold mb-4">Performance Metrics</h1>

    {/* Fuel Consumption */}
    <div className="bg-white p-4 shadow rounded-lg">
      <Plot
        data={vessels.map((v) => ({
          x: v.metrics.fuel.map((f) => f.timestamp),
          y: v.metrics.fuel.map((f) => f.value),
          type: "scatter" as const,
          mode: "lines+markers" as const,
          name: v.name,
          marker: { size: 8 },
          hovertemplate: `<b>${v.name}</b><br>Fuel: %{y} liters<br>Timestamp: %{x}<extra></extra>`
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
          x: v.metrics.depth.map((d) => d.value),
          y: v.metrics.depth.map((d) => d.value), // if speed available, replace here
          type: "scatter" as const,
          mode: "markers" as const,
          name: v.name,
          marker: { size: 10 },
          hovertemplate: `<b>${v.name}</b><br>Depth: %{x}<extra></extra>`,
        }))}
        layout={{
          title: { text: "Dredging Depth" },
          xaxis: { title: {text:"Depth (m)" }},
          yaxis: { title: {text:"Depth (m)" }},
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
          x: v.metrics.temperature.map((t) => t.timestamp),
          y: v.metrics.temperature.map((t) => t.value),
          type: "scatter" as const,
          mode: "lines+markers" as const,
          name: v.name,
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

export default PerformanceMetrics;
