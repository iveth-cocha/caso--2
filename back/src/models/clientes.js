import {Schema, model} from 'mongoose'



const clientesSchema = new Schema({
    cedula: {
        type: Number,
        required: true,
        trim: true,
    }, 
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    ciudad: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    },
    fechaNacimiento: {
        type: String,
        required: true,
        trim: true,
    },

},{
    timestamps:true
})



export default model('clientes',clientesSchema)