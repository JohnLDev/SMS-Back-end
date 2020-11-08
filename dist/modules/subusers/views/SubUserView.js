"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormatDate_1 = __importDefault(require("../../../shared/utils/FormatDate"));
exports.default = {
    render: function (subUser) {
        return {
            id: subUser.id,
            name: subUser.name,
            email: subUser.email,
            isAdm: subUser.is_Adm,
            created_at: FormatDate_1.default(subUser.created_at),
            updated_at: FormatDate_1.default(subUser.updated_at),
        };
    },
    renderMany: function (subUsers) {
        var _this = this;
        return subUsers.map(function (subUser) { return _this.render(subUser); });
    },
};
