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
exports.Board = void 0;
const typeorm_1 = require("typeorm");
const catetory_entity_1 = require("./catetory.entity");
let Board = class Board {
};
__decorate([
    typeorm_1.PrimaryColumn({
        primary: true,
        unique: true,
    }),
    __metadata("design:type", Number)
], Board.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: "longtext" }),
    __metadata("design:type", Boolean)
], Board.prototype, "content", void 0);
__decorate([
    typeorm_1.ManyToOne(() => catetory_entity_1.Category, (catetory) => catetory.board, {
        primary: true,
    }),
    __metadata("design:type", catetory_entity_1.Category)
], Board.prototype, "category", void 0);
Board = __decorate([
    typeorm_1.Entity({
        name: "boards",
    })
], Board);
exports.Board = Board;
//# sourceMappingURL=board.entity.js.map