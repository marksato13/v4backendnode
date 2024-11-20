const PaymentController = require('../controllers/paymentController'); // Importamos el controlador

module.exports = (app) => {
    // Ruta para registrar un pago y activar la suscripción
    app.post('/api/payments/create', PaymentController.create);
};
