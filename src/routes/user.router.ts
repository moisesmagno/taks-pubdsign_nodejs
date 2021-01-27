import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import User from '../models/User';
import CreateUserServices from '../services/user/CreateUserServices';

const userRouter = Router();

userRouter.use(ensureAuthenticated);

userRouter.get('/', async (request, response) => {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find();

    return response.json(users);
});

userRouter.post('/', async (request, response) => {
    const {
        name,
        surname,
        email,
        phone_number,
        password,
        password_verification,
        type_user_id,
    } = request.body;

    const createUserServices = new CreateUserServices();
    const createNewUser = await createUserServices.execute({
        name,
        surname,
        email,
        phone_number,
        password,
        password_verification,
        type_user_id,
    });

    return response.json(createNewUser);
});

export default userRouter;
