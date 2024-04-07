 export const typeDefs = `
    type Order {
    _id: String  
    uid: String,
    pid: [String] ,
    totalprice: Float,
    totalitems: Float,
    paymentmode: String,
    paymentstatus: String,
    orderstatus: String,
    deliveryaddress: String,
    image: String,
    deldate: Float
    }
    
 `