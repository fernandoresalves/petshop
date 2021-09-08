import OwnerRepository from "../repositories/owner.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
  return await OwnerRepository.updateOwner(owner);
}

async function deleteOwner(id) {
  const animals = await AnimalRepository.getAnimalsByOwner(id);
  if (animals.length != 0) {
    throw new Error(
      "Não é possivel realizar a exclusão, esté propirtário possui animais."
    );
  }

  return await OwnerRepository.deleteOwner(id);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}

async function getOwner(id) {
  return await OwnerRepository.getOwner(id);
}

export default { createOwner, updateOwner, deleteOwner, getOwners, getOwner };
