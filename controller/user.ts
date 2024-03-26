//@ts-ignore
import User from '../model/user'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

export default interface usertype {
    name: string
    email: string

}



const newuser = async (payload: usertype)=> {
    try {

        const {name , email} = payload;
       const exists = await User.findOne({email: email});
       if(exists){
        //@ts-ignore
        const token  = jwt.sign({name: name, email: email, id: exists._id}, process.env.SECKEY ,{expiresIn: "24h"})
        return token;
       }
       else{
        const data = await User.create({name, email});
        if(data){
             //@ts-ignore
        const token  = jwt.sign({name: name, email: email, id: exists._id}, "shhh" ,{expiresIn: "24h"})
        return token;
        }
       

       }
        

        
    } catch (error) {
        return(error)
    }
}


const validateuser = async (token: string)=>{

    try {
        //@ts-ignore
        const check = jwt.verify(token, process.env.SECKEY)
        console.log(check)
        
    } catch (error) {
        return(error)
    }
}

module.exports = {newuser, validateuser}