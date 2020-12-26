"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1608971928384 = void 0;
class test1608971928384 {
    constructor() {
        this.name = 'test1608971928384';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `categories` (`id` int NOT NULL, `name` varchar(255) NOT NULL, `type` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `boards` (`id` int NOT NULL, `title` varchar(255) NOT NULL, `content` longtext NOT NULL, `categoryId` int NOT NULL, PRIMARY KEY (`id`, `categoryId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `boards` ADD CONSTRAINT `FK_94dba224fe845ffa8e36a8b4e77` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `boards` DROP FOREIGN KEY `FK_94dba224fe845ffa8e36a8b4e77`");
        await queryRunner.query("DROP TABLE `boards`");
        await queryRunner.query("DROP TABLE `categories`");
    }
}
exports.test1608971928384 = test1608971928384;
//# sourceMappingURL=1608971928384-test.js.map