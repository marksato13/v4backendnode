const SubscriptionPlan = require('../models/subscriptionPlan');

module.exports = {
    // Obtener todos los planes de suscripción
    async getAll(req, res, next) {
        try {
            const plans = await SubscriptionPlan.findAll();
            return res.status(200).json({
                success: true,
                data: plans,
            });
        } catch (error) {
            console.error('Error al obtener los planes de suscripción:', error);
            return res.status(500).json({
                success: false,
                message: 'Error al obtener los planes de suscripción',
                error: error.message,
            });
        }
    },

    // Obtener un plan de suscripción por ID
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const plan = await SubscriptionPlan.findById(id);
            if (!plan) {
                return res.status(404).json({
                    success: false,
                    message: 'Plan de suscripción no encontrado',
                });
            }
            return res.status(200).json({
                success: true,
                data: plan,
            });
        } catch (error) {
            console.error('Error al obtener el plan de suscripción:', error);
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el plan de suscripción',
                error: error.message,
            });
        }
    },
};
