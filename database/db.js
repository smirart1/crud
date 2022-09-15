const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'groot',
    database: 'coppel'
})

conexion.connect((error) => {
    if(error){
        console.error('El error es '+error);
        return
    }
    console.log('Conectado')
})

module.exports = conexion;