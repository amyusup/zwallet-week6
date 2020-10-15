const response = require("../Helper/Res");
const db = require("../Helper/db");
const usersModel = require("../Model/Users");
const bcrypt = require("bcrypt");
const upload = require("../Helper/Upload");

module.exports = {
  getUsers: (req, res) => {
    usersModel.getUsers(db, (err, result) => {
      if (err) {
        response(err, res, 500);
      } else {
        response(result, res, 200);
      }
    });
  },

  getUsersWhere: (req, res) => {
    usersModel.getUsersWhere(db, req.params.id, (err, result) => {
      if (err) {
        response("Internal server error. Try again.", res);
      } else {
        response(result, res, 200);
      }
    });
  },

  getUsersLike: (req, res) => {
    usersModel.getUsersLike(db, req.query.name, (err, result) => {
      if (err) {
        response("Internal server error. Try again.", res, 500);
      } else {
        response(result, res, 200);
      }
    });
  },

  addUsers: (req, res) => {
    if (req.body.password) req.body.password = bcrypt.hashSync(req.body.password, 10);
    
    usersModel.addUsers(db, req.body, (err) => {
      if (err) {
        response("Email has been used", res, 400);
      } else {
        response("successfully add Users", res, 201);
      }
    });
  },

  updateUsers: (req, res) => {

    upload(req, res, (err) => {
      if (err) {
        response("Only images are allowed", res, 500);
      } else {
        if (req.files[0]) req.body.photo = req.files[0].filename;
        if (req.body.password) req.body.password = bcrypt.hashSync(req.body.password, 10);

        usersModel.updateUsers(db, req.body, req.params.id, (err) => {
          if (err) {
            console.log(err);
            response(err.message, res, 500);
          } else {
            response("Successfully update users", res, 200);
          }
        });

      
      }
    });
  },

  deleteUsers: (req, res) => {
    usersModel.deleteUsers(db, req.params.id, (err) => {
      if (err) {
        response("Internal server error. Try again.", res, 500);
      } else {
        response("Successfully delete Users", res, 200);
      }
    });
  },
};
