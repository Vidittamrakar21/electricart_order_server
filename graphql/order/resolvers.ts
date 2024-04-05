import Ordertype from "../../controller/order";
//@ts-ignore
import {neworder, findorder} from '../../controller/order'


const queries = {}

const mutations = {
    createorder: async (_:any, payload: Ordertype)=>{
        const data = await neworder(payload);
        
        return data._id
    },

    orderfind: async (_:any, payload: String)=>{
          //@ts-ignore
          const uid = payload.uid

          const data = await findorder(uid);
        
          return data


    }


}

export const resolvers = {queries, mutations};