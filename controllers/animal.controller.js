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

async function updateAnimal(req, res, next) {
  try {
    const animal = req.body;

    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw new Error(
        "Os campos animal_id, nome, tipo e proprietario_id são obrigatórios."
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
      logger.info(`GET /animal`);
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
