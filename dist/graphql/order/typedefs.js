"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
    type Order {
    uid: String,
    pid: [String] ,
    totalprice: Float,
    totalitems: Float,
    paymentmode: String,
    paymentstatus: String,
    orderstatus: String,
    deliveryaddress: String,
    image: String,
    }
    
 `;
