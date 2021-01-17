"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typesUsersRouter = express_1.Router();
typesUsersRouter.get('/', function (request, response) {
    return response.json({ hello: 'Hello World!' });
});
exports.default = typesUsersRouter;
