import express from "express";
import OwnerController from "../controllers/owner.controller.js";

const router = express.Router();

router.post("/", OwnerController.createOwner);

export default router;
