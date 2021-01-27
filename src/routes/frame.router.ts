import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateFrameServices from '../services/frame/CreateFrameServices';
import Frame from '../models/Frame';

const frameRouter = Router();

// Middlewares
frameRouter.use(ensureAuthenticated);

frameRouter.get('/', async (request, response) => {
    const framesRespository = getRepository(Frame);
    const frames = await framesRespository.find();

    return response.json(frames);
});

frameRouter.post('/', async (request, response) => {
    const { name } = request.body;
    const createFrameServices = new CreateFrameServices();
    const frame = await createFrameServices.execute(name);
    return response.json(frame);
});

export default frameRouter;
