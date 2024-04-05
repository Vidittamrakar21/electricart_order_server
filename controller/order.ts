//@ts-ignore
import Order from '../model/order'

export default interface Ordertype {
    uid:  string,
    pid: [string],
    totalprice: number,
    totalitems: number,
    paymentmode: string,
    paymentstatus: string,
    orderstatus: string,
    deliveryaddress: string,
    image: string
}


const neworder = async (payload: Ordertype) => {
    try {

        const {uid, pid, totalprice, totalitems, paymentmode , paymentstatus, orderstatus, deliveryaddress, image} = payload;

        const data = await Order.create({uid,pid,totalprice,totalitems,paymentmode,paymentstatus,orderstatus, deliveryaddress , image});
        return data
        
    } catch (error) {
        return(error)
    }
}

const findorder = async (uid: string) =>{
    try {

        const data  = await Order.find({uid: uid}).sort({date: -1})

        return data
        
    } catch (error) {
        
        return error
    }
}


module.exports = {neworder, findorder}