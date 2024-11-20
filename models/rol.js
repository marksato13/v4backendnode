//------------------- Importa la configuración de la base de datos -------------------
const db = require('../config/config');

const Rol = {};

//------------------- Crea una relación entre un usuario y un rol -------------------
Rol.create = (id_user, id_rol) => {
    const sql = `
    INSERT INTO
        user_has_roles(
            id_user,
            id_rol,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4)
    `;

    //------------------- Ejecuta la consulta para insertar la relación -------------------
    return db.none(sql, [
        id_user,
        id_rol,
        new Date(), // Fecha de creación
        new Date()  // Fecha de actualización
    ]);
}

//------------------- Exporta el objeto Rol para su uso en otros módulos -------------------
module.exports = Rol;
