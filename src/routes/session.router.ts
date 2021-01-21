import { Router } from 'express';

import AuthenticateUserServices from '../services/user/AuthenticateUserServices';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserServices();
    const { user, token } = await authenticateUser.execute({ email, password });

    delete user.password;
    delete user.type_user_id;

    return response.json({ user, token });
});

export default sessionRouter;
