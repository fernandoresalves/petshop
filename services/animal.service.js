import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.createAnimal(animal);
}

export default { createAnimal };
