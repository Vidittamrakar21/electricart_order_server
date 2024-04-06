"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const OrderSchema = new Schema({
    uid: { type: String, require: true },
    pid: { type: [], default: [], require: true },
    totalprice: Number,
    totalitems: Number,
    paymentmode: String,
    paymentstatus: String,
    orderstatus: String,
    deliveryaddress: String,
    image: String,
    date: { type: Date, default: Date.now }
});
module.exports = mongoose_1.default.model('orders', OrderSchema);
