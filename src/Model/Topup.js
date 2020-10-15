module.exports = {
  getInstructions: (db, callback) => {
    db.query(`SELECT * FROM topup ORDER BY step ASC`, callback);
  },

  getInstructionsWhere: (db, id, callback) => {
    db.query(`SELECT * FROM topup WHERE id=${id}`, callback);
  },

  addInstructions: (db, setData, callback)=>{
    db.query(`INSERT INTO topup SET ?`, setData, callback)
  },
  
  updateIntructions: (db, setData, id, callback)=>{
    db.query(`UPDATE topup SET ? WHERE id=${id} `, setData, callback)
  },
  
  deleteIntructions: (db, id, callback)=>{
    db.query(`DELETE FROM topup WHERE id=${id}`, callback)
  },
};
