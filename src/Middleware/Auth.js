const express = require("express");
const usersRouter = express.Router();
const usersController = require("../Controller/Users");
const jwt = require("jsonwebtoken");
module.exports = {
  isConsumer: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      req.userData = decode;
      if (req.userData["roleId"] == 200) {
        next();
      } else {
        return res.status(401).send("Your session is not valid!");
      }
    } catch (err) {
      return res.status(401).send("Your session is not valid!");
    }
  },

  isConsumerCompareId: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      req.userData = decode;
      if (req.userData["roleId"] == 200) {
        if (req.userData["userId"] == req.params.id) {
          next();
        } else {
          return res.status(401).send("Your session is not valid! ");
        }
      } else {
        return res.status(401).send("Your session is not valid!");
      }
    } catch (err) {
      return res.status(401).send("Your session is not valid!");
    }
  },

  isConsumerBeforePost: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      req.userData = decode;
      if (req.userData["roleId"] == 200) {
        if (req.userData["userId"] == req.body.idSender) {
          next();
        } else {
          return res.status(401).send("Your session is not valid! ");
        }
      } else {
        return res.status(401).send("Your session is not valid!");
      }
    } catch (err) {
      return res.status(401).send("Your session is not valid!");
    }
  },

  isAdmin: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      req.userData = decode;
      if (req.userData["roleId"] == 100) {
        next();
      } else {
        // console.log(req.userData["role"])
        return res.status(401).send("Your session is not valid!");
      }
    } catch (err) {
      // console.log(err)
      return res.status(401).send("Your session is not valid!");
    }
  },
};
