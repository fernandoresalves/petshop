import AnimalService from "../services/animal.service.js";
import logger from "../logger.js";

async function createAnimal(req, res, next) {
  try {
    const animal = req.body;

    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error(
        "Os campos nome, tipo e proprietario_id são obrigatórios."
      );
    }

    res.send(await AnimalService.createAnimal(animal));
    logger.info(`POST /animal { ${JSON.stringify(animal)} } `);
  } catch (error) {
    next(error);
  }
}

export default { createAnimal };
