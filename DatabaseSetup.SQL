-- KOALAHOLLA -- Name of SQL database --
CREATE TABLE koala (
id SERIAL PRIMARY KEY,
name VARCHAR (30) NOT NULL,
sex VARCHAR (1) NOT NULL,
age INTEGER NOT NULL,
ready_for_transfer BOOLEAN DEFAULT false,
notes TEXT);
