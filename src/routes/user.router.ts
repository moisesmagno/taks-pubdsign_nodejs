import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
    return response.send();
});

userRouter.post('/', async (request, response) => {
    return response.send();
});

export default userRouter;
