const express = require("express");
const router = express.Router();

const authHeader = require("../../../middlewares/auth");
const controller = require('../../../controllers/user-controller')


router.get("/", controller.getAllUsers)
router.get("/:id", controller.getUserById)
router.post("/", controller.createUser)
router.put("/:id", controller.updateById)
router.delete("/:id",authHeader, controller.deleteUser)



module.exports = router