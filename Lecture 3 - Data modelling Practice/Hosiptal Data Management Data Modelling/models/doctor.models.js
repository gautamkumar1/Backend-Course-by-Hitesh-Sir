import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
   city:{
    type:String,
    required:true
   },
   pincode:{
    type:Number,
    required:true
   }
},{timestamps:true})

export const Doctor = mongoose.model('Doctor', doctorSchema);