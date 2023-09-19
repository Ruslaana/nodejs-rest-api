import validateBody from "../../decorators/validateBody.js";
import User from "../../schemas/User.js";

const userValidate = validateBody(User.userSignupValidation);

const userSubscriptionValidate = validateBody(User.usersSubscriptionFieldSchema);

export default { userValidate, userSubscriptionValidate };