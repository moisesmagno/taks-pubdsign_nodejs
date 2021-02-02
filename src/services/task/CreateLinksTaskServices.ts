import { getRepository } from 'typeorm';

import LinksTask from '../../models/LinksTask';

interface Request {
    task_id: string;
    links: Array<string>;
}

class CreateLinksTaskServices {
    public async execute({ task_id, links }: Request): Promise<Array>{
        const linksTaskGetRepository = getRepository(LinksTask);
        let i;
        const returnLinks = [];

        for (i = 0; i < links.length; i++) {
            const linkTask = linksTaskGetRepository.create({
                task_id,
                name: links[i].name,
                url: links[i].url,
            });

            const { name, url } = await linksTaskGetRepository.save(linkTask);
            returnLinks.push({name, url});
        }

        return returnLinks;
    }
}

export default CreateLinksTaskServices;
