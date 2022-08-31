const STRINGS = require("../../utils/texts");
const response = require("../../utils/response");
const Validations = require("../../validators");
const User = require("../../models/Security/User");
const CustomError = require("../../utils/customError");

class userController {
  async login(req, res) {
    try {
      const user = await User.findOne({ userName: req.body.userName, userPassword: req.body.userPassword });
      if (!user) throw res.status(500).send(response(STRINGS.ERRORS.Authentication, err, false))
      res.status(200).send(response(STRINGS.TEXTS.UserLogin, user));
    } catch (err) {
      res.status(500).send(response(STRINGS.ERRORS.Authentication, err, false))
    }

  }
}

module.exports = new userController();
