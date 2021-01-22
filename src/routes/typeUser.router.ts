import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import TypeUser from '../models/TypeUser';
import CreateTypeUserService from '../services/typeUser/CreateTypeUserServices';

const typeUserRouter = Router();

// Middlewares
typeUserRouter.use(ensureAuthenticated);

typeUserRouter.get('/', async (request, response) => {
    const typeUserRepository = getRepository(TypeUser);
    const typesUsers = await typeUserRepository.find();

    return response.json(typesUsers);
});

typeUserRouter.post('/', async (request, response) => {
    const { description } = request.body;

    const createTypeUser = new CreateTypeUserService();

    const typeUser = await createTypeUser.execute(description);

    return response.json({ typeUser });
});

export default typeUserRouter;
