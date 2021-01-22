import { getRepository } from 'typeorm'
import AppError from '../../errors/AppErrors';

import Customer from '../../models/Customer';

class CreateCustomerServices {
    public async execute(name: string): Promise<Customer> {
        const customerRepository = getRepository(Customer);

        const checkCustomer = await customerRepository.findOne({
            where: { name },
        });

        if (checkCustomer) {
            throw new AppError('The Company alredy exist!');
        }

        const customer = await customerRepository.create({
            name,
        });

        await customerRepository.save(customer);

        return customer;
    }
}

export default CreateCustomerServices;
