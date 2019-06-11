psql -d flightpath -U sam

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    game_type VARCHAR NOT NULL,
    p1_username VARCHAR NOT NULL,
    p1_id INT NOT NULL,
    p2_username VARCHAR NOT NULL,
    p2_id INT NOT NULL,
    winner VARCHAR NOT NULL
);

CREATE TABLE cricket_details (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    darts INT NOT NULL,
    marks20 INT NOT NULL,
    score20 INT NOT NULL,
    marks19 INT NOT NULL,
    score19 INT NOT NULL,
    marks18 INT NOT NULL,
    score18 INT NOT NULL,
    marks17 INT NOT NULL,
    score17 INT NOT NULL,
    marks16 INT NOT NULL,
    score16 INT NOT NULL,
    marks15 INT NOT NULL,
    score15 INT NOT NULL,
    marks25 INT NOT NULL,
    score25 INT NOT NULL
);

INSERT INTO users (username, password)
VALUES ('sam barksdale', 'password'),('wayne barksdale', 'password'),('will', 'password');

INSERT INTO game (game_type, p1_username, p1_id, p2_username, p2_id, winner)
VALUES ('cricket', 'sam barksdale', '1', 'wayne barksdale', '2', 'sam barksdale'),
('cricket', 'sam barksdale', '1', 'will', '3', 'sam barksdale');

INSERT INTO cricket_details (user_id, game_id, darts, marks20, score20, marks19, score19, marks18, score18, marks17, score17, marks16, score16, marks15, score15, marks25, score25)
VALUES ('1','1','7','3','0','3','0','3','0','3','0','3','0','3','0','3','0'),
       ('2','1','6','1','0','1','0','1','0','1','0','1','0','1','0','1','0'),
       ('1','2','7','3','0','3','0','3','0','3','0','3','0','3','0','3','0'),
       ('3','2','6','1','0','1','0','1','0','1','0','1','0','1','0','1','0');

