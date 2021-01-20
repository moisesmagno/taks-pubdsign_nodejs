import { Router } from 'express';

import typeUserRouter from './typeUser.router';

const routes = Router();

routes.use('/types-users', typeUserRouter);

export default routes;
