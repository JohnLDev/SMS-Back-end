"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ensureaAuthenticated_1 = __importDefault(require("../../../../../shared/infra/http/middlewares/ensureaAuthenticated"));
var express_1 = require("express");
var SaleControllers_1 = __importDefault(require("../controllers/SaleControllers"));
var saleRouter = express_1.Router();
var saleController = new SaleControllers_1.default();
saleRouter.use(ensureaAuthenticated_1.default);
saleRouter.get('/index', saleController.index);
saleRouter.post('/sell', saleController.create);
saleRouter.delete('/revert/:id', saleController.revert);
exports.default = saleRouter;
