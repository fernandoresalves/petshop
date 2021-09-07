import { connect } from "./db.js";

async function insertOwner(owner) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
    const values = [owner.nome, owner.telefone];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateOwner(owner) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";
    const values = [owner.nome, owner.telefone, owner.proprietario_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM proprietarios WHERE proprietario_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
  }
}

async function getOwners() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM proprietarios");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
  }
}

async function deleteOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "DELETE FROM proprietarios WHERE proprietario_id = $1",
      [id]
    );
  } catch (error) {
    throw error;
  } finally {
  }
}

export default { insertOwner, updateOwner, deleteOwner, getOwners, getOwner };
