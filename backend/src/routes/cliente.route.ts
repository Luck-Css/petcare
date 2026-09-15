import { Router, type Request, type Response}  from "express";
import { pool } from "../database/connection";
import { clienteService } from "../services/cliente.service";

export const clienteRouter = Router();

//Query para pegar todos os clientes
clienteRouter.get("/", async(_request:Request, response:Response) => {
    try{
        const res = await
        clienteService.getAllClientes()

        response.json(res)
    } catch(error) {

    }
})

clienteRouter.post("/", async(request:Request, response:Response) => {
    try{
        const
    }catch(error) {

    }
})
