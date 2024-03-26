import usertype from "../../controller/user";
//@ts-ignore
import {newuser} from "../../controller/user"

const queries = {
    hello: ()=>{
        return 'Hello'
    }
}

const mutations = {
    createuser: async (_:any , payload:usertype)=>{
        const data = await newuser(payload);
        return data;
    }
}

export const resolvers = {queries, mutations};