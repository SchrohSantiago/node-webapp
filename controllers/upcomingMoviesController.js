const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.getUpcomingMovies = async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/movie/upcoming`, {
            params: 
            {api_key: apiKey},
        });
        res.status(200).json({
            status:'ok',
            data:response.data
        });
    } catch (error) {
        res.status(500).json({
            status:'error',
            msg:'Error al optener las Upcoming Movies'
        });
        throw error;
    }
};

exports.getAlternativeTitleById = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${apiUrl}/movie/${id}/alternative_titles`, {
            params: 
            {api_key: apiKey},
        });
        res.status(200).json({
            status:'ok',
            data:response.data
        });
    } catch (error) {
        res.status(500).json({
            status:'error',
            msg:'Error al obtener titulos alternativos'
        });
        throw error;
    }
};

exports.getUpcomingMoviesByLanguage = async (req, res) => {
    try {
        const { page = 1, original_language } = req.query;

        if (!original_language) {
            return res.status(400).json({
                status: 'error',
                msg: 'Falta el parámetro original_language en la solicitud'
            });
        }

        const response = await axios.get(`${apiUrl}/movie/popular`, {
            params: {
                api_key: apiKey,
                page,
                with_original_language: original_language 
            },
        });

        const series = response.data.results;

        if (!series || series.length === 0) {
            return res.status(404).json({
                status: 'error',
                msg: `No se encontraron upcoming movies con el idioma original: ${original_language}`
            });
        }

        return res.status(200).json({
            status: 'ok',
            data: series
        });
    } catch (error) {
        console.error('Error al hacer la solicitud a TMDB:', error);

        if (error.response) {
            return res.status(error.response.status).json({
                status: 'error',
                msg: 'Error en la solicitud a la API de TMDB',
                error: error.response.data
            });
        } else {
            return res.status(500).json({
                status: 'error',
                msg: 'Error interno del servidor al obtener las upcoming movies',
                error: error.message
            });
        }
    }
};
    
    

