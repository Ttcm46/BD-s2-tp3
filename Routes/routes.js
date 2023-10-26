import { Router } from "express";
import { GetArticulosByCantidadController, GetArticulosByNameController,GetArticulosByCodeController,GetClasesController,InsertArticuloController,InsertClaseController,InsertUsuarioController,LoginCheckController,UpdateArticuloController,BorrarArticuloController,GetArticulosByClaseController } from "../Controllers/controller.js";

const router = new Router();

//router.get("/", getAllArticuloController)
//router.post("/", addArticuloController)
router.post("/GetArticulosByCantidad", GetArticulosByCantidadController)
router.post("/GetArticulosByName", GetArticulosByNameController)
router.post("/GetArticulosByCode",GetArticulosByCodeController)
router.post("/GetArticulosByClase",GetArticulosByClaseController)
router.get("/GetClases", GetClasesController)
router.post("/InsertArticulo", InsertArticuloController)
router.post("/InsertClase", InsertClaseController)
router.post("/InsertUsuario", InsertUsuarioController)
router.post("/LoginCheck", LoginCheckController)
router.put("/UpdateArticulo", UpdateArticuloController)
router.delete("/BorrarArticulo", BorrarArticuloController)
export default router