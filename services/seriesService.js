const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.fetchSeries = async ({ page, lang, category, year, order }) => {
    try {
        const response = await axios.get(`${apiUrl}/tv/popular`, {
            params: {
                api_key: apiKey,
                page,
                language: lang,
                with_genres: category,
                first_air_date_year: year,
                sort_by: order,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener las series:', error);
        throw error;
    }
};

exports.fetchSerieById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/tv/${id}`, {
            params: {
                api_key: apiKey,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener la serie:', error);
        throw error;
    }
};

exports.fetchTopRatedSeries = async ({ page, lang }) => {
    try {
        const response = await axios.get(`${apiUrl}/tv/top_rated`, {
            params: {
                api_key: apiKey,
                page,
                language: lang,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener las series mejor valoradas:', error);
        throw error;
    }
};

