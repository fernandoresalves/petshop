import ServiceRepository from "../repositories/service.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";
import serviceRepository from "../repositories/service.repository.js";

async function createService(service) {
  return await ServiceRepository.insertService(service);
}

async function getServices() {
  return await ServiceRepository.getServices();
}

async function getServiceAnimalByOwner(id) {
  const animals = await AnimalRepository.getAnimalsByOwner(id);

  const services = await Promise.all(
    animals.map(
      async (animal) =>
        await serviceRepository.getServiceByAnimal(animal.animalId)
    )
  );

  return services;
}

export default { createService, getServices, getServiceAnimalByOwner };
