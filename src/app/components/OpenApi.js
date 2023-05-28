"use client"
import axios from 'axios';

const OpenApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default OpenApi;