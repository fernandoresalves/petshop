import ServiceService from "../services/service.service.js";
import logger from "../logger.js";
import Service from "../models/service.model.js";

async function createService(req, res, next) {
  try {
    const service = req.body;

    if (!service.descricao || !service.valor || !service.animalId) {
      throw new Error(
        "Os campos descrição, valor e animalId são obrigatórios."
      );
    }

    res.send(await ServiceService.createService(service));
    logger.info(`POST /service { ${JSON.stringify(service)} } `);
  } catch (error) {
    next(error);
  }
}

async function getServices(req, res, next) {
  try {
    const proprietario_id = req.query.proprietario_id;
    if (proprietario_id) {
      res.send(await ServiceService.getServiceAnimalByOwner(proprietario_id));
      logger.info(`GET /service?proprietario_id`);
    } else {
      res.send(await ServiceService.getServices());
      logger.info(`GET /service`);
    }
  } catch (error) {
    next(error);
  }
}

export default { createService, getServices };
