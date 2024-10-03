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


exports.listFilteredPeopleByDepartment = async (req, res) => {
    try {
        
        const known_for_department = req.query.known_for_department;
        console.log('known_for_department:', known_for_department);
        
        if (!known_for_department) {
            return res.status(400).json({
                status: 'error',
                msg: 'Falta el parámetro known_for_department en la solicitud'
            });
        }

        const response = await axios.get(`${apiUrl}/discover/person`, {
            params: {
                api_key: apiKey,
                with_departament: known_for_department,
                page: 1, 
            },
        });

        const people = response.data.results.filter(person =>
            person.known_for_department === known_for_department
        );

        console.log(people)

        if (!people || people.length === 0) {
            return res.status(404).json({
                status: 'error',
                msg: `No se encontraron personas en el departamento: ${known_for_department}`
            });
        }

        return res.status(200).json({
            status: 'ok',
            data: people
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
                msg: 'Error interno del servidor al obtener las personas',
                error: error.message
            });
        }
    }
};

    





