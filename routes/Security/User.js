const router = require("express").Router();
const UserController = require("../../controllers/Security/User");

router.post("/", UserController.login);

module.exports = router;