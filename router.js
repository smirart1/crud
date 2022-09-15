const express = require("express");
const router = express.Router();

const conexion = require("./database/db");

router.get("/", (req, res) => {
  conexion.query("SELECT * FROM empleado", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("index", { results: results });
    }
  });
});

//Ruta para mostrar empleados
router.get("/buscar", (req, res) => {
  conexion.query("SELECT * FROM empleado", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("buscar", { results: results });
    }
  });
});

//Ruta para editar empleado
router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM empleado WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("edit", { empleado: results[0]});
      }
    }
  );
});

//Ruta para eliminar empleado
router.get("/borrar/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("DELETE FROM empleado WHERE id=?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.redirect("/");
    }
  });
});

//Mostrar los valores de empleado en la captura de movimientos 
router.get("/captura/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM empleado WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("captura", { empleado: results[0] });
      }
    }
  );
});

//Ruta para mostrar las capturas de movimientos
router.get("/lista", (req, res) => {
  conexion.query("SELECT * FROM movimientos", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("lista", { results: results });
    }
  });
});

router.get("/sueldo", (req, res) => {
  res.render("sueldo")
});

const crud = require("./controllers/crud");
const { render } = require("ejs");
router.post("/save", crud.save);
router.post("/update", crud.update);
router.post("/savem", crud.savem);

module.exports = router;
