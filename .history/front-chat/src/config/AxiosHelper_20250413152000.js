import axios from 'axios';

export const baseURL = "http://localhost:800";

export const httpClient = axios.create({
    baseURL:baseURL,
});