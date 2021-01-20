import { getCustomRepository } from 'typeorm';

import TypeUserRepository from '../../repositories/TypeUserRepository';
import TypeUser from '../../models/TypeUser';
import AppError from '../../errors/AppErrors';

class CreateTypeUserService {
    public async execute(description: string): Promise<TypeUser> {
        const typeUserRepository = getCustomRepository(TypeUserRepository);
        const checkTypeUser = await typeUserRepository.findTypeUser(
            description
        );

        if (checkTypeUser) {
            throw new AppError('Type User already exist!');
        }

        const typeUser = await typeUserRepository.create({ description });

        await typeUserRepository.save(typeUser);

        return typeUser;
    }
}

export default CreateTypeUserService;
