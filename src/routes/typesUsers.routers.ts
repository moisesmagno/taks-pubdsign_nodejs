import { Router } from 'express';

const typesUsersRouter = Router();

typesUsersRouter.post('/', async (request, response) => {
    const { description } = request.body;

    return response.json({ description });
});

export default typesUsersRouter;
