import ownerService from "../services/owner.service.js";
import logger from "../logger.js";

async function createOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.name || !owner.telephone) {
      throw new Error("Os campos name e telephone são obrigatórios.");
    }

    res.send(await ownerService.createOwner(owner));
    logger.info(`POST /propietario { ${JSON.stringify(owner)} } `);
  } catch (err) {
    next(err);
  }
}

export default { createOwner };
