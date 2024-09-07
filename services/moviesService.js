const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.getAll = async (query) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/popular`, {
            params: {
                api_key: apiKey,
                language: query.lang || 'es-ES',
                page: query.page || 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.log('Error en getAll:', error.response ? error.response.data : error.message);
        throw new Error('Error al obtener las películas populares');
    }
};

exports.getById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/${id}`, {
            params: {
                api_key: apiKey,
                language: 'es-ES'
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error en getById:', error.response ? error.response.data : error.message);
        throw new Error('Error al obtener la película');
    }
};
