import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Types.Schema.ObjectId,
        ref:"Category",
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    brand:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    
},{timestamps:true})

export const Product = mongoose.model('Product', productSchema);