const User = require("../models/user.model");
const response = require("../res/response");

// Obtener todos los usuarios
const getAllUser = async (req, res, next) => {
    try {
        const users = await User.findAll(); 
         
        let data = "";
        if (users.length > 0) {
            data = {
                total_registros: users.length,
                registros: users
            };
        } else {
            data = {
                message: "No hay registros en la tabla"
            };
        }
        response.success(req, res, data, 200);
    } catch (error) {
        next(error);
    }
};

const getOneUser = async (req, res, next) => {
    try {
        const { id } = req.params.id;
        const user = await User.findOne({ where: { id } });
        let data = "";
        if (user) {
            data = {
                registro: user
            };
        } else {
            data = {
                message: "No hay registro con ese id"
            };
        }
        response.success(req, res, data, 200);
    } catch (error) {
        next(error);
    }
};


const createdUser = async (req, res, next) => {
    try {
        const data = req.body;
        await User.sync();
        const createdUser = await User.create(data);
        let message;
        if (createdUser.id) {
            message = {
                msg: "Registro efectuado exitosamente",
                regId: createdUser.id
            };
        } else {
            message = {
                msg: "Error, usuario no creado"
            };
        }
        response.success(req, res, message, 201);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const updatedUser = await User.update(data, { where: { id } });
        let message = {
            msg: "Registro actualizado exitosamente",
            regId: id
        };
        response.success(req, res, message, 200);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.destroy({ where: { id } });
        let message = {
            msg: "Registro eliminado exitosamente",
            regId: id
        };
        response.success(req, res, message, 200);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};
