import Animal from "../models/animal.model.js";

async function createAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (error) {
    throw error;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: { animalId: animal.animalId },
    });
    return await getAnimal(animal.animalId);
  } catch (error) {
    throw error;
  }
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({
      where: { animalId: id },
    });
  } catch (error) {
    throw error;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAnimalsByOwner(id) {
  try {
    return await Animal.findAll({
      where: { proprietarioId: id },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
  getAnimalsByOwner,
};
