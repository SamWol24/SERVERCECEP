const Auth = require("../models/auth.model");
const response = require("../res/response");

const getAllAuths = async (req, res, next) => {
    try {
        const auths = await Auth.findAll();
        let data = "";
        if (auths.length > 0) {
            data = {
                total_registros: auths.length,
                registros: auths
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

const getOneAuth = async (req, res, next) => {
    try {
        const id = req.params.id;
        const auth = await Auth.findOne({ where: { id } });
        let data = "";
        if (auth) {
            data = {
                registro: auth
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

const createAuth = async (req, res, next) => {
    try {
        const data = req.body;
        await Auth.sync();
        const createdAuth = await Auth.create(data);
        let message;
        if (createdAuth.id) {
            message = {
                msg: "Registro efectuado exitosamente",
                regId: createdAuth.id
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

const updateAuth = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const updatedAuth = await Auth.update(data, { where: { id } });
        let message = {
            msg: "Registro actualizado exitosamente",
            regId: id
        };
        response.success(req, res, message, 200);
    } catch (error) {
        next(error);
    }
};

const deleteAuth = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteAuth = await Auth.destroy({ where: { id } });
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
    getAllAuths,
    getOneAuth,
    createAuth,
    updateAuth,
    deleteAuth
};