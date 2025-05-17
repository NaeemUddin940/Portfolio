import express from "express";
import {
  editContact,
  homePage,
  showContact,
} from "../controller/.controller.js";
const router = express.Router();

router.get("/", homePage);
router.get("/show-contact", showContact);
router.get("/edit-contact", editContact);

export default router;
