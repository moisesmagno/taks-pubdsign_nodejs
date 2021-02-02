import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateTaskServices from '../services/task/CreateTaskServices';

import Task from '../models/Task';

const taskRouter = Router();

// Middlewares
taskRouter.use(ensureAuthenticated);

taskRouter.get('/', async (request, response) => {
    const linksGetRepository = getRepository(Task);

    const links = await linksGetRepository.find();

    return response.json(links);
});

taskRouter.post('/', async (request, response) => {
    const {
        name,
        deadline,
        description,
        create_user_id,
        responsible_user_id,
        customer_id,
        frame_current_id,
        links,
    } = request.body;

    const createTaskServices = new CreateTaskServices();
    const task = await createTaskServices.execute({
        name,
        deadline,
        description,
        create_user_id,
        responsible_user_id,
        customer_id,
        frame_current_id,
        links,
    });
    return response.json(task);
});

export default taskRouter;
