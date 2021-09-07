import OwnerRepository from "../repositories/owner.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
  return await OwnerRepository.updateOwner(owner);
}

async function deleteOwner(id) {
  // antes de excluir um proprietário, verificar se existem animais cadastrados para ele. Caso exista, bloquear a exclusão
  return await OwnerRepository.deleteOwner(id);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}

async function getOwner(id) {
  return await OwnerRepository.getOwner(id);
}

export default { createOwner, updateOwner, deleteOwner, getOwners, getOwner };
