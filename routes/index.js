const router = require("express").Router();

router.use("/v1/user", require("./Security/User"));

module.exports = router;