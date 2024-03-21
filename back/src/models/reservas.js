import {Schema, model} from 'mongoose'



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
    idCliente: {
        type: Number,
        required: true,
        trim: true,
    },
    idVehiculo: {
        type: String,
        required: true,
        trim: true,
    },
    
},{
    timestamps:true
})



export default model('reservas',reservasSchema)