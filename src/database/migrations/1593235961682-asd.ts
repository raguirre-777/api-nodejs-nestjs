import {MigrationInterface, QueryRunner} from "typeorm";

export class asd1593235961682 implements MigrationInterface {
    name = 'asd1593235961682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hora" ("id" SERIAL NOT NULL, "valor" numeric NOT NULL, "fecha_compromiso" TIMESTAMP NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "hora_id" integer, "user_id" integer, CONSTRAINT "REL_77ccb540c6be1386e7ec803bf5" UNIQUE ("user_id"), CONSTRAINT "PK_4c4a0243c83188c01fb32c730f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "hora" ADD CONSTRAINT "FK_c755b173848bf45d04461159bb9" FOREIGN KEY ("hora_id") REFERENCES "servicio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hora" ADD CONSTRAINT "FK_77ccb540c6be1386e7ec803bf5f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hora" DROP CONSTRAINT "FK_77ccb540c6be1386e7ec803bf5f"`);
        await queryRunner.query(`ALTER TABLE "hora" DROP CONSTRAINT "FK_c755b173848bf45d04461159bb9"`);
        await queryRunner.query(`DROP TABLE "hora"`);
    }

}
