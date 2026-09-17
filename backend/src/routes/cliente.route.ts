import { Router, type Request, type Response } from "express";
import { pool } from "../database/connection";
import { clienteService } from "../services/cliente.service";

export const clienteRouter = Router();

//Query para pegar todos os clientes
clienteRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await clienteService.getAllClientes();

    response.json(res);
  } catch (error) {
    console.log(error);
    response.status(500).json({
      error: "Erro ao buscar clientes",
    });
  }
});

clienteRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await clienteService.getClienteById(id);

      response.json(res);
    } catch (error) {
      console.log("error", error);
      response.status(500).json({
        error: "Erro ao buscar cliente",
      });
    }
  },
);

clienteRouter.post("/", async (request: Request, response: Response) => {
  try {
  } catch (error) {
    console.log("error", error);
    response.status(500).json({
      error: "Erro ao criar cliente",
    });
  }
});
