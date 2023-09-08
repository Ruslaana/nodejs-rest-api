import Contact from '../schemas/contactSchema.js';

const listContacts = async () => {
  return await Contact.find();
};

const getContactById = async (id) => {
  return await Contact.findOne({ _id: id });
};

const addContact = async ({ name, email, phone, favorite }) => {
  return Contact.create({ name, email, phone, favorite });
};

const updateContact = async (id, fields) => {
  return await Contact.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeContact = async (id) => {
  return await Contact.findByIdAndRemove({ _id: id });
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};