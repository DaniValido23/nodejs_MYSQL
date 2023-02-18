import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  deleteEmployees,
  updateEmployees,
  getOneEmployee,
} from "../controllers/employees.controllers.js";

const router = Router();

//Consultar
router.get("/employees", getEmployees);

//Añadir
router.post("/employees", createEmployees);

//Actualizar
router.patch("/employees/:id", updateEmployees);

//Borrar
router.delete("/employees/:id", deleteEmployees);

//Consulta un empleado
router.get("/employees/:id", getOneEmployee);

export default router;
