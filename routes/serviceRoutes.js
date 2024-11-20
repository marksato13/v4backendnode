const ServiceController = require('../controllers/serviceController');

module.exports = (app) => {
    // Crear una nueva service
    app.post('/api/services/create', ServiceController.create);

    // Obtener todas las service
    app.get('/api/services/getAll', ServiceController.getAll);

    // Obtener una service por su ID
    app.get('/api/services/:id', ServiceController.findById);

    // Actualizar una service
    app.put('/api/services/update/:id', ServiceController.update);

    // Eliminar una service
    app.delete('/api/services/delete/:id', ServiceController.delete);
};
