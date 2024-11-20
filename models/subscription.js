const db = require('../config/config');

const Subscription = {};

// Crear una nueva suscripción
Subscription.create = (id_user, id_plan, durationInMonths) => {
    const sql = `
        INSERT INTO subscriptions (
            id_user,
            id_plan,
            start_date,
            end_date,
            status,
            created_at,
            updated_at
        ) VALUES (
            $1,
            $2,
            NOW(),
            NOW() + INTERVAL '$3 months',
            'pending',
            NOW(),
            NOW()
        ) RETURNING id
    `;
    return db.one(sql, [id_user, id_plan, durationInMonths]);
};

// Verificar si un usuario tiene una suscripción activa
Subscription.findActiveByUserId = (id_user) => {
    const sql = `
        SELECT * FROM subscriptions
        WHERE id_user = $1
        AND status = 'active'
        AND end_date > NOW()
    `;
    return db.oneOrNone(sql, id_user);
};

// **Nuevo método para obtener una suscripción por ID**
// models/subscription.js
Subscription.findById = async (id_subscription) => {
    const sql = `
        SELECT * FROM subscriptions
        WHERE id = $1
    `;
    const subscription = await db.oneOrNone(sql, id_subscription);
    if (subscription) {
        subscription.id_user = Number(subscription.id_user); 
    }
    return subscription;
};

// Actualizar el estado de la suscripción a 'active'
Subscription.activate = (id_subscription) => {
    const sql = `
        UPDATE subscriptions
        SET status = 'active',
            updated_at = NOW()
        WHERE id = $1
    `;
    return db.none(sql, id_subscription);
};

module.exports = Subscription;
