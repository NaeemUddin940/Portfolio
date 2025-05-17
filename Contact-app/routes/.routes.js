import express from "express";
import {
    addContact,
  editContact,
  homePage,
  showContact,
} from "../controller/.controller.js";
const router = express.Router();

router.get("/", homePage);
router.get("/show-contact", showContact);
router.get("/edit-contact", editContact);
router.get("/add-contact", addContact);

export default router;
