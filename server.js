import express from "express";
import router from "./Routes/routes.js";
import cors from "cors"

class Server {
    constructor(){
        this.app = express(); 
        this.port = '8000';
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use("/api", router)
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    start() {
        this.app.listen(this.port, ()=>{
            console.log("Esperando peticiones...");
        })
    }

}

export default Server;