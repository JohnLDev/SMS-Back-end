"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormatDate_1 = __importDefault(require("../../../shared/utils/FormatDate"));
var ImageView_1 = __importDefault(require("../views/ImageView"));
exports.default = {
    render: function (user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            enterprise_Name: user.enterprise_Name,
            whatsapp: user.whatsapp,
            images: ImageView_1.default.renderMany(user.images),
            created_at: FormatDate_1.default(user.created_at),
            updated_at: FormatDate_1.default(user.updated_at),
        };
    },
    renderMany: function (users) {
        var _this = this;
        return users.map(function (user) { return _this.render(user); });
    },
};
