import AnimalService from "../services/animal.service.js";
import logger from "../logger.js";

async function createAnimal(req, res, next) {
  try {
    const animal = req.body;

    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error(
        "Os campos nome, tipo e proprietarioId são obrigatórios."
      );
    }

    res.send(await AnimalService.createAnimal(animal));
    logger.info(`POST /animal { ${JSON.stringify(animal)} } `);
  } catch (error) {
    next(error);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const animal = req.body;

    if (
      !animal.animalId ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietarioId
    ) {
      throw new Error(
        "Os campos animalId, nome, tipo e proprietarioId são obrigatórios."
      );
    }

    res.send(await AnimalService.updateAnimal(animal));
    logger.info(`PUT /animal { ${JSON.stringify(animal)} } `);
  } catch (error) {
    next(error);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info(`DELETE /animal`);
  } catch (error) {
    next(error);
  }
}

async function getAnimals(req, res, next) {
  try {
    const proprietario_id = req.query.proprietario_id;
    if (proprietario_id) {
      res.send(await AnimalService.getAnimalsByOwner(proprietario_id));
      logger.info(`GET /animal?proprietario_id`);
    } else {
      res.send(await AnimalService.getAnimals());
      logger.info(`GET /animal`);
    }
  } catch (error) {
    next(error);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info(`GET /animal`);
  } catch (error) {
    next(error);
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
};
