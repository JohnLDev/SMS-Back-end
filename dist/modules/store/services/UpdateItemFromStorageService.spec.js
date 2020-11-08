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
var FakeStorageRepository_1 = __importDefault(require("../repositories/fakes/FakeStorageRepository"));
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var uuid_1 = require("uuid");
var AddItemToStorageService_1 = __importDefault(require("./AddItemToStorageService"));
var UpdateItemFromStorageService_1 = __importDefault(require("./UpdateItemFromStorageService"));
var FakeSaleRepository_1 = __importDefault(require("../repositories/fakes/FakeSaleRepository"));
var CreateSaleService_1 = __importDefault(require("./CreateSaleService"));
describe('UpdateItemFromStorageService', function () {
    it('should be able to update a existent item in storage', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, fakeSaleRepository, addItemToStorageService, updateItemFromStorageService, createSaleService, item, updatedItem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    fakeSaleRepository = new FakeSaleRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    updateItemFromStorageService = new UpdateItemFromStorageService_1.default(fakeStorageRepository, fakeSaleRepository);
                    createSaleService = new CreateSaleService_1.default(fakeSaleRepository, fakeStorageRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    item = _a.sent();
                    return [4 /*yield*/, createSaleService.execute({
                            user_id: uuid_1.v4(),
                            id: item.id,
                            name: '',
                            brand: '',
                            price: 0,
                            amount: 100,
                            subUser_id: uuid_1.v4(),
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, updateItemFromStorageService.execute({
                            name: 'oculos atualizado',
                            brand: 'maça',
                            amount: 1000,
                            price: 200,
                            id: item.id,
                            user_id: item.user_id,
                        })];
                case 3:
                    updatedItem = _a.sent();
                    expect(updatedItem.name).toBe('oculos atualizado');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be not able to update a item with a invalid user_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, fakeSaleRepository, addItemToStorageService, updateItemFromStorageService, item, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    fakeSaleRepository = new FakeSaleRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    updateItemFromStorageService = new UpdateItemFromStorageService_1.default(fakeStorageRepository, fakeSaleRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    item = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, updateItemFromStorageService.execute({
                            name: 'oculos atualizado',
                            brand: 'maça',
                            amount: 1000,
                            price: 200,
                            id: item.id,
                            user_id: 'item.user_id',
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    expect(error_1).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
    it('should be not able to update a item that does not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, fakeSaleRepository, updateItemFromStorageService, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    fakeSaleRepository = new FakeSaleRepository_1.default();
                    updateItemFromStorageService = new UpdateItemFromStorageService_1.default(fakeStorageRepository, fakeSaleRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, updateItemFromStorageService.execute({
                            name: 'oculos atualizado',
                            brand: 'maça',
                            amount: 1000,
                            price: 200,
                            id: 'johnlenon',
                            user_id: uuid_1.v4(),
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    expect(error_2).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
