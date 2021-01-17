import { Router } from 'express';

import CreateTypeUserService from '../services/typeUsers/CreateTypeUserService';

const typeUserRouter = Router();

// typeUserRouter.get('/', async (request, response) => {

// });

typeUserRouter.post('/', async (request, response) => {
    const { description } = request.body;

    const createTypeUser = new CreateTypeUserService();

    const typeUser = await createTypeUser.execute(description);

    return response.json({ typeUser });
});

export default typeUserRouter;
