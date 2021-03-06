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
var yup = __importStar(require("yup"));
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("../../../config/auth"));
var email_1 = __importDefault(require("../../../config/email"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var handlebars_1 = __importDefault(require("handlebars"));
var SendRedefinitionPasswordEmail = /** @class */ (function () {
    function SendRedefinitionPasswordEmail(userRepository) {
        this.userRepository = userRepository;
    }
    SendRedefinitionPasswordEmail.prototype.execute = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var emailValidation, user, _a, secret, expiresIn, token, link, filePath, source, template, replacements, htmlToSend, mailOptions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        emailValidation = yup.string().email().required();
                        return [4 /*yield*/, emailValidation.validate(email)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.userRepository.findByEmail(email)];
                    case 2:
                        user = _b.sent();
                        if (!user) {
                            throw new AppError_1.default('User not found');
                        }
                        _a = auth_1.default.jwt, secret = _a.secret, expiresIn = _a.expiresIn;
                        token = jsonwebtoken_1.sign({}, secret, {
                            subject: user.email,
                            expiresIn: expiresIn,
                        });
                        link = 'redefine-password-enterprise';
                        filePath = path_1.default.join(__dirname, '../../../shared/templates/EmailRedefinitionPassword.html');
                        source = fs_1.default.readFileSync(filePath, 'utf-8').toString();
                        template = handlebars_1.default.compile(source);
                        replacements = {
                            token: token,
                            link: link,
                        };
                        htmlToSend = template(replacements);
                        mailOptions = {
                            from: 'linkgamercheetos@gmail.com',
                            to: email,
                            subject: "Tx2l's Redefini\u00E7\u00E3o de senha",
                            html: htmlToSend,
                            context: token,
                        };
                        email_1.default.sendMail(mailOptions);
                        return [2 /*return*/, token];
                }
            });
        });
    };
    SendRedefinitionPasswordEmail = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('UserRepository')),
        __metadata("design:paramtypes", [Object])
    ], SendRedefinitionPasswordEmail);
    return SendRedefinitionPasswordEmail;
}());
exports.default = SendRedefinitionPasswordEmail;
