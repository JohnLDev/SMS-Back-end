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
var Storage_1 = __importDefault(require("../../infra/typeorm/entities/Storage"));
var StorageRepository = /** @class */ (function () {
    function StorageRepository() {
        this.storage = [];
    }
    StorageRepository.prototype.create = function (_a) {
        var name = _a.name, brand = _a.brand, price = _a.price, amount = _a.amount, barcode = _a.barcode, user_id = _a.user_id;
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_b) {
                item = new Storage_1.default();
                item.id = String(this.storage.length + 1);
                item.name = name;
                item.brand = brand;
                item.price = price;
                item.amount = amount;
                item.barcode = barcode;
                item.user_id = user_id;
                item.created_at = Date.now();
                item.updated_at = Date.now();
                this.storage.push(item);
                return [2 /*return*/, item];
            });
        });
    };
    StorageRepository.prototype.update = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storage.filter(function (storage) { return storage.id === item.id; });
                this.storage.push(item);
                return [2 /*return*/, item];
            });
        });
    };
    StorageRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storage.filter(function (storage) { return storage.id === id; });
                return [2 /*return*/];
            });
        });
    };
    StorageRepository.prototype.findAll = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.storage.length === 0) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.storage];
            });
        });
    };
    StorageRepository.prototype.findById = function (id, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.storage.find(function (storage) { return storage.id === id; });
                return [2 /*return*/, item];
            });
        });
    };
    StorageRepository.prototype.findByName = function (name, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.storage.find(function (storage) { return storage.name === name; });
                return [2 /*return*/, item];
            });
        });
    };
    StorageRepository.prototype.findByBrand = function (brand, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, found;
            return __generator(this, function (_a) {
                storage = [];
                found = this.storage.find(function (storage) { return storage.brand === brand; });
                if (!found) {
                    return [2 /*return*/, undefined];
                }
                storage.push(found);
                return [2 /*return*/, storage];
            });
        });
    };
    StorageRepository.prototype.findByNameAndBrand = function (name, brand, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var filterByName, findByBrand;
            return __generator(this, function (_a) {
                filterByName = this.storage.find(function (storage) { return storage.name === name; });
                findByBrand = this.storage.find(function (storage) { return storage.brand === brand; });
                if (filterByName !== findByBrand) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, findByBrand];
            });
        });
    };
    StorageRepository.prototype.findByBarcode = function (barcode, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.storage.find(function (storage) { return storage.barcode === barcode; });
                return [2 /*return*/, item];
            });
        });
    };
    return StorageRepository;
}());
exports.default = StorageRepository;
