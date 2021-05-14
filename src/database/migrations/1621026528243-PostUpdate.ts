import {MigrationInterface, QueryRunner} from "typeorm";

export class PostUpdate1621026528243 implements MigrationInterface {
    name = 'PostUpdate1621026528243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "category" varchar NOT NULL, "description" varchar(200) NOT NULL, "validUntil" datetime, "details" text, "photos" varchar, "created_at" datetime NOT NULL DEFAULT ('now()'), "updated_at" datetime NOT NULL DEFAULT ('now()'), "userId" varchar, "likes" integer, "visualizations" integer, CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_posts"("id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId", "likes", "visualizations") SELECT "id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId", "likes", "visualizations" FROM "posts"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`ALTER TABLE "temporary_posts" RENAME TO "posts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" RENAME TO "temporary_posts"`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "category" varchar NOT NULL, "description" varchar(200) NOT NULL, "validUntil" datetime NOT NULL, "details" text NOT NULL, "photos" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT ('now()'), "updated_at" datetime NOT NULL DEFAULT ('now()'), "userId" varchar, "likes" integer NOT NULL, "visualizations" integer NOT NULL, CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "posts"("id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId", "likes", "visualizations") SELECT "id", "title", "category", "description", "validUntil", "details", "photos", "created_at", "updated_at", "userId", "likes", "visualizations" FROM "temporary_posts"`);
        await queryRunner.query(`DROP TABLE "temporary_posts"`);
    }

}
