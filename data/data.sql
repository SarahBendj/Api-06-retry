
DROP TABLE IF EXISTS "list", "card", "tag","card_tag";

CREATE TABLE "list" (
    "id" INT  GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "position" INT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
CREATE TABLE "card"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" TEXT NOT NULL,
    "color" VARCHAR(7),
    "position" INT NOT NULL DEFAULT 0,
    "list_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ,
    CONSTRAINT "fk_card_list" FOREIGN KEY ("list_id") REFERENCES "list"("id") ON DELETE CASCADE

);
CREATE TABLE "tag" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(7),
    "created_at" TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
CREATE TABLE "card_tag"(
    "card_id" INT NOT NULL,
    "tag_id" INT NOT NULL,
    PRIMARY KEY ("card_id", "tag_id"),
    CONSTRAINT "fk_cardtag_card" FOREIGN KEY ("card_id") REFERENCES "card"("id") ON DELETE CASCADE,
    CONSTRAINT "fk_cardtag_tag" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE
);
INSERT INTO "list" ("name", "position") VALUES ('Todo', 0);
INSERT INTO "list" ("name", "position") VALUES ('Doing', 1);
INSERT INTO "list" ("name", "position") VALUES ('Done', 2);

INSERT INTO "card" ("description", "color", "position", "list_id") VALUES ('Première tâche', '#00FF00', 1, 1);
INSERT INTO "card" ("description", "color", "position", "list_id") VALUES ('Deuxième tâche', '#FFFF00', 2, 3);
INSERT INTO "card" ("description", "color", "position", "list_id") VALUES ('Troisième tâche', '#00FFFF', 3, 3);
INSERT INTO "card" ("description", "color", "position", "list_id") VALUES ('Quatrième tâche', '#0FFF00', 4, 2);
INSERT INTO "card" ("description", "color", "position", "list_id") VALUES ('Cinquième tâche', '#00FFF0', 5, 1);

INSERT INTO "tag" ("name", "color") VALUES ('Urgent', '#00FFF0');
INSERT INTO "tag" ("name", "color") VALUES ('issue', '#0FFF00');
INSERT INTO "tag" ("name", "color") VALUES ('bug', '#00FF00');
INSERT INTO "tag" ("name", "color") VALUES ('ux/ui', '#00FFFF');

 INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (1, 3);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (1, 4);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (2, 1);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (2, 3);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (3, 1);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (3, 2);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (4, 2);
INSERT INTO "card_tag" ("card_id", "tag_id") VALUES (4, 4);


