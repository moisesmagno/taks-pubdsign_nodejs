import { Router } from 'express';

import userRouter from './user.router';
import typeUserRouter from './typeUser.router';

const routes = Router();

routes.use('/types-users', typeUserRouter);
routes.use('/user', userRouter);

export default routes;
