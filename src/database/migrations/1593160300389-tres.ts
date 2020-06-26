import {MigrationInterface, QueryRunner} from "typeorm";

export class tres1593160300389 implements MigrationInterface {
    name = 'tres1593160300389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "proveedor" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "codigo" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_50e4beb16583b321b4719c98450" UNIQUE ("name"), CONSTRAINT "PK_405f60886417ece76cb5681550a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "proveedor"`);
    }

}
