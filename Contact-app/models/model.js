import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
});

// here persons is a database collections name
const Contacts = mongoose.model("persons", ContactSchema);

export default Contacts;
