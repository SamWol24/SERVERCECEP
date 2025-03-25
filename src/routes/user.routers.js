const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.get("/", controller.getAll);  // Obtener todos los usuarios
router.get("/:id", controller.getOne);  // Obtener un usuario por ID
router.post("/", controller.create);  // Crear un usuario
router.put("/:id", controller.update);  // Actualizar un usuario
router.delete("/:id", controller.deleted);  // Eliminar un usuario

module.exports = router;
