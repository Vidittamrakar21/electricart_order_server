import Ordertype from "../../controller/order";
//@ts-ignore
import {neworder} from '../../controller/order'


const queries = {}

const mutations = {
    createorder: async (_:any, payload: Ordertype)=>{
        const data = await neworder(payload);
        
        return data._id
    }
}

export const resolvers = {queries, mutations};