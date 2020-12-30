CREATE DATABASE todoapp;

CREATE TABLE employee (
	empid serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	age integer NOT NULL,
    salary numeric(7,2) NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);