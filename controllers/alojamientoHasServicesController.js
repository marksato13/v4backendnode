const AlojamientoHasServices = require('../models/alojamientoHasServices');

module.exports = {
    // Crear una relación entre alojamiento y categoría
// Crear una relación entre un alojamiento y una categoría
async create(req, res, next) {
    try {
        const { id_alojamiento, id_service } = req.body; // Obtenemos los datos del cuerpo de la solicitud
        await AlojamientoHasServices.create(id_alojamiento, id_service);
        return res.status(201).json({
            success: true,
            message: 'Services asociada al alojamiento correctamente',
        });
    } catch (error) {
        console.error('Error al asociar la Services al alojamiento:', error);
        return res.status(501).json({
            success: false,
            message: 'Error al asociar la Services al alojamiento',
            error: error
        });
    }
},
    // Obtener todas las Services asociadas a un alojamiento
    async findByAlojamientoId(req, res, next) {
        try {
            const { id_alojamiento } = req.params;
            const data = await AlojamientoHasServices.findByAlojamientoId(id_alojamiento);
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error al obtener las Services del alojamiento:', error);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener las Services del alojamiento',
                error: error
            });
        }
    },

    // Eliminar una relación entre alojamiento y Services
    async delete(req, res, next) {
        try {
            const { id_alojamiento, id_service } = req.params;
            await AlojamientoHasServices.delete(id_alojamiento, id_service);
            return res.status(200).json({
                success: true,
                message: 'Services eliminada del alojamiento correctamente',
            });
        } catch (error) {
            console.error('Error al eliminar la Services del alojamiento:', error);
            return res.status(501).json({
                success: false,
                message: 'Error al eliminar la Services del alojamiento',
                error: error
            });
        }
    }
};
