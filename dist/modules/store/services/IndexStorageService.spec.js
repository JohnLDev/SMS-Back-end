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
var IndexStorageService_1 = __importDefault(require("./IndexStorageService"));
describe('IndexStorageService', function () {
    it('should be able to list all storage items', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, addItemToStorageService, indexStorageService, storage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    _a.sent();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                        })];
                case 2:
                    storage = (_a.sent());
                    expect(storage.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to list filtering by name', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, addItemToStorageService, indexStorageService, storage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    _a.sent();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                            name: 'oculos',
                        })];
                case 2:
                    storage = _a.sent();
                    expect(storage).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to list filtering by brand', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, addItemToStorageService, indexStorageService, storage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    _a.sent();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                            brand: 'apple',
                        })];
                case 2:
                    storage = _a.sent();
                    expect(storage).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to list filtering by name and brand', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, addItemToStorageService, indexStorageService, storage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    _a.sent();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                            name: 'oculos',
                            brand: 'apple',
                        })];
                case 2:
                    storage = _a.sent();
                    expect(storage).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be not able to list with a invalid user_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, addItemToStorageService, indexStorageService, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    addItemToStorageService = new AddItemToStorageService_1.default(fakeStorageRepository);
                    return [4 /*yield*/, addItemToStorageService.execute({
                            name: 'oculos',
                            brand: 'apple',
                            amount: 100,
                            price: 100,
                            user_id: uuid_1.v4(),
                        })];
                case 1:
                    _a.sent();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: 'v4()',
                            name: 'oculos',
                            brand: 'apple',
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
    it('should be not able to list if does not exist users', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, indexStorageService, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, indexStorageService.execute({
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
    it('should be not able to filter by name if does not exist that item', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, indexStorageService, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                            name: 'oculos',
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    expect(error_3).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should be not able to filter by brand if does not exist that item', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, indexStorageService, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                            brand: 'apple',
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    expect(error_4).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should be not able to filter by name and brand if does not exist that item', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeStorageRepository, indexStorageService, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeStorageRepository = new FakeStorageRepository_1.default();
                    indexStorageService = new IndexStorageService_1.default(fakeStorageRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, indexStorageService.execute({
                            user_id: uuid_1.v4(),
                            name: 'oculos',
                            brand: 'apple',
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    expect(error_5).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
