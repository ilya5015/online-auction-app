import axios from "axios";

export const commonApiInstance = axios.create({
    baseURL: 'https://localhost:3000',
});