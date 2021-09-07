import OwnerRepository from "../repositories/owner.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

export default { createOwner };
