import {Schema, model} from 'mongoose'



const usuariosSchema = new Schema({
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
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type:Boolean,
        default:true
    },
    token:{
        type:String,
        default:null
    },

},{
    timestamps:true
})



export default model('usuarios',usuariosSchema)