module.exports = {
  getUsers: (db, callback) => {
    db.query(`SELECT * FROM vUsers`, callback);
  },

  getUsersLike: (db, key, callback) => {
    db.query(`SELECT id, firstName, lastName, name, phone, email, balance, photo FROM vUsers WHERE name LIKE '%${key}%' ORDER BY name ASC`, callback);
  },

  getUsersWhere: (db, id, callback) => {
    db.query(`SELECT * FROM vUsers WHERE id=${id}`, callback);
  },

  addUsers: (db, data, callback)=>{
    db.query(
      `INSERT INTO users SET ?`, data, callback)
  },
  
  updateUsers: (db, setData, id, callback)=>{
    db.query(`UPDATE users SET ? WHERE id=${id} `,setData, callback)
  },
  
  deleteUsers: (db, id, callback)=>{
    db.query(`DELETE FROM users WHERE id=${id}`, callback)
  },
};
