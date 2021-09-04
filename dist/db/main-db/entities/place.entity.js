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
exports.Place = void 0;
const base_entity_1 = require("../../../common/typeorm-helper/entities/base.entity");
const entities_1 = require("./");
const typeorm_1 = require("typeorm");
let Place = class Place extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Place.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Place.prototype, "city", void 0);
__decorate([
    typeorm_1.ManyToOne(() => entities_1.User),
    typeorm_1.JoinColumn({ name: 'ownerId' }),
    __metadata("design:type", entities_1.User)
], Place.prototype, "owner", void 0);
Place = __decorate([
    typeorm_1.Entity('place')
], Place);
exports.Place = Place;
//# sourceMappingURL=place.entity.js.map