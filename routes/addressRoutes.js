const AddressController = require('../controllers/addressController'); // Importamos el controlador

// Exportamos las rutas de address (direcciones) usando el mismo patrón
module.exports = (app) => {
  // Ruta para crear una nueva dirección
  app.post('/api/address/create', AddressController.create);

  
    // Ruta para obtener todas las direcciones de un usuario
    app.get('/api/address/findByUser/:id_user', AddressController.findByUserId);


    // Ruta para eliminar una dirección
    app.delete('/api/address/delete/:id', AddressController.delete);
};
