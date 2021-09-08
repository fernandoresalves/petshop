import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.createAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  return await AnimalRepository.deleteAnimal(id);
}

async function getAnimals() {
  return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function getAnimalsByOwner(id) {
  return await AnimalRepository.getAnimalsByOwner(id);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
  getAnimalsByOwner,
};
