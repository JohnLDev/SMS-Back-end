"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("../../../../users/infra/typeorm/entities/User"));
var SubUser_1 = __importDefault(require("../../../../subusers/infra/typeorm/entities/SubUser"));
var Sale = /** @class */ (function () {
    function Sale() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", String)
    ], Sale.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sale.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sale.prototype, "brand", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sale.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return User_1.default; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.default)
    ], Sale.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sale.prototype, "subUser_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return SubUser_1.default; }, function (subUser) { return subUser.Sale; }, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            eager: true,
        }),
        typeorm_1.JoinColumn({ name: 'subUser_id' }),
        __metadata("design:type", SubUser_1.default)
    ], Sale.prototype, "sub_User", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Sale.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Sale.prototype, "updated_at", void 0);
    Sale = __decorate([
        typeorm_1.Entity('sales')
    ], Sale);
    return Sale;
}());
exports.default = Sale;
