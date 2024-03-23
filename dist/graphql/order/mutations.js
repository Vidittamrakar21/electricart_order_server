"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `
    createorder(uid: String,
        pid: [String] ,
        totalprice: Float,
        totalitems: Float,
        paymentmode: String,
        paymentstatus: String,
        orderstatus: String,
        deliveryaddress: String,): String
`;
