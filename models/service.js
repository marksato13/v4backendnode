const db = require('../config/config');

const Service = {};

// Crear una nueva service
Service.create = (service) => {
    const sql = `
        INSERT INTO services (
            nombre, 
            descripcion, 
            creado_en, 
            actualizado_en
        ) VALUES ($1, $2, $3, $4) RETURNING id
    `;
    return db.oneOrNone(sql, [
        service.nombre,
        service.descripcion,
        new Date(),
        new Date()
    ]);
};

// Obtener todas las service
Service.findAll = () => {
    const sql = `SELECT * FROM services`;
    return db.manyOrNone(sql);
};

// Obtener una service por su ID
Service.findById = (id) => {
    const sql = `SELECT * FROM services WHERE id = $1`;
    return db.oneOrNone(sql, id);
};

// Actualizar una service
Service.update = (service) => {
    const sql = `
        UPDATE serviceS SET
            nombre = $2,
            descripcion = $3,
            actualizado_en = $4
        WHERE id = $1
    `;
    return db.none(sql, [
        service.id,
        service.nombre,
        service.descripcion,
        new Date()
    ]);
};

// Eliminar una service
Service.delete = (id) => {
    const sql = `DELETE FROM services WHERE id = $1`;
    return db.none(sql, id);
};

module.exports = Service;
