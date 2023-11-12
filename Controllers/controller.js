import { response, request } from "express";
import { LoginRepo, LogoutRepo, ListarEmpleadosRepo, EditarEmpleadoRepo, GetPuestosRepo, GetDepartamentosRepo, GetIdentificacionesRepo, InsertarEmpleadoRepo, ImpersonarRepo, EliminarEmpleadoRepo, PlanillaSemanalRepo, PlanillaMensualRepo, DejarImpersonarRepo } from "../Repo/repo.js";


export const LoginController = async(req = request, res = response) => {
    const {Username, Password} = req.body.data
    const result = await LoginRepo(Username, Password)
    
    res.status(200).json({
        result
    })
}
export const LogoutController = async(req = request, res = response) => {
    const {Usuario} = req.body.data
    const result = await LogoutRepo(Usuario)
    
    res.status(200).json({
        result
    })
}
export const ListarEmpleadosController = async(req = request, res = response) => {
    const {Usuario,Filtro} = req.body.data
    const result = await ListarEmpleadosRepo(Usuario,Filtro)
    
    res.status(200).json({
        result
    })
}
export const EditarEmpleadoController = async(req = request, res = response) => {
    const {Usuario,
        idObjecive,NombreNuevo,
        TipoIdNuevo, ValorID, FechaNacimiento, IdPuesto,
        IdDepartamento} = req.body.data
    const result = await EditarEmpleadoRepo(Usuario,
        idObjecive,NombreNuevo,
        TipoIdNuevo, ValorID, FechaNacimiento, IdPuesto,
        IdDepartamento)
    
    res.status(200).json({
        result
    })
}
export const GetPuestosController = async(req = request, res = response) => {

    const result = await GetPuestosRepo()
    
    res.status(200).json({
        result
    })
}
export const GetDepartamentosController = async(req = request, res = response) => {

    const result = await GetDepartamentosRepo()

    res.status(200).json({
        result
    })
}
export const GetIdentificacionesController = async(req = request, res = response) => {

    const result = await GetIdentificacionesRepo()
    
    res.status(200).json({
        result
    })
}
export const InsertarEmpleadoController = async(req = request, res = response) => {
    const {Usuario, Nombre, TipoId,
        ValorID, FechaNacimiento,
        IdPuesto, IdDepartamento} =  req.body
    console.log(req.body)
    const result = await InsertarEmpleadoRepo(Usuario, Nombre, TipoId,
        ValorID, FechaNacimiento,
        IdPuesto, IdDepartamento)
    
    res.status(200).json({
        result
    })
}
export const ImpersonarController = async(req = request, res = response) => {
    const {Usuario, IDObjetivo} = req.body
    console.log(req.body)
    const result = await ImpersonarRepo(Usuario, IDObjetivo)
    
    res.status(200).json({
        result
    })
}
export const EliminarEmpleadoController = async(req = request, res = response) => {
    
    const {Usuario,
        IDEmpleadoAEliminar} = req.body
    console.log(req.body)
    const result = await EliminarEmpleadoRepo(Usuario,
        IDEmpleadoAEliminar)
    
    res.status(200).json({
        result
    })
}
export const PlanillaSemanalController = async(req = request, res = response) => {
    const {Usuario} = req.body
    const result = await PlanillaSemanalRepo(Usuario)
    
    res.status(200).json({
        result
    })
}
export const PlanillaMensualController = async(req = request, res = response) => {
    const {Usuario} = req.body
    const result = await PlanillaMensualRepo(Usuario)
    
    res.status(200).json({
        result
    })
}
export const DejarImpersonarController = async(req = request, res = response) => {
    const {Usuario,
        IdUsuarioEmpersonado} = req.body
    const result = await DejarImpersonarRepo(Usuario,
        IdUsuarioEmpersonado)
    
    res.status(200).json({
        result
    })
}
/*
export const getArticuloController = async (req = request, res = response) => {
    const {codigo} = req.body

    const result = await getArticulo(codigo)
    
    res.status(200).json({
        result
    })
 }
 


export const updateArticuloController = async (req = request, res = response) => {
    const {name, price} = req.body

    const result = await updateArticulo(name, price)
    
    res.status(200).json({
        result
    })
 }

export const deleteArticuloController = async (req = request, res = response) => {
    const {codigo} = req.body

    const result = await deleteArticulo(codigo)
    
    res.status(200).json({
        result
    })
 }
 */