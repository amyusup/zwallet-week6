const response = require("../Helper/Res");
const db = require("../Helper/db");
const transferModel = require("../Model/Transfer");

module.exports = {
  getTransferData: (req, res) => {
    transferModel.getTransferData(db, (err, result) => {
      if (err) {
        response("Internal server error. Try again.", res, 500);
      } else {
        response(result, res, 200);
      }
    });
  },

  getTransferWhere: (req, res) => {
    transferModel.getTransferWhere(db, req.params.id, (err, result) => {
      if (err) {
        // console.log(err.message);
        response("Internal server error. Try again.", res, 500);
      } else {
        response(result, res, 200);
      }
    });
  },

  getTransferPagination: (req, res) => {
    // console.log(order)
    let { page, order } = req.query;

    if (!page) page = 1;
    else page = parseInt(page);

    let setOffset = (2 * page) - 2;

    transferModel.getTransferPagination(
      db,
      req.params.id,
      setOffset,
      order,
      (err, result) => {
        if (err) {
          // console.log(err.message);
          response("Internal server error. Try again.", res, 500);
        } else {
          response(result, res, 200);
        }
      }
    );
  },

  addTransferData: (req, res) => {
      transferModel.addTransferData(db, req.body, (err) => {
        if (err) {
          // console.log(err.message);
          response("Internal server error. Try again.", res, 500);
        } else {
          response("Successfully add Transfer Data", res, 201);
        }
      });
  },

  updateTransferData: (req, res) => {
      transferModel.updateTransferData(db, req.body, req.params.id, (err)=>{
        if(err){
          response("Internal server error. Try again.", res, 500)
        }else{
          response("Successfully update Transfer Data", res, 200)
        }
      })
  },

  deleteTransferData: (req, res) => {
    transferModel.deleteTransferData(db, req.params.id, (err) => {
      if (err) {
        // console.log(err.message);
        response("Internal server error. Try again.", res, 500);
      } else {
        response("Successfully delete Transfer Data", res, 200);
      }
    });
  },
};
