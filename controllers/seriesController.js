const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.listSeries = async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/tv/popular`, {
            params: {api_key: apiKey},
        });
        res.status(200).json({status:'ok',data:response.data});
    } catch (error) {
        res.status(500).json({status:'error',msg:'Error al obtener las series'});
        throw error;
    }
};

exports.getSerieById = async (req,res) => {
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
        throw error;
    }
};


exports.listTopRatedSeries = async (req,res) => {
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
        throw error;
    }
};


