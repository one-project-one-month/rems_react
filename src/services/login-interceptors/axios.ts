import axios from "axios";
import { useAuth } from "../../login/login-context/AuthContext";
import { jwtDecode } from "jwt-decode";


const auth = useAuth()
const api = axios.create();

api.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (accessToken && isTokenExpired(accessToken)) {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await axios.post("http://65.18.112.78:44010/rems/api/v1/Refresh-Token", { refreshToken });

      const newRefreshToken = res.data.data.refreshToken;
      localStorage.setItem("refreshToken", newRefreshToken);

      config.headers.Authorization = `Bearer ${accessToken}`;

    } catch (error) {
      auth.logout();
      return Promise.reject(error)
    }
  }

  return config;

});

// Helper function to check if token is expired

const isTokenExpired = (token: string): boolean => {
  const decoded = JSON.parse(jwtDecode(token));
  const expirationTime = decoded.exp * 1000;

  return Date.now() > expirationTime;
}