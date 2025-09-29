export interface Vessel {
  id: string;
  name: string;
  status: "Active" | "Idle" | "Maintenance";
  latitude: number;
  longitude: number;
  updatedAt: string;
  fuelHistory?: { timestamp: string; value: number }[];
  dredgingSpeed?: number[];
  dredgingDepth?: number[];
  engineTempHistory?: { timestamp: string; value: number }[];
}
