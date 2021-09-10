import ownerService from "../services/owner.service.js";
import logger from "../logger.js";

async function createOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.nome || !owner.telefone) {
      throw new Error("Os campos nome e telefone são obrigatórios.");
    }

    res.send(await ownerService.createOwner(owner));
    logger.info(`POST /propietario { ${JSON.stringify(owner)} } `);
  } catch (error) {
    next(error);
  }
}

async function updateOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.proprietarioId || !owner.nome || !owner.telefone) {
      throw new Error(
        "Os campos proprietarioId, nome e telephone são obrigatórios."
      );
    }

    res.send(await ownerService.updateOwner(owner));
    logger.info(`PUT /propietario { ${JSON.stringify(owner)}} `);
  } catch (error) {
    next(error);
  }
}

async function deleteOwner(req, res, next) {
  try {
    await ownerService.deleteOwner(req.params.id);
    res.end();
    logger.info(`DELETE /propietario`);
  } catch (error) {
    next(error);
  }
}

async function getOwners(req, res, next) {
  try {
    res.send(await ownerService.getOwners());
    logger.info(`GET /propietario`);
  } catch (error) {
    next(error);
  }
}

async function getOwner(req, res, next) {
  try {
    res.send(await ownerService.getOwner(req.params.id));
    logger.info(`GET /propietario`);
  } catch (error) {
    next(error);
  }
}

export default { createOwner, updateOwner, deleteOwner, getOwners, getOwner };
