"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ensureaAuthenticated_1 = __importDefault(require("../../../../../shared/infra/http/middlewares/ensureaAuthenticated"));
var express_1 = require("express");
var StorageController_1 = __importDefault(require("../controllers/StorageController"));
var storageRouter = express_1.Router();
var storageController = new StorageController_1.default();
storageRouter.use(ensureaAuthenticated_1.default);
storageRouter.get('/index', storageController.IndexStorage);
storageRouter.post('/add', storageController.AddItem);
storageRouter.put('/update/:id', storageController.update);
storageRouter.delete('/delete/:id', storageController.delete);
exports.default = storageRouter;
