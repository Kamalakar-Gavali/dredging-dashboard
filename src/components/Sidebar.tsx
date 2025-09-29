import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">Fleet Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : ""}>Overview</NavLink>
        <NavLink to="/fleet-map" className={({ isActive }) => isActive ? "text-blue-400" : ""}>Fleet Map</NavLink>
        <NavLink to="/performance-metrics" className={({ isActive }) => isActive ? "text-blue-400" : ""}>Performance Metrics</NavLink>
      </nav>
    </div>
  );
}
