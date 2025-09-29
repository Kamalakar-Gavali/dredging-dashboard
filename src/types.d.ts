export interface Metric {
  timestamp: string;
  value: number;
}

export interface Vessel {
  id: string;
  name: string;
  status: "Active" | "Inactive" | "Maintenance" | "Idle";
  location: {
    lat: number;
    lng: number;
  };
  metrics: {
    fuel: Metric[];
    depth: Metric[];
    temperature: Metric[];
  };
  lastUpdated: string;
}
