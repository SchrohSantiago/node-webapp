const empleadosService = require('../services/empleadosServices');

exports.getAll = async (req, res) => {
    try {
        const empleados = await empleadosService.getAll(req.query);
        res.status(200).json({ status: 'ok', data: empleados });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' });
    }
};

exports.getById = async (req, res) => {
    try {
        const empleado = await empleadosService.getById(req.params.id);
        if (!empleado) {
            return res.status(404).json({ status: 'error', msg: 'Empleado no encontrado' });
        }
        res.status(200).json({ status: 'ok', data: empleado });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' });
    }
};
