import usertype from "../../controller/user";
//@ts-ignore
import {newuser, validateuser, accessuser, updateview, finduser} from "../../controller/user"

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
    },

    giveaccess: async (_: any, payload: String)=>{
         //@ts-ignore
         const tok = payload.token
     
         const data = await accessuser(tok)
         return data;
    },

    recentpost: async (_: any, payload: Object)=>{
        console.log(payload)
        //@ts-ignore
        const uid = payload.uid
        //@ts-ignore
        const pid = payload.pid

        const data = await updateview(uid, pid);
        return data;
    },

    findoneuser: async (_: any, payload: Object)=>{
        //@ts-ignore
        const uid = payload.uid

        const data = await finduser(uid);
        return data;
    }
}

export const resolvers = {queries, mutations};