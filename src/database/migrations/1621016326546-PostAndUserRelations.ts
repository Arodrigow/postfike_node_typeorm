import {MigrationInterface, QueryRunner} from "typeorm";

export class PostAndUserRelations1621016326546 implements MigrationInterface {
    name = 'PostAndUserRelations1621016326546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "category" varchar NOT NULL, "description" varchar(200) NOT NULL, "validUntil" datetime NOT NULL, "details" text NOT NULL, "photos" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT ('now()'), "updated_at" datetime NOT NULL DEFAULT ('now()'), "userId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "password", "phone", "email", "created_at", "updated_at") SELECT "id", "name", "password", "phone", "email", "created_at", "updated_at" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
        await queryRunner.query(`CREATE TABLE "temporary_posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "category" varchar NOT NULL, "description" varchar(200) NOT NULL, "validUntil" datetime NOT NULL, "details" text NOT NULL, "photos" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT ('now()'), "updated_at" datetime NOT NULL DEFAULT ('now()'), "userId" varchar, CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_posts"("id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId") SELECT "id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId" FROM "posts"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`ALTER TABLE "temporary_posts" RENAME TO "posts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" RENAME TO "temporary_posts"`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "category" varchar NOT NULL, "description" varchar(200) NOT NULL, "validUntil" datetime NOT NULL, "details" text NOT NULL, "photos" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT ('now()'), "updated_at" datetime NOT NULL DEFAULT ('now()'), "userId" varchar)`);
        await queryRunner.query(`INSERT INTO "posts"("id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId") SELECT "id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId" FROM "temporary_posts"`);
        await queryRunner.query(`DROP TABLE "temporary_posts"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "password", "phone", "email", "created_at", "updated_at") SELECT "id", "name", "password", "phone", "email", "created_at", "updated_at" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
