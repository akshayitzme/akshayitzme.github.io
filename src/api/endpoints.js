const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://akshayitzme.duckdns.org:8000/api/v1/watched";

export const endpoints = {
  watched: `${API_BASE_URL}/watched`,
};
