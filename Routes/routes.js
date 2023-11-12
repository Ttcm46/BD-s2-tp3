import { Router } from "express";
import { LoginController, LogoutController, ListarEmpleadosController, EditarEmpleadoController, GetPuestosController, GetDepartamentosController, GetIdentificacionesController, InsertarEmpleadoController, 
    ImpersonarController, EliminarEmpleadoController, PlanillaSemanalController, PlanillaMensualController, DejarImpersonarController } from "../Controllers/controller.js";

const router = new Router();

//router.get("/", getAllArticuloController)
//router.post("/", addArticuloController)
router.post("/Login",LoginController)
router.post("/Logout",LogoutController)
router.post("/ListarEmpleados",ListarEmpleadosController)
router.put("/EditarEmpleado",EditarEmpleadoController)
router.get("/GetPuestos",GetPuestosController)
router.get("/GetDepartamentos",GetDepartamentosController)
router.get("/GetIdentificaciones",GetIdentificacionesController)
router.post("/InsertarEmpleado",InsertarEmpleadoController)
router.post("/Impersonar",ImpersonarController)
router.delete("/EliminarEmpleado",EliminarEmpleadoController)
router.post("/PlanillaSemanal",PlanillaSemanalController)
router.post("/PlanillaMensual",PlanillaMensualController)
router.post("/DejarImpersonar",DejarImpersonarController)


export default router