import axios from 'axios';

export default async function refreshAccessToken() {
    try {
        const response = await axios.post(`${process.env.API_URL}/token/refresh/`);
        const newAccessToken = response.data.access;
        localStorage.setItem("accessToken", newAccessToken)
        return newAccessToken;
    } catch (error) {
        console.error("Failed to refresh access token: ", error);
        return null;
    }
}   