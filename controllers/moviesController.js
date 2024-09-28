
const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');


const getPopulars = async (req, res) => {
    try {
        const responses = await Promise.all(
            Array.from({ length: 3 }, (_, index) =>
                axios.get(`${apiUrl}/movie/popular`, {
                    params: { api_key: apiKey, page: index + 1 }
                })
            )
        );

        const allMovies = responses.flatMap(response => response.data.results);

        res.status(200).json({ status: 'ok', data: allMovies });
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las peliculas populares' });
    }
};



const getCredits = async (req, res) => {
    try {
        const movie_id = req.params.movie_id;
        const response = await axios.get(`${apiUrl}/movie/${movie_id}/credits`, {
            params: { api_key: apiKey }
        });
        res.status(200).json({ status: 'ok', data: response.data });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener los creditos de la pelicula' });
    }
};

const getRecommendations = async (req, res) => {
    try {
        const movie_id = req.params.movie_id;
        const response = await axios.get(`${apiUrl}/movie/${movie_id}/recommendations`, {
            params: { api_key: apiKey }
        });
        res.status(200).json({ status: 'ok', data: response.data });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las recomendaciones de la pelicula' });
    }
};

const getMoviesByGenre = async (req, res) => { 
    
/* 28: Acción   ID 
12: Aventura
16: Animación
35: Comedia
80: Crimen
18: Drama
10749: Romance
27: Terror 
*/
    try { // http://localhost:3000/app/movies/genre?genre_id=2

        const genre_id = req.query.genre_id; // obtenemos el id por la consulta

        // Verificamos que se haya introducido el genre_id
        if (!genre_id) {
            return res.status(400).json({ status: 'error', msg: 'El genre_id es obligatorio' });
        }

        // Hacemos la solicitud a la API para obtener películas por género
        const response = await axios.get(`${apiUrl}/discover/movie`, {
            params: {
                api_key: apiKey,
                with_genres: genre_id,
                page: req.query.page
            }
        });

        // Si no hay resultados (películas) para el género dado
        if (response.data.results.length === 0) {
            return res.status(404).json({ status: 'error', msg: 'No se encontraron peliculas para el genero proporcionado' });
        }

        res.status(200).json({ status: 'ok', data: response.data });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener peliculas por genero' });
    }
};



module.exports = {
    getPopulars,
    getCredits,
    getRecommendations,
    getMoviesByGenre
};
