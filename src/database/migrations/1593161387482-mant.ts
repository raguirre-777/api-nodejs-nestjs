import {MigrationInterface, QueryRunner} from "typeorm";

export class mant1593161387482 implements MigrationInterface {
    name = 'mant1593161387482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "producto" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "codigo" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_81cf3486f082b2b588f5dcf5792" UNIQUE ("name"), CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "servicio" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "codigo" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_60ff04211f5c385db6bff441ce6" UNIQUE ("name"), CONSTRAINT "PK_a589f335f4fc94f913c9f86e608" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "servicio"`);
        await queryRunner.query(`DROP TABLE "producto"`);
    }

}
