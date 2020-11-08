"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var uuid_1 = require("uuid");
var yup = __importStar(require("yup"));
var bcryptjs_1 = require("bcryptjs");
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var ImageHandler_1 = __importDefault(require("../../../shared/utils/ImageHandler"));
var UpdateUserService = /** @class */ (function () {
    function UpdateUserService(userRepository) {
        this.userRepository = userRepository;
    }
    UpdateUserService.prototype.execute = function (_a) {
        var id = _a.id, name = _a.name, password = _a.password, enterprise_Name = _a.enterprise_Name, whatsapp = _a.whatsapp, requestImages = _a.requestImages;
        return __awaiter(this, void 0, void 0, function () {
            var validId, images, data, schema, isValid, user, _b, existEnterprise;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        validId = uuid_1.validate(id);
                        if (!validId) {
                            throw new AppError_1.default('insert a valid id');
                        }
                        if (!name && !password && !whatsapp && !requestImages && !enterprise_Name) {
                            throw new AppError_1.default('you need to inform at least one field to update a user');
                        }
                        images = requestImages === null || requestImages === void 0 ? void 0 : requestImages.map(function (image) {
                            return { path: image.filename.replace(' ', '_') };
                        });
                        data = {
                            id: id,
                            name: name,
                            password: password,
                            enterprise_Name: enterprise_Name,
                            whatsapp: whatsapp,
                            images: images,
                        };
                        schema = yup.object().shape({
                            id: yup.string(),
                            name: yup.string(),
                            password: yup.string().min(6),
                            enterprise_Name: yup.string().max(40),
                            whatsapp: yup.number(),
                            images: yup.array(yup.object().shape({
                                path: yup.string(),
                            })),
                        });
                        return [4 /*yield*/, schema.isValid(data, {
                                abortEarly: false,
                            })];
                    case 1:
                        isValid = _c.sent();
                        if (!!isValid) return [3 /*break*/, 3];
                        if (images) {
                            ImageHandler_1.default.deleteImage(images);
                        }
                        return [4 /*yield*/, schema.validate(data, {
                                abortEarly: false,
                            })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.userRepository.findById(id)];
                    case 4:
                        user = _c.sent();
                        if (!user) {
                            if (images) {
                                ImageHandler_1.default.deleteImage(images);
                            }
                            throw new AppError_1.default('User not found', 404);
                        }
                        if (name) {
                            user.name = name;
                        }
                        if (!password) return [3 /*break*/, 6];
                        _b = user;
                        return [4 /*yield*/, bcryptjs_1.hash(password, 8)];
                    case 5:
                        _b.password = _c.sent();
                        _c.label = 6;
                    case 6:
                        if (!enterprise_Name) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.userRepository.findByEnterprise_Name(enterprise_Name)];
                    case 7:
                        existEnterprise = _c.sent();
                        if ((existEnterprise === null || existEnterprise === void 0 ? void 0 : existEnterprise.length) !== 0) {
                            throw new AppError_1.default('Enterprise_Name already registered');
                        }
                        user.enterprise_Name = enterprise_Name;
                        _c.label = 8;
                    case 8:
                        if (whatsapp) {
                            user.whatsapp = whatsapp;
                        }
                        if (requestImages && images) {
                            ImageHandler_1.default.deleteImage(user.images);
                            ImageHandler_1.default.renameImage(user.enterprise_Name, images);
                            user.images.map(function (img, index) {
                                return (img.path =
                                    user.enterprise_Name.replace(' ', '_') + images[index].path);
                            });
                        }
                        return [4 /*yield*/, this.userRepository.update(user)];
                    case 9:
                        _c.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UpdateUserService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('UserRepository')),
        __metadata("design:paramtypes", [Object])
    ], UpdateUserService);
    return UpdateUserService;
}());
exports.default = UpdateUserService;
