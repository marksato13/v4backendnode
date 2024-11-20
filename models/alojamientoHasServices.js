const db = require('../config/config');

const AlojamientoHasServices = {};

// Crear la relación entre un alojamiento y una categoría
AlojamientoHasServices.create = (id_alojamiento, id_service) => {
    const sql = `
        INSERT INTO alojamiento_has_services (id_alojamiento, id_service)
        VALUES ($1, $2)
    `;
    return db.none(sql, [id_alojamiento, id_service]); // Quitamos el RETURNING id
};




// Obtener todas las categorías de un alojamiento
AlojamientoHasServices.findByAlojamientoId = (idAlojamiento) => {
    const sql = `
        SELECT C.*
        FROM services AS C
        JOIN alojamiento_has_services AS AHC ON C.id = AHC.id_service
        WHERE AHC.id_alojamiento = $1
    `;
    return db.manyOrNone(sql, [idAlojamiento]);
};

// Eliminar una relación entre un alojamiento y una categoría
AlojamientoHasServices.delete = (idAlojamiento, idService) => {
    const sql = `
        DELETE FROM alojamiento_has_services
        WHERE id_alojamiento = $1 AND id_service = $2
    `;
    return db.none(sql, [idAlojamiento, idService]);
};

module.exports = AlojamientoHasServices;


