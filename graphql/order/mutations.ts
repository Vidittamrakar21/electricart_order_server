export const mutations = `
    createorder(uid: String,
        pid: [String] ,
        totalprice: Float,
        totalitems: Float,
        paymentmode: String,
        paymentstatus: String,
        orderstatus: String,
        deliveryaddress: String,
        image: String, deldate: Float): String,
        

    orderfind(uid: String): [Order]    
`