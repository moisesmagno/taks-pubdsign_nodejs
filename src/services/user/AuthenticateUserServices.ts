import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../../models/User';
import TypeUser from '../../models/TypeUser';
import authConfig from '../../config/auth';
import AppError from '../../errors/AppErrors';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserServices {
    public async execute({ email, password }: Request): Promise<Response> {
        const userGetRepository = getRepository(User);
        const typeUserGetRespository = getRepository(TypeUser);

        const user = await userGetRepository.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            throw new AppError('Incorret Email/Password combination!', 401);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('Incorrect Email/Password combination!', 401);
        }

        const typeUser = await typeUserGetRespository.findOne({
            where: {
                id: user.type_user_id,
            },
        });

        user.type_user_code = typeUser.type_user_code;
        user.type_user_description = typeUser.description;

        const { secret, expiresIn } = authConfig.jwt;

        // Generated token.
        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        });

        return { user, token };
    }
}

export default AuthenticateUserServices;
