// controllers/moviesController.js

exports.getAll = async (req, res) => {
    try {
        const peliculas = await moviesService.getAll(req.query);
        res.status(200).json({ status: 'ok', data: peliculas });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las películas' });
    }
};

exports.getById = async (req, res) => {
    try {
        const movie_id = req.params.id;
        if (!movie_id || isNaN(movie_id) || Number(movie_id) <= 0) {
            return res.status(400).json({ status: 'error', msg: 'ID de película inválido' });
        }
        const movie = await moviesService.getById(movie_id);
        res.status(200).json({ status: 'ok', data: movie });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la película' });
    }
};

exports.getPopulars = async (req, res) => {
    try {
        const peliculas = await moviesService.getPopulars(req.query);
        res.status(200).json({ status: 'ok', data: peliculas });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las películas populares' });
    }
};

exports.getCredits = async (req, res) => {
    try {
        const movie_id = req.params.movie_id;
        const credits = await moviesService.getCredits(movie_id);
        res.status(200).json({ status: 'ok', data: credits });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener los créditos de la película' });
    }
};

exports.getRecommendations = async (req, res) => {
    try {
        const movie_id = req.params.movie_id;
        const recommendations = await moviesService.getRecommendations(movie_id);
        res.status(200).json({ status: 'ok', data: recommendations });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las recomendaciones de la película' });
    }
};

exports.getAdultMovies = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const adultMovies = await moviesService.getAdultMovies(page);
        res.status(200).json({ status: 'ok', data: adultMovies });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener las películas para adultos' });
    }
};
