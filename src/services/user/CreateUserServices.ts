import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';
import AppError from '../../errors/AppErrors';

interface Request {
    name: string;
    surname: string;
    email: string;
    phone_number: number;
    password: string;
    password_verification: string;
    type_user_id: string;
}

class CreateUserServices {
    public async execute({
        name,
        surname,
        email,
        phone_number,
        password,
        password_verification,
        type_user_id,
    }: Request): Promise<User> {
        const userCustomRepository = getCustomRepository(UserRepository);

        const checkEmail = await userCustomRepository.findEmail(email);

        if (checkEmail) {
            throw new AppError('This Email is already Exists!');
        }

        if (password !== password_verification) {
            throw new AppError("The passwords don't match!");
        }

        const hashedPassword = await hash(password, 8);

        const user = userCustomRepository.create({
            name,
            surname,
            email,
            phone_number,
            password: hashedPassword,
            type_user_id
        });

        await userCustomRepository.save(user);

        return user;
    }
}

export default CreateUserServices;
