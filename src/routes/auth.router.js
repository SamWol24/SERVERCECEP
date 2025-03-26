const router = require("express").Router();
const controller = require("../controllers/auth.controller");

router.get("/", controller.getAllAuths);
router.get("/:id", controller.getOneAuth);
router.post("/", controller.createAuth);
router.put("/:id", controller.updateAuth);
router.delete("/:id", controller.deleteAuth);

module.exports = router;