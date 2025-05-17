import Contacts from "../models/model.js";

// Home Page Get Route
export const homePage = async (req, res) => {
  const contacts = await Contacts.find();
  res.render("home", { contacts });
};

// Show Contact get route
export const showContact = async (req, res) => {
   const contacts = await Contacts.findById(req.params.id, req.body);
  res.render("show-contact", {contacts});
};

// Post show contact route
export const postShowContact = (req, res) => {};

// Add contact page route setup
export const addContact = (req, res) => {
  res.render("add-contact");
};

// Post Add contact page route setup
export const postAddContact = async (req, res) => {
  await Contacts.create(req.body);
  res.redirect("/");
};

// Edit contact page setup
export const editContact = (req, res) => {
  res.render("edit-contact");
};

// Post edit contact route
export const posteditContact = (req, res) => {};

export const deleteContact = async (req, res) => {
  await Contacts.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
