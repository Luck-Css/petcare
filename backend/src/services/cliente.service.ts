import { pool } from "../database/connection";

class ClienteService {
  async getAllClientes() {
    try {
      const res = await pool.query("SELECT * FROM clientes");
      return res.rows;
    } catch (error) {
      console.error("error", error);
      throw new Error("Erro ao buscar clientes");
    }
  }

  async getClienteById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM clientes WHERE id = $1", [id]);
      return res.rows[0];
    } catch (error) {
      console.error("error", error);
      throw new Error("Erro ao buscar cliente");
    }
  }
}

export const clienteService = new ClienteService();
