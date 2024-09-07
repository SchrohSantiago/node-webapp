const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.getAll = async (query) => {
    const response = await axios.get(`${apiUrl}/empleados`, {
        params: query,
        headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
};

exports.getById = async (id) => {
    const response = await axios.get(`${apiUrl}/empleados/${id}`, {
        headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.data;
};
