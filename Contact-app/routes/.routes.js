import express from "express";
import {
  addContact,
  deleteContact,
  editContact,
  homePage,
  postAddContact,
  showContact,
} from "../controller/.controller.js";
const router = express.Router();

router.get("/", homePage);
router.get("/show-contact/:id", showContact);
router.get("/edit-contact/:id", editContact);
router.get("/add-contact", addContact);
router.post("/add-contact", postAddContact);
router.get("/delete-contact/:id", deleteContact);

export default router;
