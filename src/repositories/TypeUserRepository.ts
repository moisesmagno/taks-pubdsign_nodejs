import { EntityRepository, Repository } from 'typeorm';

import TypeUser from '../models/TypeUser';

@EntityRepository(TypeUser)
class TypeUserRepository extends Repository<TypeUser> {
    // public all(){}

    public async findTypeUser(description: string): Promise<TypeUser | null> {
        const typeUser = await this.findOne({
            where: {
                description,
            },
        });

        return typeUser || null;
    }
}

export default TypeUserRepository;
