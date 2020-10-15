const response = require("../Helper/Res");
const db = require("../Helper/db");
const mUsers = require("../Model/Users");

module.exports ={

    getUsersWhere: (req, res) => {
        // const {id} = req.params
        // mUsers.getUsersWhere(db, id, (err, result, fields) => {
        //   if (err) {
        //     // console.log(err.message);
        //     response.server("Internal server error. Try again.", res)
        //   } else {
        //     response.ok(result, res);
        //   }
        // });
        console.log("CONNECTED")
      },
}