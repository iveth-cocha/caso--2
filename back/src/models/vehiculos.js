import mongoose, {Schema,model} from 'mongoose'
//import {Schema, model} from 'mongoose'



const vehiculosSchema = new Schema({
    marca: {
        type: String,
        required: true,
        trim: true,
    }, 
    modelo: {
        type: String,
        required: true,
        trim: true,
    },
    anioFabricacion: {
        type: String,
        required: true,
        trim: true,
    },
    placa: {
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        required: true,
        trim: true,
    },
    tipoVehiculo: {
        type: String,
        required: true,
        trim: true,
    },
    kilometraje: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    reservas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'reservas'
        }
    ],
},{
    timestamps:true
})



export default model('vehiculos',vehiculosSchema)