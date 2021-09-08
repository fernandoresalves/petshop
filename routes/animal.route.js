import AnimalController from "../controllers/animal.controller.js";
import express from "express";

const router = express.Router();

router.get("/", AnimalController.getAnimals);
router.get("/:id", AnimalController.getAnimal);
router.post("/", AnimalController.createAnimal);
router.put("/", AnimalController.updateAnimal);
router.delete("/:id", AnimalController.deleteAnimal);

export default router;
