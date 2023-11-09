import { Router } from "express";
import { GetArticulosByCantidadController, GetArticulosByNameController,GetArticulosByCodeController,GetClasesController,InsertArticuloController,InsertClaseController,InsertUsuarioController,LoginCheckController,UpdateArticuloController,BorrarArticuloController,GetArticulosByClaseController } from "../Controllers/controller.js";

const router = new Router();

//router.get("/", getAllArticuloController)
//router.post("/", addArticuloController)
router.post("/Login",)
router.post("/Logout",)
router.post("/ListarEmpleados",)
router.put("/EditarEmpleado",)
router.get("/GetPuestos",)
router.get("/GetDepartamentos",)
router.get("/GetIdentificaciones",)
router.post("/InsertarEmpleado",)
router.post("/Impersonar",)
router.delete("/Eliminar Empleado",)
router.post("/PlanillaSemanal",)
router.post("/PlanillaMensual",)
router.post("/DejarImpersonar",)


export default router