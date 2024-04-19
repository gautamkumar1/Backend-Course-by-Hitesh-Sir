import mongoose from "mongoose";
const orderItesmSchema = new mongoose.Schema({
    productID:{
        type:Number,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
    odderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    oderItesm:{
        type: [orderItesmSchema],
        required: true
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum:["PENDING","CANCELED","ACCPETED"],
        default: "PENDING"
    }
},{timestamps: true})

export const Order = mongoose.model('Order', orderSchema);