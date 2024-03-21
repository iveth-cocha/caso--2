import vehiculos from '../models/vehiculos.js'; 
import mongoose from "mongoose"

const listarVehiculos = async(req,res)=>{
    const Vehiculo = await vehiculos.find().select("-createdAt -updatedAt -__v")
    res.status(200).json(Vehiculo)
}
const detalleVehiculos = async (req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el vehiculo ${id}`});
    const Vehiculo = await vehiculos.findById(id).select("-createdAt -updatedAt -__v")
    res.status(200).json(Vehiculo)
}
const registrarVehiculos = async (req,res)=>{
    const { marca, modelo, anioFabricacion,placa, color, tipoVehiculo, kilometraje, descripcion } = req.body;
    const nuevoVehiculo = new vehiculos({ marca, modelo, anioFabricacion, placa, color, tipoVehiculo, kilometraje, descripcion });
    await nuevoVehiculo.save();
    res.status(201).json({  mensaje: "Vehículo registrado exitosamente", vehiculo: nuevoVehiculo});
}
const actualizarVehiculos = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el vehiculo ${id}`});
    await vehiculos.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del vehiculo"})
}
const eliminarVehiculos = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el vehiculo ${id}`})
    const vehiculoEliminado = await vehiculos.findByIdAndDelete(id);
    res.status(200).json({msg:"vehiculo eliminado exitosamente"})
}

export {
    listarVehiculos,
    detalleVehiculos,
    registrarVehiculos,
    actualizarVehiculos,
    eliminarVehiculos
}