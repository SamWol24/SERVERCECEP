const User = require("../models/user.model");
const response = require("../res/response");

// Obtener todos los usuarios
const getAll = async (req, res, next) => {
    try {
        const users = await User.findAll(); // Se elimina la relación con Rol

        const data = users.length > 0
            ? { total_registros: users.length, registros: users }
            : { message: "No hay usuarios registrados" };

        response.success(req, res, data, 200);
    } catch (error) {
        next(error);
    }
};

// Obtener un usuario por ID
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } });

        const data = user
            ? { registro: user }
            : { message: "No se encontró el usuario con ese ID" };

        response.success(req, res, data, 200);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const createdUser = await User.create(data);

        const message = createdUser.id
            ? { msg: "Usuario creado exitosamente", regId: createdUser.id }
            : { msg: "Error, usuario no creado" };

        response.success(req, res, message, 201);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedUser = await User.update(data, { where: { id } });

        if (updatedUser[0] === 0) {
            return response.success(req, res, { msg: "No se encontró el usuario" }, 404);
        }

        response.success(req, res, { msg: "Usuario actualizado exitosamente", regId: id }, 200);
    } catch (error) {
        next(error);
    }
};


// Exportar las funciones del controlador
module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleted
};
