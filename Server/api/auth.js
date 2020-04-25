const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const { check, validationResult } = require("express-validator/check");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");


//@route POST api/auth
//@desc Authentcate User
//@access Public
router.post(
  "/",
  [
    check("email", "Please enter a valid Email").isEmail(),
    check("password", "Please enter a password ").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //See if user exists

      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;

          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
