type Vessel = {
  id: string;
  name: string;
  status: "Active" | "Idle" | "Maintenance";
  lastUpdated: string;
  lat: number;
  lng: number;
};

interface OverviewProps {
  vessels: Vessel[];
}

const Overview: React.FC<OverviewProps> = ({ vessels }) => {
  const activeCount = vessels.filter((v) => v.status === "Active").length;
  const idleCount = vessels.filter((v) => v.status === "Idle").length;
  const maintenanceCount = vessels.filter((v) => v.status === "Maintenance").length;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fleet Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <h2 className="text-lg font-semibold">Active Vessels</h2>
          <p className="text-3xl font-bold text-green-600">{activeCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <h2 className="text-lg font-semibold">Idle Vessels</h2>
          <p className="text-3xl font-bold text-yellow-600">{idleCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <h2 className="text-lg font-semibold">In Maintenance</h2>
          <p className="text-3xl font-bold text-red-600">{maintenanceCount}</p>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Total Vessels</h2>
        <p className="text-xl font-bold">{vessels.length}</p>
      </div>
    </div>
  );
};

export default Overview;
