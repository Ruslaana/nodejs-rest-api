import { Router } from 'express';

import userController from '../../controllers/user-controller.js';
import authenticate from '../../middleware/authenticate.js';
import usersValidation from '../../middleware/validation/userValidation.js';
import upload from '../../middleware/upload.js';

const authRouter = Router();

authRouter.post('/register', usersValidation.userValidate, userController.register);

authRouter.post('/login', usersValidation.userValidate, userController.login);

authRouter.get('/current', authenticate, userController.getCurrent);

authRouter.post('/logout', authenticate, userController.logout);

authRouter.patch('/subscription', authenticate, usersValidation.userSubscriptionValidate,
  userController.subscriptionUpdate
);

authRouter.patch('/avatars', authenticate, upload.single('avatar'), userController.updateAvatarUser)

export default authRouter;