//@ts-ignore
import User from '../model/user'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { json } from 'express';
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
        const token  = jwt.sign({name: name, email: email, id: exists._id}, process.env.SECKEY ,{expiresIn: "3h"})
        return token;
       }
       else{
        const data = await User.create({name, email});
        if(data){
             //@ts-ignore
        const token  = jwt.sign({name: name, email: email, id: exists._id}, process.env.SECKEY ,{expiresIn: "3h"})
        return token;
        }
       

       }
        

        
    } catch (error) {
        return(error)
    }
}


const validateuser = async (token: string)=>{

    try {
        
        if(token){
           //@ts-ignore
            const check = jwt.verify(token, process.env.SECKEY)
            if(check){
                return check;

            }
          
        }
        else{
            console.log("error happend")
        }
        
    } catch (error) {
        return(error)
    }
}

module.exports = {newuser, validateuser}