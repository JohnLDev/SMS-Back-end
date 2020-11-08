"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ensureaAuthenticated_1 = __importDefault(require("../../../../../shared/infra/http/middlewares/ensureaAuthenticated"));
var express_1 = require("express");
var subUserController_1 = __importDefault(require("../controllers/subUserController"));
var subUserRouter = express_1.Router();
var subUserController = new subUserController_1.default();
subUserRouter.use(ensureaAuthenticated_1.default);
subUserRouter.get('/index', subUserController.index);
subUserRouter.post('/signup', subUserController.signup);
subUserRouter.post('/login', subUserController.login);
subUserRouter.post('/redefine-password-email', subUserController.SendRedefinePasswordEmail);
subUserRouter.patch('/redefine-password', subUserController.RedefinePassword);
subUserRouter.put('/update/:id', subUserController.update);
subUserRouter.delete('/delete/:id', subUserController.delete);
exports.default = subUserRouter;
