import express, {Express, Request,Response} from 'express'
//@ts-ignore
import apirouter from './routes/test'
const app: Express = express ()

app.use(express.json())

app.use('/api', apirouter);

app.get('/', async (req: Request, res:Response)=>{
    res.json({message: "Server Running"})
})

app.listen (8080, ()=>{
    console.log("server started")
})