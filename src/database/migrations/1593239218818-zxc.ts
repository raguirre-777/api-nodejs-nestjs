import {MigrationInterface, QueryRunner} from "typeorm";

export class zxc1593239218818 implements MigrationInterface {
    name = 'zxc1593239218818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hora" DROP CONSTRAINT "FK_77ccb540c6be1386e7ec803bf5f"`);
        await queryRunner.query(`ALTER TABLE "hora" DROP CONSTRAINT "FK_c755b173848bf45d04461159bb9"`);
        await queryRunner.query(`CREATE TABLE "orden_pedido" ("id" SERIAL NOT NULL, "valor" numeric NOT NULL, "proveedor" character varying(25) NOT NULL, "producto" character varying(25) NOT NULL, "status" character varying(200) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb12e78b83476708d7ca6f4419e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "hora" DROP COLUMN "hora_id"`);
        await queryRunner.query(`ALTER TABLE "hora" DROP CONSTRAINT "REL_77ccb540c6be1386e7ec803bf5"`);
        await queryRunner.query(`ALTER TABLE "hora" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "hora" ADD "servicio" character varying(25)`);
        await queryRunner.query(`ALTER TABLE "hora" ADD "user" character varying(25)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hora" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "hora" DROP COLUMN "servicio"`);
        await queryRunner.query(`ALTER TABLE "hora" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "hora" ADD CONSTRAINT "REL_77ccb540c6be1386e7ec803bf5" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "hora" ADD "hora_id" integer`);
        await queryRunner.query(`DROP TABLE "orden_pedido"`);
        await queryRunner.query(`ALTER TABLE "hora" ADD CONSTRAINT "FK_c755b173848bf45d04461159bb9" FOREIGN KEY ("hora_id") REFERENCES "servicio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hora" ADD CONSTRAINT "FK_77ccb540c6be1386e7ec803bf5f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
