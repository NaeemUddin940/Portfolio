// Home Page Get Route
export const homePage = (req, res) => {
  res.render("home");
};

// Show Contact get route
export const showContact = (req, res) => {
  res.render("show-contact");
};

// Post show contact route
export const postShowContact = (req, res) => {};


// Add contact page route setup
export const addContact = (req, res) => {
  res.render("add-contact");
};


// Post Add contact page route setup
export const postaddContact = (req, res) => {
  
};


// Edit contact page setup
export const editContact = (req, res) => {
  res.render("edit-contact");
};

// Post edit contact route
export const posteditContact = (req, res) => {};
