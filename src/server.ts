import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
// Always after the express import
import 'express-async-errors';

import routes from './routes';
import AppError from './errors/AppErrors';

import './database';

const app = express();

app.use(express.json());

app.use(routes);

// Always after the routes.
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }

        console.error(err);

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
);

app.listen(3333, () => {
    console.log('Server started on port 3333.');
});
