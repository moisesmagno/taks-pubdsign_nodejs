import { Router } from 'express';

import typesUsersRouter from './typesUsers.routers';

const routes = Router();

routes.use('/types-users', typesUsersRouter);

export default routes;
