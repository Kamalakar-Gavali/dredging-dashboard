import type { Vessel } from "../types";

interface OverviewProps {
  vessels: Vessel[];
}

const Overview: React.FC<OverviewProps> = ({ vessels }) => {
  // Count vessels by status
  const activeCount = vessels.filter((v) => v.status === "Active").length;
  const inactiveCount = vessels.filter((v) => v.status === "Inactive").length;
  const maintenanceCount = vessels.filter((v) => v.status === "Maintenance").length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Fleet Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <h2 className="text-lg font-semibold">Active Vessels</h2>
          <p className="text-3xl font-bold text-green-600">{activeCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <h2 className="text-lg font-semibold">Inactive Vessels</h2>
          <p className="text-3xl font-bold text-gray-600">{inactiveCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <h2 className="text-lg font-semibold">In Maintenance</h2>
          <p className="text-3xl font-bold text-red-600">{maintenanceCount}</p>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 shadow rounded-lg text-center">
        <h2 className="text-lg font-semibold mb-2">Total Vessels</h2>
        <p className="text-xl font-bold">{vessels.length}</p>
      </div>
    </div>
  );
};

export default Overview;
