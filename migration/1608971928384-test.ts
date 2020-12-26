import {MigrationInterface, QueryRunner} from "typeorm";

export class test1608971928384 implements MigrationInterface {
    name = 'test1608971928384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `categories` (`id` int NOT NULL, `name` varchar(255) NOT NULL, `type` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `boards` (`id` int NOT NULL, `title` varchar(255) NOT NULL, `content` longtext NOT NULL, `categoryId` int NOT NULL, PRIMARY KEY (`id`, `categoryId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `boards` ADD CONSTRAINT `FK_94dba224fe845ffa8e36a8b4e77` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `boards` DROP FOREIGN KEY `FK_94dba224fe845ffa8e36a8b4e77`");
        await queryRunner.query("DROP TABLE `boards`");
        await queryRunner.query("DROP TABLE `categories`");
    }

}
