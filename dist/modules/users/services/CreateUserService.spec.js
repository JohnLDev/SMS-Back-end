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
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var FakeUserRepository_1 = __importDefault(require("../repositories/fakes/FakeUserRepository"));
var CreateUserService_1 = __importDefault(require("./CreateUserService"));
var ImageToTest_1 = __importDefault(require("../../../shared/utils/ImageToTest"));
var yup_1 = require("yup");
describe('CreateUserService', function () {
    it('should be able to create a new user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeUserRepository, createUserService, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeUserRepository = new FakeUserRepository_1.default();
                    createUserService = new CreateUserService_1.default(fakeUserRepository);
                    return [4 /*yield*/, createUserService.execute({
                            name: 'Johnlenon',
                            email: 'john@lenon.com',
                            password: '1234567',
                            enterprise_Name: 'Tx2ls312312312',
                            whatsapp: 8798789987,
                            requestImages: ImageToTest_1.default,
                        })];
                case 1:
                    user = _a.sent();
                    expect(user).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be no able to create a new user without all fields', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeUserRepository, createUserService, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeUserRepository = new FakeUserRepository_1.default();
                    createUserService = new CreateUserService_1.default(fakeUserRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, createUserService.execute({
                            name: '',
                            email: '',
                            password: '',
                            enterprise_Name: '',
                            whatsapp: 9,
                            requestImages: ImageToTest_1.default,
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    expect(error_1).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should be no able to create a new user with invalid fields', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeUserRepository, createUserService, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeUserRepository = new FakeUserRepository_1.default();
                    createUserService = new CreateUserService_1.default(fakeUserRepository);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, createUserService.execute({
                            name: 'afasdas',
                            email: 'dasdasd',
                            password: 'asdas',
                            enterprise_Name: 'dsadsad',
                            whatsapp: 9,
                            requestImages: ImageToTest_1.default,
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    expect(error_2).toBeInstanceOf(yup_1.ValidationError);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should be no able to create a new user with the same email', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeUserRepository, createUserService;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeUserRepository = new FakeUserRepository_1.default();
                    createUserService = new CreateUserService_1.default(fakeUserRepository);
                    return [4 /*yield*/, createUserService.execute({
                            name: 'Johnlenon',
                            email: 'john@lenon.com',
                            password: '1234567',
                            enterprise_Name: 'Tx2ls312312312',
                            whatsapp: 8798789987,
                            requestImages: ImageToTest_1.default,
                        })];
                case 1:
                    _a.sent();
                    expect(createUserService.execute({
                        name: 'Johnlenon',
                        email: 'john@lenon.com',
                        password: '1234567',
                        enterprise_Name: 'Tx2ls',
                        whatsapp: 8798789987,
                        requestImages: ImageToTest_1.default,
                    })).rejects.toBeInstanceOf(AppError_1.default);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be no able to create a new user with the same enterprise_name', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fakeUserRepository, createUserService, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fakeUserRepository = new FakeUserRepository_1.default();
                    createUserService = new CreateUserService_1.default(fakeUserRepository);
                    return [4 /*yield*/, createUserService.execute({
                            name: 'Johnlenon',
                            email: 'john@lenon.com',
                            password: '1234567',
                            enterprise_Name: 'Tx2ls',
                            whatsapp: 8798789987,
                            requestImages: ImageToTest_1.default,
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, createUserService.execute({
                            name: 'Johnlenon',
                            email: 'john2@lenon.com',
                            password: '1234567',
                            enterprise_Name: 'Tx2ls',
                            whatsapp: 8798789987,
                            requestImages: ImageToTest_1.default,
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    expect(error_3).toBeInstanceOf(AppError_1.default);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
