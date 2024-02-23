const testserver = (req:Request, res:Response) =>{
    try {
        //@ts-ignore
        res.json({message: "Everything works fine !"})
        
    } catch (error) {
        //@ts-ignore
        res.json({Error: error})
    }
}

module.exports = {testserver}