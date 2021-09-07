import { connect } from "./db.js";

async function insertOwner(owner) {
  const conn = await connect();
  const sql =
    "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
  const values = [owner.name, owner.telephone];
  const res = await conn.query(sql, values);

  return res.rows[0];
}

export default { insertOwner };
