import axios from "axios";
import type { Vessel } from "../types";

const API_URL = "https://682f2101746f8ca4a47ff775.mockapi.io/VesselData";

export const fetchVessels = async (): Promise<Vessel[]> => {
  try {
    const res = await axios.get(API_URL);
    // The API returns an array with a `vessels` array inside
    return res.data[0]?.vessels || [];
  } catch (err) {
    console.error("Error fetching vessels:", err);
    return [];
  }
};
