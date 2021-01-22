import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateCustomerServices from '../services/customer/CreateCustomerServices';
import Customer from '../models/Customer';

const customerRouter = Router();

// Middlawares
customerRouter.use(ensureAuthenticated);

customerRouter.get('/', async (request, response) => {
    const customerGetRepository = getRepository(Customer);
    const customers = await customerGetRepository.find();

    return response.json(customers);
});

customerRouter.post('/', async (request, response) => {
    const { name } = request.body;

    const createCustomerServices = new CreateCustomerServices();

    const customer = await createCustomerServices.execute(name);

    return response.json(customer);
});

export default customerRouter;
