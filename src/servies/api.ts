import axios from "axios";
import type { Vessel } from "../types";

const API_URL = "https://682f2101746f8ca4a47ff775.mockapi.io/VesselData";

export const fetchVesselData = async (): Promise<Vessel[]> => {
  try {
    const res = await axios.get<Vessel[]>(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching vessel data:", error);
    return [];
  }
};
 