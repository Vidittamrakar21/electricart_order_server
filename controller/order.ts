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
}


const neworder = async (payload: Ordertype) => {
    try {

        const {uid, pid, totalprice, totalitems, paymentmode , paymentstatus, orderstatus, deliveryaddress} = payload;

        const data = await Order.create({uid,pid,totalprice,totalitems,paymentmode,paymentstatus,orderstatus, deliveryaddress});
        return data
        
    } catch (error) {
        return(error)
    }
}


module.exports = {neworder}