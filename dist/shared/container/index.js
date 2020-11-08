"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UserRepository_1 = __importDefault(require("../../modules/users/infra/typeorm/repositories/UserRepository"));
var SubUserRepository_1 = __importDefault(require("../../modules/subusers/infra/typeorm/repositories/SubUserRepository"));
var StorageRepository_1 = __importDefault(require("../../modules/store/infra/typeorm/repositories/StorageRepository"));
var SaleRepository_1 = __importDefault(require("../../modules/store/infra/typeorm/repositories/SaleRepository"));
tsyringe_1.container.registerSingleton('UserRepository', UserRepository_1.default);
tsyringe_1.container.registerSingleton('SubUserRepository', SubUserRepository_1.default);
tsyringe_1.container.registerSingleton('StorageRepository', StorageRepository_1.default);
tsyringe_1.container.registerSingleton('SaleRepository', SaleRepository_1.default);
