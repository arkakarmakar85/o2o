"use client"
import axios from 'axios';

const headers = {
    'Content-Type': 'application/json'
};

const OpenApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: headers
});

export default OpenApi;