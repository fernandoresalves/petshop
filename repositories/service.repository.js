import Service from "../models/service.model.js";

async function insertService(service) {
  try {
    return await Service.create(service);
  } catch (error) {
    throw error;
  }
}

async function getServices() {
  try {
    return await Service.findAll();
  } catch (error) {
    throw error;
  }
}

async function getServiceByAnimal(id) {
  try {
    return await Service.findAll({ where: { animalId: id } });
  } catch (error) {
    throw error;
  }
}

export default { getServices, insertService, getServiceByAnimal };
