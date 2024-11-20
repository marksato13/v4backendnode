const SubscriptionController = require('../controllers/subscriptionController'); // Importamos el controlador

module.exports = (app) => {
    // Ruta para crear una nueva suscripción
    app.post('/api/subscriptions/create', SubscriptionController.create);

    // Ruta para verificar si un usuario tiene una suscripción activa
    app.get('/api/subscriptions/active/:id_user', SubscriptionController.checkActiveSubscription);
};
