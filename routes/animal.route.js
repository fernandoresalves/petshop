import AnimalController from "../controllers/animal.controller.js";
import express from "express";

const router = express.Router();

router.post("/", AnimalController.createAnimal);

export default router;
