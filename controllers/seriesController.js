const seriesService = require('../services/seriesService');

exports.listSeries = async (req, res) => {
    try {
        const { page = 1, lang = 'en', category, year, order } = req.query;
        const series = await seriesService.fetchSeries({ page, lang, category, year, order });
        res.json(series);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las series', error });
    }
};

exports.getSerieById = async (req, res) => {
    try {
        const { id } = req.params;
        const serie = await seriesService.fetchSerieById(id);
        if (!serie) {
            return res.status(404).json({ message: 'Serie no encontrada' });
        }
        res.json(serie);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la serie', error });
    }
};

exports.listTopRatedSeries = async (req, res) => {
    try {
        const { page = 1, lang = 'en' } = req.query;
        const series = await seriesService.fetchTopRatedSeries({ page, lang });
        res.json(series);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las series mejor valoradas', error });
    }
};

