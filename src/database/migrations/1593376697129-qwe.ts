import {MigrationInterface, QueryRunner} from "typeorm";

export class qwe1593376697129 implements MigrationInterface {
    name = 'qwe1593376697129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hora" ("id" SERIAL NOT NULL, "valor" numeric NOT NULL, "fecha_compromiso" TIMESTAMP NOT NULL, "servicio" character varying(25), "user" character varying(25), "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4c4a0243c83188c01fb32c730f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orden_pedido" ("id" SERIAL NOT NULL, "valor" numeric NOT NULL, "proveedor" character varying(25) NOT NULL, "producto" character varying(25) NOT NULL, "status" character varying(200) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb12e78b83476708d7ca6f4419e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producto" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "codigo" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_81cf3486f082b2b588f5dcf5792" UNIQUE ("name"), CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "proveedor" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "codigo" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_50e4beb16583b321b4719c98450" UNIQUE ("name"), CONSTRAINT "PK_405f60886417ece76cb5681550a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "hora" character varying, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" text NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "servicio" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "codigo" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_60ff04211f5c385db6bff441ce6" UNIQUE ("name"), CONSTRAINT "PK_a589f335f4fc94f913c9f86e608" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "servicio"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "proveedor"`);
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP TABLE "orden_pedido"`);
        await queryRunner.query(`DROP TABLE "hora"`);
    }

}
