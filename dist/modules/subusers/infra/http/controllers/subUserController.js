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
var AuthenticateSubUserService_1 = __importDefault(require("../../../services/AuthenticateSubUserService"));
var CreateSubUserService_1 = __importDefault(require("../../../services/CreateSubUserService"));
var DeleteSubUserService_1 = __importDefault(require("../../../services/DeleteSubUserService"));
var IndexSubUserService_1 = __importDefault(require("../../../services/IndexSubUserService"));
var UpdateSubUserService_1 = __importDefault(require("../../../services/UpdateSubUserService"));
var SubUserView_1 = __importDefault(require("../../../views/SubUserView"));
var SendRedefinitionPasswordEmail_1 = __importDefault(require("../../../services/SendRedefinitionPasswordEmail"));
var RedefinitionPasswordService_1 = __importDefault(require("../../../services/RedefinitionPasswordService"));
var tsyringe_1 = require("tsyringe");
var SubUserController = /** @class */ (function () {
    function SubUserController() {
    }
    SubUserController.prototype.signup = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, is_Adm, user_id, createSubUserService, SubUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, password = _a.password, is_Adm = _a.is_Adm;
                        user_id = request.user.id;
                        createSubUserService = tsyringe_1.container.resolve(CreateSubUserService_1.default);
                        return [4 /*yield*/, createSubUserService.execute({
                                name: name,
                                email: email,
                                password: password,
                                user_id: user_id,
                                is_Adm: is_Adm,
                            })];
                    case 1:
                        SubUser = _b.sent();
                        return [2 /*return*/, response.status(201).json(SubUserView_1.default.render(SubUser))];
                }
            });
        });
    };
    SubUserController.prototype.login = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user_id, authenticateSubUserService, _b, subUser, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.body, email = _a.email, password = _a.password;
                        user_id = request.user.id;
                        authenticateSubUserService = tsyringe_1.container.resolve(AuthenticateSubUserService_1.default);
                        return [4 /*yield*/, authenticateSubUserService.execute({
                                email: email,
                                password: password,
                                user_id: user_id,
                            })];
                    case 1:
                        _b = _c.sent(), subUser = _b.subUser, token = _b.token;
                        return [2 /*return*/, response
                                .status(200)
                                .json({ subUser: SubUserView_1.default.render(subUser), token: token })];
                }
            });
        });
    };
    SubUserController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, name, indexSubUserService, subUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = request.user.id;
                        name = request.query.name;
                        indexSubUserService = tsyringe_1.container.resolve(IndexSubUserService_1.default);
                        return [4 /*yield*/, indexSubUserService.execute({
                                user_id: user_id,
                                name: name,
                            })];
                    case 1:
                        subUsers = _a.sent();
                        return [2 /*return*/, response.status(200).json(SubUserView_1.default.renderMany(subUsers))];
                }
            });
        });
    };
    SubUserController.prototype.SendRedefinePasswordEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, id, sendRedefinitionPasswordEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = request.body.email;
                        id = request.user.id;
                        sendRedefinitionPasswordEmail = tsyringe_1.container.resolve(SendRedefinitionPasswordEmail_1.default);
                        return [4 /*yield*/, sendRedefinitionPasswordEmail.execute(email, id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ message: 'email has been sended' })];
                }
            });
        });
    };
    SubUserController.prototype.RedefinePassword = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, password, passwordAgain, validationKey, id, redefinitionPasswordService, subUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, password = _a.password, passwordAgain = _a.passwordAgain, validationKey = _a.validationKey;
                        id = request.user.id;
                        redefinitionPasswordService = tsyringe_1.container.resolve(RedefinitionPasswordService_1.default);
                        return [4 /*yield*/, redefinitionPasswordService.execute({
                                password: password,
                                passwordAgain: passwordAgain,
                                validationKey: validationKey,
                                user_id: id,
                            })];
                    case 1:
                        subUser = _b.sent();
                        return [2 /*return*/, response.status(200).json({ user: SubUserView_1.default.render(subUser) })];
                }
            });
        });
    };
    SubUserController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, user_id, id, updateSubUserService, SubUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, password = _a.password;
                        user_id = request.user.id;
                        id = request.params.id;
                        updateSubUserService = tsyringe_1.container.resolve(UpdateSubUserService_1.default);
                        return [4 /*yield*/, updateSubUserService.execute({
                                name: name,
                                email: email,
                                password: password,
                                user_id: user_id,
                                id: id,
                            })];
                    case 1:
                        SubUser = _b.sent();
                        return [2 /*return*/, response.status(201).json(SubUserView_1.default.render(SubUser))];
                }
            });
        });
    };
    SubUserController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, id, deleteSubUserService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = request.user.id;
                        id = request.params.id;
                        deleteSubUserService = tsyringe_1.container.resolve(DeleteSubUserService_1.default);
                        return [4 /*yield*/, deleteSubUserService.execute({ id: id, user_id: user_id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ message: 'SubUser Deleted' })];
                }
            });
        });
    };
    return SubUserController;
}());
exports.default = SubUserController;
