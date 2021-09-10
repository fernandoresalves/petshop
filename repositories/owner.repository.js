import Owner from "../models/owner.model.js";

async function insertOwner(owner) {
  try {
    return await Owner.create(owner);
  } catch (error) {
    throw error;
  }
}

async function updateOwner(owner) {
  try {
    await Owner.update(owner, {
      where: { proprietarioId: owner.proprietarioId },
    });
    return await getOwner(owner.proprietarioId);
  } catch (error) {
    throw error;
  }
}

async function getOwner(id) {
  try {
    return await Owner.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function getOwners() {
  try {
    return await Owner.findAll();
  } catch (error) {
    throw error;
  }
}

async function deleteOwner(id) {
  try {
    await Owner.destroy({
      where: { proprietarioId: id },
    });
  } catch (error) {
    throw error;
  }
}

export default { insertOwner, updateOwner, deleteOwner, getOwners, getOwner };
