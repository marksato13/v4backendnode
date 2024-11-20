const AlojamientoHasServicesController = require('../controllers/alojamientoHasServicesController');

module.exports = (app) => {
    // Ruta para crear una relación entre un alojamiento y una services
    app.post('/api/alojamiento-services/create', AlojamientoHasServicesController.create);

    // Ruta para obtener todas las services de un alojamiento
    app.get('/api/alojamiento-services/:id_alojamiento', AlojamientoHasServicesController.findByAlojamientoId);

    // Ruta para eliminar una relación entre un alojamiento y una services
    app.delete('/api/alojamiento-services/delete/:id_alojamiento/:id_service', AlojamientoHasServicesController.delete);
};
