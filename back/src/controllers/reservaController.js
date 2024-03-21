const detalleReserva = (req,res)=>{
    res.send("Detalle del tratamiento")
}
const registrarReserva = (req,res)=>{
    res.send("Registrar tratamiento")
}
const actualizarReserva = (req,res)=>{
    res.send("Actualizar tratamiento")
}
const eliminarReserva = (req,res)=>{
    res.send("Eliminar tratamiento")
}
const listarReserva = (req,res)=>{
    res.send("listar estado del tratamiento")
}

export {
    detalleReserva,
    registrarReserva,
    actualizarReserva,
    eliminarReserva,
    listarReserva
    
}