import axios from 'axios';

const apiBase = import.meta.env.VITE_API_URL;

export default async function refreshAccessToken() {
    try {
        const response = await axios.post(`${apiBase}/token/refresh/`);
        const newAccessToken = response.data.access;
        localStorage.setItem("accessToken", newAccessToken)
        return newAccessToken;
    } catch (error) {
        console.error("Failed to refresh access token: ", error);
        return null;
    }
}   