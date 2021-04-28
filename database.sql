CREATE DATABASE todo_database;

CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
	password VARCHAR(255),
	name VARCHAR(255),
	email VARCHAR(255)
);
