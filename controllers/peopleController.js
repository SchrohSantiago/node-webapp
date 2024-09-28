const axios = require('axios');
const { apiUrl, apiKey } = require('../config/config');

exports.listPeople = async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/person/popular`, {
            params: {api_key: apiKey},
        });
        res.status(200).json({status:'ok',data:response.data});
    } catch (error) {
        res.status(500).json({status:'error',msg:'Error al obtener las personas'});
        throw error;
    }
};

exports.getPersonById = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${apiUrl}/person/${id}`, {
            params: {
                api_key: apiKey,
            },
        });
        res.status(200).json({status:'ok',data:response.data});
    } catch (error) {
        res.status(500).json({status:'error',msg:'Error al obtener la persona'});
        throw error;
    }
};

exports