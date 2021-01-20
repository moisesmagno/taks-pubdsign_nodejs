import { getCustomRepository } from 'typeorm';

import User from '../../models/User';
import AppError from '../../errors/AppErrors';

class CreateUserServices {
    public async execute(): Promise<User> {
        return '';
    }
}

export default CreateUserServices;
