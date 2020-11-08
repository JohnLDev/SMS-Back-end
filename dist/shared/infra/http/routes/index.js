"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouter_1 = __importDefault(require("../../../../modules/users/infra/http/routes/userRouter"));
var subUserRouter_1 = __importDefault(require("../../../../modules/subusers/infra/http/routes/subUserRouter"));
var storageRouter_1 = __importDefault(require("../../../../modules/store/infra/http/routes/storageRouter"));
var saleRouter_1 = __importDefault(require("../../../../modules/store/infra/http/routes/saleRouter"));
var routes = express_1.Router();
routes.use('/user', userRouter_1.default);
routes.use('/subuser', subUserRouter_1.default);
routes.use('/storage', storageRouter_1.default);
routes.use('/sale', saleRouter_1.default);
exports.default = routes;
