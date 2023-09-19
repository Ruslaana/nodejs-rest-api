import validateBody from '../../decorators/validateBody.js';
import Contact from '../../schemas/contactSchema.js';

const addContactValidate = validateBody(Contact.schemaValidation);
const updateContactValidate = validateBody(Contact.schemaValidation);
const updateContactValidateFavoriteField = validateBody(
    Contact.updateFavoriteSchema,
);

export default {
    addContactValidate,
    updateContactValidate,
    updateContactValidateFavoriteField,
};
