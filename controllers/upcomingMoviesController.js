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


exports.getUpcomingMoviesByLang = async (req, res) => {
    try {
        const { original_language: lang, page } = req.query;

        // Llamada a la API sin el parámetro 'original_language'
        const { data } = await axios.get(`${apiUrl}/movie/upcoming`, {
            params: { api_key: apiKey, page }
        });

        // Verificamos si 'lang' está presente, si no filtramos
        const movies = lang 
            ? data.results.filter(movie => movie.original_language.toLowerCase() === lang.toLowerCase())
            : data.results;

        // Respuesta con las películas filtradas
        res.status(200).json({ status: 'ok', data: movies });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error al obtener las películas próximas a estrenar' });
    }
};





