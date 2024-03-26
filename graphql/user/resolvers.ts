import usertype from "../../controller/user";
//@ts-ignore
import {newuser, validateuser} from "../../controller/user"

const queries = {
    hello: ()=>{
        return 'Hello'
    }
}

const mutations = {
    createuser: async (_:any , payload:usertype)=>{
        const data = await newuser(payload);
        return data;
    },

    checkuser: async (_:any, payload: String)=> {
        //@ts-ignore
        const tok = payload.token
     
        const data = await validateuser(tok)
        return data
    }
}

export const resolvers = {queries, mutations};