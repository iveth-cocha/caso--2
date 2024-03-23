import mongoose, {Schema,model} from 'mongoose'
//import {Schema, model} from 'mongoose'

const reservasSchema = new Schema({
    codigo: {
        type: Number,
        required: true,
        trim: true,
    }, 
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    idCliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'clientes'
    },
    idVehiculo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'vehiculos'
    }
    
    
},{
    timestamps:true
})



export default model('reservas',reservasSchema)