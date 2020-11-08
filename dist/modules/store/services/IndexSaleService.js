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
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var date_fns_1 = require("date-fns");
var yup = __importStar(require("yup"));
var IndexSaleService = /** @class */ (function () {
    function IndexSaleService(saleRepository, subUserRepository) {
        this.saleRepository = saleRepository;
        this.subUserRepository = subUserRepository;
        this.sales = [];
    }
    IndexSaleService.prototype.execute = function (_a) {
        var user_id = _a.user_id, fromDate = _a.fromDate, untilDate = _a.untilDate, subUser_Name = _a.subUser_Name;
        return __awaiter(this, void 0, void 0, function () {
            var data, schema, sales, _b, day1, month1, year1, dateAfter_1, _c, day2, month2, year2, dateBefore_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!uuid_1.validate(user_id)) {
                            throw new AppError_1.default('user_id is not valid');
                        }
                        data = {
                            user_id: user_id,
                            fromDate: fromDate,
                            untilDate: untilDate,
                            subUser_Name: subUser_Name,
                        };
                        schema = yup.object().shape({
                            user_id: yup.string().required(),
                            fromDate: yup.string().max(10),
                            untilDate: yup.string().max(10),
                            subUser_Name: yup.string(),
                        });
                        return [4 /*yield*/, schema.validate(data)];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.saleRepository.findAll(user_id)];
                    case 2:
                        sales = _d.sent();
                        if (!sales) {
                            throw new AppError_1.default('does not exist registered sales to found');
                        }
                        this.sales = sales;
                        if (fromDate) {
                            _b = fromDate.split('/'), day1 = _b[0], month1 = _b[1], year1 = _b[2];
                            dateAfter_1 = new Date(year1, month1 - 1, day1);
                            this.sales = this.sales.filter(function (sale) {
                                return date_fns_1.isAfter(sale.created_at, dateAfter_1);
                            });
                        }
                        if (untilDate) {
                            _c = untilDate.split('/'), day2 = _c[0], month2 = _c[1], year2 = _c[2];
                            dateBefore_1 = new Date(year2, month2 - 1, day2);
                            this.sales = this.sales.filter(function (sale) {
                                return date_fns_1.isBefore(sale.created_at, dateBefore_1);
                            });
                        }
                        if (subUser_Name) {
                            this.sales = this.sales.filter(function (sale) { return sale.sub_User.name === subUser_Name; });
                        }
                        return [2 /*return*/, this.sales];
                }
            });
        });
    };
    IndexSaleService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('SaleRepository')),
        __param(1, tsyringe_1.inject('SubUserRepository')),
        __metadata("design:paramtypes", [Object, Object])
    ], IndexSaleService);
    return IndexSaleService;
}());
exports.default = IndexSaleService;
