"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormatDate_1 = __importDefault(require("../../../shared/utils/FormatDate"));
exports.default = {
    render: function (Sale) {
        return {
            id: Sale.id,
            name: Sale.name,
            brand: Sale.brand,
            price: Sale.price,
            amount: Sale.amount,
            user_id: Sale.user_id,
            subUser_id: Sale.subUser_id,
            created_at: FormatDate_1.default(Sale.created_at),
            updated_at: FormatDate_1.default(Sale.updated_at),
            sub_User: { name: Sale === null || Sale === void 0 ? void 0 : Sale.sub_User.name },
        };
    },
    renderMany: function (Sales) {
        var _this = this;
        return Sales.map(function (Sale) { return _this.render(Sale); });
    },
};
