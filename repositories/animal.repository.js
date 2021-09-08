import { connect } from "./db.js";

async function createAnimal(animal) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO animais (nome, tipo, proprietario_id ) VALUES ($1, $2, $3) RETURNING *";
    const values = [animal.nome, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3  WHERE animal_id = $4 RETURNING *";
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query("DELETE FROM animais WHERE animal_id = $1", [
      id,
    ]);
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animais WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimals() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM animais");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimalsByOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM animais WHERE proprietario_id = $1",
      [id]
    );
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
  getAnimalsByOwner,
};
