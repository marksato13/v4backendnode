const SubscriptionPlanController = require('../controllers/subscriptionPlanController'); // Importamos el controlador

module.exports = (app) => {
    // Ruta para obtener todos los planes de suscripción
    app.get('/api/subscription-plans/getAll', SubscriptionPlanController.getAll);  // Asegúrate de usar `app.get` y no `app.post`

    // Ruta para obtener un plan de suscripción por ID
    app.get('/api/subscription-plans/:id', SubscriptionPlanController.getById);
};
