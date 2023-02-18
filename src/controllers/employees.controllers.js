import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  
  const [rows] = await pool.query("SELECT * FROM employees");
  res.send(rows);
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO employees (name,salary) VALUES (?,?)",
    [name, salary]
  );

  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  const [result] = await pool.query(
    "UPDATE employees SET name = IFNULL(?,name) , salary = IFNULL(?,salary) WHERE id = ?",
    [name, salary, id]
  );

  result.affectedRows > 0
    ? res.send("Empleado actualizado")
    : res.send("No se encunetra el empleado");
};

export const deleteEmployees = async (req, res) => {
  const id = req.params.id;
  const [oldRows] = await pool.query("SELECT * FROM employees");
  await pool.query("DELETE FROM employees WHERE employees.id = ?", [id]);
  const [newRows] = await pool.query("SELECT * FROM employees");

  oldRows.length == newRows.length
    ? res.send("<h1>Usuario no encontradd</h1>")
    : res.send("Empleado eliminado");
};

export const getOneEmployee = async (req, res) => {
  const id = req.params.id;
  const [rows] = await pool.query(
    "SELECT * FROM employees WHERE employees.id = ?",
    [id]
  );

  rows.length > 0
    ? res.send(rows[0])
    : res.send("<h1>No se ha encontrado nada</h1>");
};
