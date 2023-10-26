import { response, request } from "express";
import { GetArticulosByCantidadRepo, GetArticulosByNameRepo, GetArticulosByCodeRepo,GetClasesRepo,InsertArticuloRepo,InsertClaseRepo,InsertUsuarioRepo,LoginCheckRepo,UpdateArticuloRepo,BorrarArticuloRepo,GetArticulosByClassRepo } from "../Repo/repo.js";


export const GetArticulosByCantidadController = async(req = request, res = response) => {
    const {amount} = req.body.data
    const result = await GetArticulosByCantidadRepo(amount)
    
    res.status(200).json({
        result
    })
}
export const GetArticulosByNameController = async(req = request, res = response) => {
    const {name} = req.body.data
    const result = await GetArticulosByNameRepo(name)
    
    res.status(200).json({
        result
    })
}
export const GetArticulosByCodeController = async(req = request, res = response) => {
    const {code} = req.body.data
    const result = await GetArticulosByCodeRepo(code)
    
    res.status(200).json({
        result
    })
}
export const GetArticulosByClaseController = async(req = request, res = response) => {
    const {code} = req.body.data
    const result = await GetArticulosByClassRepo(code)
    
    res.status(200).json({
        result
    })
}
export const GetClasesController = async(req = request, res = response) => {

    const result = await GetClasesRepo()
    
    res.status(200).json({
        result
    })
}
export const InsertArticuloController = async(req = request, res = response) => {
    console.log(req.body)
    const {name,price,code,clase} = req.body
    const result = await InsertArticuloRepo(name,price,code,clase)

    res.status(200).json({
        result
    })
}
export const InsertClaseController = async(req = request, res = response) => {
    const {Class_name} =  req.body
    console.log(req.body)

    const result = await InsertClaseRepo(Class_name)
    
    res.status(200).json({
        result
    })
}
export const InsertUsuarioController = async(req = request, res = response) => {
    const {username,password} =  req.body
    console.log(req.body)
    const result = await InsertUsuarioRepo(username,password)
    
    res.status(200).json({
        result
    })
}
export const LoginCheckController = async(req = request, res = response) => {
    const {username,password} = req.body
    console.log(req.body)
    const result = await LoginCheckRepo(username,password)
    
    res.status(200).json({
        result
    })
}
export const UpdateArticuloController = async(req = request, res = response) => {
    
    const {target,name,price,code,clase} = req.body
    console.log(req.body)
    const result = await UpdateArticuloRepo(target,name,price,code,clase)
    
    res.status(200).json({
        result
    })
}
export const BorrarArticuloController = async(req = request, res = response) => {
    const {code} = req.body
    const result = await BorrarArticuloRepo(code)
    
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