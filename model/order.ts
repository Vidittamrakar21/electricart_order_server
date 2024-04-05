import mongoose from "mongoose";
const Schema = mongoose.Schema;


const OrderSchema = new Schema ({
    uid: {type: String, require: true},
    pid: {type: [], default:[] ,require: true},
    totalprice: Number,
    totalitems: Number,
    paymentmode: String,
    paymentstatus: String,
    orderstatus: String,
    deliveryaddress: String,
    image: String,
    date: {type : Date, default: Date.now}


})

module.exports = mongoose.model('orders', OrderSchema);