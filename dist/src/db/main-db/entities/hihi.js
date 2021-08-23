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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hihi = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const base_entity_1 = require("./../../../common/typeorm-helper/entities/base.entity");
function Existing(target, property) {
    const setter = async (value) => {
        console.log('value: ', value);
        if (!(await user_entity_1.User.findOne({ where: { email: value } }))) {
            throw 'error kiaf';
        }
    };
    Object.defineProperty(target, property, {
        set: setter,
    });
}
let Hihi = class Hihi extends base_entity_1.BaseEntity {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    Existing,
    __metadata("design:type", String)
], Hihi.prototype, "email", void 0);
Hihi = __decorate([
    graphql_1.ObjectType({ isAbstract: true }),
    typeorm_1.Entity('users')
], Hihi);
exports.Hihi = Hihi;
//# sourceMappingURL=hihi.js.map