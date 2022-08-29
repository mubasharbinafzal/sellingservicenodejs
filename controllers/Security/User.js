const STRINGS = require("../../utils/texts");
const response = require("../../utils/response");
const Validations = require("../../validators");
const User = require("../../models/Security/User");
const CustomError = require("../../utils/customError");

class userController {
  async login(req, res) {
    const validatedData = Validations.user.validate(req.body);
    if (validatedData.error) throw res.status(422).send(validatedData);
    //  // find In Db 
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      res.status(422).send("user not found");
    } else {
      user && user.userPassword == req.body.userPassword ?
        res.status(200).send(response(STRINGS.TEXTS.UserLogin, user)) :
        res.status(422).send("password not match");
    }

  }
}

module.exports = new userController();