const moviesService = require('../services/moviesService');

exports.getAll = async (req, res) => {
    try {
        const peliculas = await moviesService.getAll(req.query);
        console.log(peliculas)
        res.status(200).json({ status: 'ok', data: peliculas });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las películas' });
    }
};

exports.getById = async (req, res) => {
    try {
        const pelicula = await moviesService.getById(req.params.id);
        if (!pelicula) {
            return res.status(404).json({ status: 'error', msg: 'Película no encontrada' });
        }
        res.status(200).json({ status: 'ok', data: pelicula });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la película' });
    }
};
