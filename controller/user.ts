//@ts-ignore
import User from '../model/user'
import jwt from 'jsonwebtoken'
export default interface usertype {
    name: string
    email: string

}



const newuser = async (payload: usertype)=> {
    try {

        const {name , email} = payload;
       const exists = await User.findOne({email: email});
       if(exists){
        return exists;
       }
       else{
        const data = await User.create({name, email});
        return data;

       }
        

        
    } catch (error) {
        return(error)
    }
}


const validateuser = async ()=>{
    const check = jwt.verify("AMf-vBzErHLUSsfGPs-3PTjX1BHI3JzQZQDcbJFz57Cpi0p6FMKwEyF5cxv55huFQ4AQjBZb89q0iZUK3jAg2DGDH-U72oNN1uO5a_zjQ1mB3rgXxCR99xF4ifEVTaXHnut9BMBoPwMfgDfcEu07ncSBjsdIxxbJ-D48J0P3GJa1yeAx68sKUV-yZNdkFHh_o0fSt95wSFKtG_b-P7iUY8IT6_yRLkAupUH4qR-nGg7U6_T5qiCqLQZ13Q0-wq5VfjBxcC7r3QGO0IZpnqlLQ9UR9E9NLDWAucPbOLGEa3g5mi_J7fjK8dw84afm90HTGAjL0t5T0_uLZwcQTokBXSiUa8f2ga2Z53t-HwTphzJPt0uPKxXxoTKUP6eSxoUdCdxy3aGfGwOHkpwr4dVNreoxDE3pXHZnKNeZw2tVBikTXGSm7ChuZ2Xz8uVlsS7RtAgB5Hrbf4UJ","shh");
    console.log(check)
}

module.exports = {newuser, validateuser}