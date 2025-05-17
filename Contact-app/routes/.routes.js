import express from "express";
import { homePage, showContact } from "../controller/.controller.js";
const router = express.Router();

router.get("/", homePage);
router.get("/show-contact", showContact);
// router.get("/", homePage);

export default router;
