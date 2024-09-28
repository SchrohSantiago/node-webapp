const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.listSeries = async (req, res) => {
    console.log('listSeries');
    try {
        const response = await axios.get(`${apiUrl}/tv/popular`, {
            params: {api_key: apiKey},
        });
        res.status(200).json({status:'ok',data:response.data});
    } catch (error) {
        res.status(500).json({status:'error',msg:'Error al obtener las series'});
    }
};

exports.getSerieById = async (req,res) => {
    console.log('getSerieById');
    try {
        const { id } = req.params;
        const response = await axios.get(`${apiUrl}/tv/${id}`, {
            params: {
                api_key: apiKey,
            },
        });
        res.status(200).json({status:'ok',data:response.data});
    } catch (error) {
        res.status(500).json({status:'error',msg:'Error al obtener la serie'});
    }
};



exports.listTopRatedSeries = async (req,res) => {
    console.log('listTopRatedSeries');
    try {
        const { page=1, lang='en' } = req.query;
        const response = await axios.get(`${apiUrl}/tv/top_rated`, {
            params: {
                api_key: apiKey,
                page,
                language: lang,
            },
        });
        res.status(200).json({status:'ok',data:response.data});
    } catch (error) {
        res.status(500).json({status:'error',msg:'Error al obtener las series mejor valoradas'});
    }
};

exports.getMoviesByGenre = async (req, res) => { 
    console.log('getMoviesByGenre');
    /* 28: Acción   ID 
    12: Aventura
    16: Animación
    35: Comedia
    80: Crimen
    18: Drama
    10749: Romance
    27: Terror 
    */
        try { // http://localhost:3008/app/movies/genre?genre_id=2
    
            const genre_id = req.query.genre_id; 
            console.log(genre_id);
    
            if (!genre_id) {
                return res.status(400).json({ status: 'error', msg: 'El genre_id es obligatorio' });
            }
    
            const response = await axios.get(`${apiUrl}/discover/movie`, {
                params: {
                    api_key: apiKey,
                    with_genres: genre_id,
                    page: req.query.page
                }
            });
    
            if (response.data.results.length === 0) {
                return res.status(404).json({ status: 'error', msg: 'No se encontraron peliculas para el genero proporcionado' });
            }
    
            res.status(200).json({ status: 'ok', data: response.data });
        } catch (error) {
            res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener peliculas por genero' });
        }
};

exports.listFilteredSeriesByLanguage = async (req, res) => {
    try {
        const { page = 1, original_language } = req.query;

        if (!original_language) {
            return res.status(400).json({
                status: 'error',
                msg: 'Falta el parámetro original_language en la solicitud'
            });
        }

        const response = await axios.get(`${apiUrl}/discover/tv`, {
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
                msg: `No se encontraron series con el idioma original: ${original_language}`
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
                msg: 'Error interno del servidor al obtener las series',
                error: error.message
            });
        }
    }
};

