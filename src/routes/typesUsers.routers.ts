import { Router } from 'express';

const typesUsersRouter = Router();

typesUsersRouter.get('/', (request, response) => {
    return response.json({ hello: 'Hello World!' });
});

export default typesUsersRouter;
