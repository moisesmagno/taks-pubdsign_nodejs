import { getRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import Task from '../../models/Task';
import LinksTask from '../../models/LinksTask';
import CreateLinksTaskServices from '../task/CreateLinksTaskServices';

interface Request {
    name: string;
    deadline: string;
    description: string;
    create_user_id: string;
    responsible_user_id: string;
    customer_id: string;
    frame_current_id: string;
    links: Array<string>;
}

interface Response {
    task: Task;
    linksTask: LinksTask;
}

class CreateTaskServices {
    public async execute({
        name,
        deadline,
        description,
        create_user_id,
        responsible_user_id,
        customer_id,
        frame_current_id,
        links,
    }: Request): Promise<Response> {
        const task_deadline = parseISO(deadline);
        const taskGetRepository = getRepository(Task);

        const task = taskGetRepository.create({
            name,
            deadline: task_deadline,
            description,
            create_user_id,
            responsible_user_id,
            customer_id,
            frame_current_id,
        });

        await taskGetRepository.save(task);

        if (links.length >= 1) {
            const linksTaskObj = new CreateLinksTaskServices();
            const linksTask = await linksTaskObj.execute({
                task_id: task.id,
                links,
            });

            return { task, 'links': linksTask };
        } else {
            return { task, links };
        }
    }
}

export default CreateTaskServices;
