module.exports = {
  getTransferData: (db, callback) => {
    db.query(`SELECT * FROM vTransfer`, callback);
  },

  getTransferPagination: (db,id, offset,  order, callback) => {
    db.query(`SELECT * FROM vTransfer WHERE idSender=${id} OR idReceiver=${id} ORDER BY ${order}(date) DESC LIMIT 2 OFFSET ${offset}`, callback);
  },

  getTransferWhere: (db, id, callback) => {
    db.query(`SELECT * FROM vTransfer WHERE idSender=${id}`, callback);
  },

  addTransferData: (db, setData, callback)=>{
    db.query(
      `INSERT INTO transfer SET ?`, setData, callback)
  },
  
  updateTransferData: (db, setData, id, callback)=>{
    db.query(`UPDATE transfer SET ? WHERE id=${id} `,setData, callback)
  },
  
  deleteTransferData: (db, id, callback)=>{
    db.query(`DELETE FROM transfer WHERE id=${id}`, callback)
  },
};
