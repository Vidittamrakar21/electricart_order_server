//@ts-ignore
import User from '../model/user'

export default interface usertype {
    name: string
    email: string

}



const newuser = async (payload: usertype)=> {
    try {

        const {name , email} = payload;
        const data = await User.create({name, email});
        return data;

        
    } catch (error) {
        return(error)
    }
}

module.exports = {newuser}