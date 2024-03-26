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
app.use(cors())
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
    
})

app.listen (8000, ()=>{
    console.log("server started")
})

}

init ();