const conexion = require("../database/db");

exports.save = (req, res) => {
  const nombre = req.body.nombre;
  const rol = req.body.rol;
  const tipo = req.body.tipo;
  conexion.query(
    "INSERT INTO empleado SET ?",
    { nombre: nombre, rol: rol, tipo: tipo },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/buscar");
      }
    }
  );
};

exports.update = (req, res) => {
  const nombre = req.body.nombre;
  const rol = req.body.rol;
  const tipo = req.body.tipo;
  const id = req.body.id;
  conexion.query(
    "UPDATE empleado SET ? WHERE id = ?",
    [{ nombre: nombre, rol: rol, tipo: tipo }, id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/buscar");
      }
    }
  );
};

exports.savem = (req, res) => {
  const id= req.body.id;
  const fecha = req.body.fecha;
  const entregas = req.body.entregas;
  const cubrio = req.body.cubrio;
  conexion.query(
    "INSERT INTO movimientos SET ?",
    { id:id,fecha:fecha,entregas:entregas,cubrio:cubrio },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/lista");
      }
    }
  );
};