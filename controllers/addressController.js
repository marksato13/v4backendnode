const Address = require('../models/address'); // Importar el modelo de dirección

module.exports = {
  

 // Crear una nueva dirección
 async create(req, res, next) {
    try {
        const address = req.body; // Datos de la dirección en el cuerpo de la solicitud

        const data = await Address.create(address);

        return res.status(201).json({
            success: true,
            message: 'Dirección creada correctamente',
            data: data.id
        });
    } catch (error) {
        console.error('Error al crear dirección:', error);
        return res.status(501).json({
            success: false,
            message: 'Error al crear la dirección',
            error: error
        });
    }
},


    // Obtener todas las direcciones
    async getAll(req, res) {
        try {
            const data = await Address.findAll();
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error al obtener direcciones:', error);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener las direcciones',
                error: error
            });
        }
    },

    // Obtener dirección por ID de usuario
    async findByUserId(req, res) {
        try {
            const data = await Address.findByUserId(req.params.id_user);
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error al obtener direcciones por usuario:', error);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener las direcciones del usuario',
                error: error
            });
        }
    },

  

    // Eliminar una dirección
    async delete(req, res) {
        try {
            const id = req.params.id;
            await Address.delete(id);
            return res.status(200).json({
                success: true,
                message: 'Dirección eliminada correctamente'
            });
        } catch (error) {
            console.error('Error al eliminar dirección:', error);
            return res.status(501).json({
                success: false,
                message: 'Error al eliminar la dirección',
                error: error
            });
        }
    }
};
