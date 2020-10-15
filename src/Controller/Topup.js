const response = require("../Helper/Res");
const db = require("../Helper/db");
const topupModel = require("../Model/Topup");

module.exports = {
  getInstructions: (req, res) => {
    topupModel.getInstructions(db, (err, result) => {
      if (err) {
        // console.log(err.message);
        response("Internal server error. Try again.", res, 500);
      } else {
        response(result, res, 200);
      }
    });
  },

  addInstructions: (req, res) => {
      topupModel.addInstructions(db, req.body, (err) => {
        if (err) {
          // console.log(err.message);
          response("Step has been used", res, 400);
        } else {
          response("successfully add instruction", res, 201);
        }
      });
  },

  updateIntructions: (req, res) => {
      topupModel.updateIntructions(db,req.body, req.params.id, (err ) => {
          if (err) {
            // console.log(err.message);
            response("Step has been used", res, 500);
          } else {
            response("successfully update instruction", res, 200);
          }
    })
  },

  deleteIntructions: (req, res) => {
    topupModel.deleteIntructions(db, req.params.id, (err) => {
      if (err) {
        // console.log(err.message);
        response("Internal server error. Try again.", res, 500);
      } else {
        response("Successfully delete instructions", res, 200);
      }
    });
  },
}