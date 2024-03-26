import express, {Express, Request,Response} from 'express'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from "@apollo/server/express4";
import creategqlserver from './graphql';
//@ts-ignore
import apirouter from './routes/test'
import mongoose from 'mongoose'
import cors from "cors";
import dotenv from 'dotenv'
import morgan from "morgan"
dotenv.config();
import jwt from 'jsonwebtoken'

async function init () {
    const app: Express = express ()

app.use(express.json())
app.use(cors({origin: '*'}))
app.use(morgan('tiny'))

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://vidit:${process.env.dbpass}@cluster0.90000pt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Database Connected");
  }

 

app.use("/graphql", expressMiddleware(await creategqlserver()));
app.use('/api', apirouter);

app.get('/', async (req: Request, res:Response)=>{
    res.json({message: "Server Running"})
    
        // const check = jwt.verify("eyJhbGciOiJSUzI1NiIsImtpZCI6ImViYzIwNzkzNTQ1NzExODNkNzFjZWJlZDI5YzU1YmVmMjdhZDJjY2IiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVmlkaXQgVGFtcmFrYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS1h5di1aSVYydExrTXY4cEwxb2s0OG1HZVJJMWMzSi1mbmtDVDBaY3hHPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2VsZWN0cmljYXJ0LWRkMjY1IiwiYXVkIjoiZWxlY3RyaWNhcnQtZGQyNjUiLCJhdXRoX3RpbWUiOjE3MTEzMDk1MjUsInVzZXJfaWQiOiJyalozQVVmcE5FWXJZNmxOVHZLWTFOMGpwc0ozIiwic3ViIjoicmpaM0FVZnBORVlyWTZsTlR2S1kxTjBqcHNKMyIsImlhdCI6MTcxMTMwOTUyNSwiZXhwIjoxNzExMzEzMTI1LCJlbWFpbCI6InZpZGl0LnRhbXJha2FyMTZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDg2NDMxMjIyNzgwNDYwODQ5MDkiXSwiZW1haWwiOlsidmlkaXQudGFtcmFrYXIxNkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.uBeJnSMbfPbUGdbqhnSQvAWPtGUczigfuH2dvtrmaCoBxs1xME_4Su5nYER2aXcDDC58RqBldm0vD2isOS7DuUNj5_LVwcycm7T6I5AmGvV2R8SLS9m2btoMw-C_Fvc8s9wrL8UracyGiI3gk1obpRGPrJIPw_78ObilmK6JG-4qQsiAR74CsHduZEUJgvrU7llf8AD9jO6fY8aGMXlP7xqmLjwnmyRiUdY5J3X-7Y-1CrWBxoft4Aq4uVZCcEBlLnpiQsEFNhhb6kwWZJCaiJsPOlYNnUnvJ1MtGhaNOiYbTqgZWoNlKtAXLwa-MDspeJmmWtyaTrUDy-lbEQrF1w"
        // ,"shh", function(err, decoded) {
        //     if (err) {
        //         return res.json({
        //             success: false,
        //             message: "Failed to authenticate token.",
        //         });
        //     } });
        // console.log(check)
        
   
})

app.listen (8000, ()=>{
    console.log("server started")
})

}

init ();