const db = require('../config/config');

const SubscriptionPlan = {};

// Obtener todos los planes de suscripción
SubscriptionPlan.findAll = () => {
    const sql = `SELECT * FROM subscription_plans`;
    return db.manyOrNone(sql);
};

// Obtener un plan de suscripción por ID
SubscriptionPlan.findById = (id) => {
    const sql = `SELECT * FROM subscription_plans WHERE id = $1`;
    return db.oneOrNone(sql, id);
};

module.exports = SubscriptionPlan;
