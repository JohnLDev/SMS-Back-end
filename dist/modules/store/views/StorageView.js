"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormatDate_1 = __importDefault(require("../../../shared/utils/FormatDate"));
exports.default = {
    render: function (Storage) {
        return {
            id: Storage.id,
            barcode: Storage.barcode,
            name: Storage.name,
            brand: Storage.brand,
            price: Storage.price,
            amount: Storage.amount,
            user_id: Storage.user_id,
            created_at: FormatDate_1.default(Storage.created_at),
            updated_at: FormatDate_1.default(Storage.updated_at),
        };
    },
    renderMany: function (Storages) {
        var _this = this;
        return Storages.map(function (Storage) { return _this.render(Storage); });
    },
};
