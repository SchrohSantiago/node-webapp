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

exports.getPopulars = async (query) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/popular`, {
            params: {
                api_key: apiKey,
                language: 'es-ES',
                page: query.page || 1
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error en getPopulars:', error.response ? error.response.data : error.message);
        throw new Error('Error al obtener las películas');
    }
};

exports.getCredits = async (movie_id) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/${movie_id}/credits`, {
            params: {
                api_key: apiKey,
                language: 'es-ES'
            }
        });
        return response.data; // Aquí devolvemos los datos de los créditos
    } catch (error) {
        console.log('Error en getCredits:', error.response ? error.response.data : error.message);
        throw new Error('Error al obtener los créditos de la película');
    }
};

exports.getRecommendations = async (movie_id) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/${movie_id}/recommendations`, {
            params: {
                api_key: apiKey,
                language: 'es-ES',
                page: 1 // Opción para controlar la paginación si lo necesitas
            }
        });
        return response.data; // Devuelve los datos de las recomendaciones
    } catch (error) {
        console.log('Error en getRecommendations:', error.response ? error.response.data : error.message);
        throw new Error('Error al obtener las recomendaciones de la película');
    }
};



