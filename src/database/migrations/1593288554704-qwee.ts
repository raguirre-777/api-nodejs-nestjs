import {MigrationInterface, QueryRunner} from "typeorm";

export class qwee1593288554704 implements MigrationInterface {
    name = 'qwee1593288554704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "hora" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "hora"`);
    }

}
