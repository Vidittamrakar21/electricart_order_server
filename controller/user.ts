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

type userinfo = {
    data: {
        name: string
        email: string
        id: string
        iat: number
        exp: number
    }
    accesstoken: string
}

const validateuser = async (token: string)=>{

    try {
        
        if(token){
           //@ts-ignore
            const check = jwt.verify(token, process.env.SECKEY)
            if(check){
                //@ts-ignore
                const token = jwt.sign({name: check.name, email: check.email, id: check.id}, process.env.SECKEY ,{expiresIn: "36h"})
                const data:userinfo = {data: check, accesstoken: token}
                return data;

            }
          
        }
        else{
            console.log("error happend")
        }
        
    } catch (error) {
        return(error)
    }
}

const accessuser = async (token: string)=> {
    try {
        
        if(token){
           //@ts-ignore
            const check = jwt.verify(token, process.env.SECKEY)
            if(check){
                //@ts-ignore
  
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

module.exports = {newuser, validateuser, accessuser}