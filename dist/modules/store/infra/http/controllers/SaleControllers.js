"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CreateSaleService_1 = __importDefault(require("../../../services/CreateSaleService"));
var IndexSaleService_1 = __importDefault(require("../../../services/IndexSaleService"));
var RevertSaleService_1 = __importDefault(require("../../../services/RevertSaleService"));
var SaleView_1 = __importDefault(require("../../../views/SaleView"));
var SaleController = /** @class */ (function () {
    function SaleController() {
    }
    SaleController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, brand, price, amount, barcode, id, user_id, subUser_id, createSaleService, sale;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, brand = _a.brand, price = _a.price, amount = _a.amount, barcode = _a.barcode, id = _a.id;
                        user_id = request.user.id;
                        subUser_id = request.sub_User.id;
                        createSaleService = tsyringe_1.container.resolve(CreateSaleService_1.default);
                        return [4 /*yield*/, createSaleService.execute({
                                user_id: user_id,
                                subUser_id: subUser_id,
                                name: name,
                                brand: brand,
                                price: price,
                                amount: amount,
                                barcode: barcode,
                                id: id,
                            })];
                    case 1:
                        sale = _b.sent();
                        return [2 /*return*/, response.status(200).json(SaleView_1.default.render(sale))];
                }
            });
        });
    };
    SaleController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, _a, subUserName, untilDate, fromDate, indexSaleService, sale;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        user_id = request.user.id;
                        _a = request.query, subUserName = _a.subUserName, untilDate = _a.untilDate, fromDate = _a.fromDate;
                        indexSaleService = tsyringe_1.container.resolve(IndexSaleService_1.default);
                        return [4 /*yield*/, indexSaleService.execute({
                                user_id: user_id,
                                untilDate: untilDate,
                                fromDate: fromDate,
                                subUser_Name: subUserName,
                            })];
                    case 1:
                        sale = _b.sent();
                        return [2 /*return*/, response.status(200).json(SaleView_1.default.renderMany(sale))];
                }
            });
        });
    };
    SaleController.prototype.revert = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, id, revertSaleService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = request.user.id;
                        id = request.params.id;
                        revertSaleService = tsyringe_1.container.resolve(RevertSaleService_1.default);
                        return [4 /*yield*/, revertSaleService.execute({ id: id, user_id: user_id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ message: 'sale successful reverted' })];
                }
            });
        });
    };
    return SaleController;
}());
exports.default = SaleController;
