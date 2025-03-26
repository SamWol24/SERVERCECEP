const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getOneUser);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;