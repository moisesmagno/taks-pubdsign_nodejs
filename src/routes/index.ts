import { Router } from 'express';

import userRouter from './user.router';
import sessionRouter from './session.router';
import typeUserRouter from './typeUser.router';
import customerRouter from './customer.router';

const routes = Router();

routes.use('/types-users', typeUserRouter);
routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/customer', customerRouter);

export default routes;
