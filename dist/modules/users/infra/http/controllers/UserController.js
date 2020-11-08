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
var CreateSubUserService_1 = __importDefault(require("../../../../subusers/services/CreateSubUserService"));
var AuthenticateUserService_1 = __importDefault(require("../../../services/AuthenticateUserService"));
var ConfirmEmailService_1 = __importDefault(require("../../../services/ConfirmEmailService"));
var CreateUserService_1 = __importDefault(require("../../../services/CreateUserService"));
var DeleteUserService_1 = __importDefault(require("../../../services/DeleteUserService"));
var IndexUserService_1 = __importDefault(require("../../../services/IndexUserService"));
var SendConfirmationEmailService_1 = __importDefault(require("../../../services/SendConfirmationEmailService"));
var SendRedefinitionPasswordEmail_1 = __importDefault(require("../../../services/SendRedefinitionPasswordEmail"));
var ShowUserService_1 = __importDefault(require("../../../services/ShowUserService"));
var UpdateUserService_1 = __importDefault(require("../../../services/UpdateUserService"));
var UserView_1 = __importDefault(require("../../../views/UserView"));
var SubUserView_1 = __importDefault(require("../../../../subusers/views/SubUserView"));
var RedefinitionPasswordService_1 = __importDefault(require("../../../services/RedefinitionPasswordService"));
var tsyringe_1 = require("tsyringe");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.Index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var enterprise_Name, indexUserService, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        enterprise_Name = request.query.enterprise_Name;
                        indexUserService = tsyringe_1.container.resolve(IndexUserService_1.default);
                        return [4 /*yield*/, indexUserService.execute(enterprise_Name)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.status(200).json(UserView_1.default.renderMany(users))];
                }
            });
        });
    };
    UserController.prototype.Show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, showUserService, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        showUserService = tsyringe_1.container.resolve(ShowUserService_1.default);
                        return [4 /*yield*/, showUserService.execute(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.status(200).json(UserView_1.default.render(user))];
                }
            });
        });
    };
    UserController.prototype.Create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, enterprise_Name, whatsapp, requestImages, createUserService, user, sendConfirmationEmailService;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, password = _a.password, enterprise_Name = _a.enterprise_Name, whatsapp = _a.whatsapp;
                        requestImages = request.files;
                        createUserService = tsyringe_1.container.resolve(CreateUserService_1.default);
                        return [4 /*yield*/, createUserService.execute({
                                name: name,
                                email: email,
                                password: password,
                                enterprise_Name: enterprise_Name,
                                whatsapp: whatsapp,
                                requestImages: requestImages,
                            })];
                    case 1:
                        user = _b.sent();
                        sendConfirmationEmailService = new SendConfirmationEmailService_1.default();
                        return [4 /*yield*/, sendConfirmationEmailService.execute({
                                email: user.email,
                                verify_Key: user.verify_Key,
                                enterprise_Name: user.enterprise_Name,
                                name: user.name,
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json(UserView_1.default.render(user))];
                }
            });
        });
    };
    UserController.prototype.Login = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, password, email, authenticateUserService, _b, user, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.body, password = _a.password, email = _a.email;
                        authenticateUserService = tsyringe_1.container.resolve(AuthenticateUserService_1.default);
                        return [4 /*yield*/, authenticateUserService.execute({
                                email: email,
                                password: password,
                            })];
                    case 1:
                        _b = _c.sent(), user = _b.user, token = _b.token;
                        return [2 /*return*/, response.status(200).json({ user: UserView_1.default.render(user), token: token })];
                }
            });
        });
    };
    UserController.prototype.VerifyEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var verify_Key, confirmEmailService, user, createSubUserService, subUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        verify_Key = request.params.verify_Key;
                        confirmEmailService = tsyringe_1.container.resolve(ConfirmEmailService_1.default);
                        return [4 /*yield*/, confirmEmailService.execute(verify_Key)];
                    case 1:
                        user = _a.sent();
                        createSubUserService = tsyringe_1.container.resolve(CreateSubUserService_1.default);
                        return [4 /*yield*/, createSubUserService.execute({
                                name: user.name,
                                email: user.email,
                                password: 'administrator',
                                user_id: user.id,
                                is_Adm: true,
                            })];
                    case 2:
                        subUser = _a.sent();
                        return [2 /*return*/, response.status(200).json({
                                subUser: SubUserView_1.default.render(subUser),
                            })];
                }
            });
        });
    };
    UserController.prototype.SendRedefinePasswordEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, sendRedefinitionPasswordEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = request.body.email;
                        sendRedefinitionPasswordEmail = tsyringe_1.container.resolve(SendRedefinitionPasswordEmail_1.default);
                        return [4 /*yield*/, sendRedefinitionPasswordEmail.execute(email)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ message: 'email has been sended' })];
                }
            });
        });
    };
    UserController.prototype.RedefinePassword = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, password, passwordAgain, validationKey, redefinitionPasswordService, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, password = _a.password, passwordAgain = _a.passwordAgain, validationKey = _a.validationKey;
                        redefinitionPasswordService = tsyringe_1.container.resolve(RedefinitionPasswordService_1.default);
                        return [4 /*yield*/, redefinitionPasswordService.execute({
                                password: password,
                                passwordAgain: passwordAgain,
                                validationKey: validationKey,
                            })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, response.status(200).json({ user: UserView_1.default.render(user) })];
                }
            });
        });
    };
    UserController.prototype.Delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteUserService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteUserService = tsyringe_1.container.resolve(DeleteUserService_1.default);
                        return [4 /*yield*/, deleteUserService.execute(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ message: 'deleted' })];
                }
            });
        });
    };
    UserController.prototype.Update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, password, enterprise_Name, whatsapp, requestImages, updateUserService, updatedUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.user.id;
                        _a = request.body, name = _a.name, password = _a.password, enterprise_Name = _a.enterprise_Name, whatsapp = _a.whatsapp;
                        requestImages = request.files;
                        updateUserService = tsyringe_1.container.resolve(UpdateUserService_1.default);
                        return [4 /*yield*/, updateUserService.execute({
                                id: id,
                                name: name,
                                password: password,
                                enterprise_Name: enterprise_Name,
                                whatsapp: whatsapp,
                                requestImages: requestImages,
                            })];
                    case 1:
                        updatedUser = _b.sent();
                        return [2 /*return*/, response.status(200).json(UserView_1.default.render(updatedUser))];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
