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

// ordena por popularidad de mayor a menor 
exports.getUpcomingMoviesByPopularity = async (req, res) => {
    const { sortBy } = req.query; 

    try {
        
        const response = await axios.get(`${apiUrl}/movie/upcoming`, {
            params: {
                api_key: apiKey,
                page: 1,
            },
        });
        let movies = response.data.results;
        if (sortBy === 'popularity') {
            movies = movies.sort((a, b) => b.popularity - a.popularity); 
        }

        res.status(200).json({
            status: 'ok',
            data: movies,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'Error al obtener las películas',
        });
    }
};

