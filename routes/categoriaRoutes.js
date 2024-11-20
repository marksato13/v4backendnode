const CategoriaController = require('../controllers/categoriaController');

module.exports = (app) => {
    // Crear una nueva categoría
    app.post('/api/categorias/create', CategoriaController.create);

    // Obtener todas las categorías
    app.get('/api/categorias/getAll', CategoriaController.getAll);

    // Obtener una categoría por su ID
    app.get('/api/categorias/:id', CategoriaController.findById);

    // Actualizar una categoría
    app.put('/api/categorias/update/:id', CategoriaController.update);

    // Eliminar una categoría
    app.delete('/api/categorias/delete/:id', CategoriaController.delete);
};
