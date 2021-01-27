import { getRepository } from 'typeorm';
import AppError from '../../errors/AppErrors';

import Frame from '../../models/Frame';

class CreateFrameServices {
    public async execute(name: string): Promise<Frame | null> {
        const frameGetRepository = getRepository(Frame);
        const checkFrame = await frameGetRepository.findOne({
            where: {
                name,
            },
        });

        if (checkFrame) {
            throw new AppError('The Frame already exists!');
        }

        const frame = frameGetRepository.create({
            name,
        });

        await frameGetRepository.save(frame);

        return frame || null;
    }
}

export default CreateFrameServices;
