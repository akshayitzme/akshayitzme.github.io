const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://akshayitzme.duckdns.org/api/v1";

export const endpoints = {
  watched: `${API_BASE_URL}/watched`,
};
