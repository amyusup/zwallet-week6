const response = require("../Helper/Res");
const db = require("../Helper/db");
const authModel = require("../Model/Auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    authModel.Register(db, req.body, (err) => {
      if (err) {
        response("Email has been used ", res, 400);
      } else {
        response("Register Successfully", res, 201);
      }
    });
  },

  login: (req, res) => {
    authModel.getEmail(db, req.body.email, (err, result) => {
      if (err) {
        response("Can't get email", res, 400);
      } else {
        if (!result.length) {
          response("Username or password is incorrect!", res, 401);
        } else {
          if (bcrypt.compareSync(req.body.password, result[0]["password"])) {
            const token = jwt.sign(
              {
                userId: result[0].id,
                roleId: result[0].roleId,
              },
              process.env.SECRET_KEY
            );

            authModel.lastLogin(db, result[0].id, (err) => {
              if (err) {
                response("Failed to login", res, 500);
              } else {
                response(
                  {
                    message: "Successfully login",
                    token: token,
                  },
                  res,
                  200
                );
              }
            });
          } else {
            console.log("Username or password is incorrect!");
          }
        }
      }
    });
  },
};
