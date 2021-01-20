import { Router } from 'express';
import { getRepository } from 'typeorm';

import TypeUser from '../models/TypeUser';
import CreateTypeUserService from '../services/typeUsers/CreateTypeUserService';

const typeUserRouter = Router();

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
