module.exports = {
    Register: (db, setData, callback) =>{
        db.query(`INSERT INTO users SET ?`,setData, callback)
    },

    getEmail: (db, data, callback) =>{
        db.query(`SELECT * FROM users WHERE email=${db.escape(data)}`, callback)
    },
    
    lastLogin: (db, data,callback) =>{
        db.query(`UPDATE users SET lastLogin=now() WHERE id=${data}`,callback)
    },
    
    
}