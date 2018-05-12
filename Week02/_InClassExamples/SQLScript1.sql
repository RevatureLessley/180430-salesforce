--This is a SQL comment!
/*
    This is a SQL comment block
*/

--DDL

DROP TABLE animals CASCADE CONSTRAINTS;
DROP TABLE pets CASCADE CONSTRAINTS;
DROP TABLE pet_shop CASCADE CONSTRAINTS;
DROP TABLE owners CASCADE CONSTRAINTS;
/ --Separates transactions from eachother

CREATE TABLE animals (
    animal_id NUMBER(6) PRIMARY KEY, --fieldName DataType(size) [constraints]
    animal_name VARCHAR2(100) UNIQUE, --UNIQUE DOES allow null, and multiples of it
    animal_leg_count NUMBER(2)
);

CREATE TABLE owners (
    owner_id number(6),
    owner_name varchar2(100) not null,
    owner_address varchar2(200),
    owner_height number(6),
    owner_age number(6),
    CONSTRAINT owner_id_pk PRIMARY KEY (owner_id)
    --CONSTRAINT constraintName TypeOfConstraint (column applied to)
);
/
CREATE TABLE pet_shop (
    shop_id number(6),
    shop_name varchar(100) not null,
    shop_owner_id number(6),
    CONSTRAINT shop_id_pk PRIMARY KEY (shop_id),
    CONSTRAINT shop_owner_id_fk FOREIGN KEY (shop_owner_id)
        REFERENCES owners (owner_id) 
);
/

CREATE TABLE pets (
    pet_id number(6),
    pet_name varchar2(100),
    animal_id number(6),
    shop_id number(6),
    owner_id number(6),
    CONSTRAINT pet_id_pk PRIMARY KEY (pet_id),
    CONSTRAINT shop_id_fk FOREIGN KEY (shop_id)
        REFERENCES PET_SHOP (shop_id) ON DELETE CASCADE,
    CONSTRAINT animal_id_fk FOREIGN KEY (animal_id)
        REFERENCES animals (animal_id) ON DELETE CASCADE,
    CONSTRAINT owner_id_fk FOREIGN KEY (owner_id) 
        REFERENCES owners (owner_id) ON DELETE CASCADE
)
/*
    CONSTRANTS - Relational rules you can apply your database
    -PRIMARY KEY - Makes a column unique and not null
    -FOREIGN KEY - A column whose existence relies on the data existing
            in the table it points at
    -DEFAULT - Should null be inputted, a default replaces it
    -NULL/NOT NULL - where null values are allowed or not
    -UNIQUE - Only distinct (IE only of it) inputs allowed in the column
    -CHECK - Enforce data value rule on a column (IE no values greater
                than 20)
*/

--DML
INSERT INTO animals (ANIMAL_ID, ANIMAL_NAME, ANIMAL_LEG_COUNT)
VALUES (1, 'Bobbert', 7);
--If you omit the column names portion of an insert statement, it will
--implicitly assume you are providing data for each column in the order they
--appear in the table.
INSERT INTO animals VALUES (2,'Dog', 4);
INSERT INTO animals VALUES (3,'Cat', 4);
INSERT INTO animals VALUES (4,'Octopus', 8);
INSERT INTO animals VALUES (5,'Alaskan Bull Worm', 0);

INSERT INTO owners
VALUES (1,'kyle m', 'here', '510', 70);
INSERT INTO owners
VALUES (2,'Jared', 'there', '511', 46);
INSERT INTO owners
VALUES (3,'Logan', 'over there', '86', 23);
INSERT INTO owners
VALUES (4,'bobby', 'where', '620', 31);
INSERT INTO owners
VALUES (5,'Ryan', 'Outside', '981', 31);
INSERT INTO owners
VALUES (6,'David', 'Inside', '12', 70);
INSERT INTO owners
VALUES (7,'Jeffrey', 'Outerside', '1234', 31);

INSERT INTO pet_shop VALUES
(1, 'Mario''s Muppets', 2);
INSERT INTO pet_shop VALUES
(2, 'Kyle''s Kittens', 1);

INSERT INTO pets VALUES (1, 'Vulture Candy', 5, null, 4);
INSERT INTO pets VALUES (2, 'Trident', 4, 1, null);
INSERT INTO pets VALUES (3, 'A2', 3, null, 4);
INSERT INTO pets VALUES (4, 'Sam', 2, 2, null);
INSERT INTO pets VALUES (5, 'Senorito', 3, null, 3);

--Where
SELECT * FROM pets WHERE OWNER_ID = 4;

--Selecting specific columns
SELECT pet_name FROM pets WHERE owner_id = 4;
--Use aliases to rename columns or substitute a variable name for a table name. 

SELECT * FROM pets WHERE owner_id <> 4; -- <> = not equal
SELECT * FROM owners;

/*
    Aggragate Function
    Any Function that you apply to an entire column to yield one result.
    Examples include average or max/min or sum.
    Key functions:
    SUM()
    AVG()
    MAX()
    MIN()
    STDDEV()
    VARIANCE()
    COUNT() <- This one is extraordinarily important for testing databases
    LAST()
    FIRST()
*/
SELECT count(*) FROM owners; --Count the amount of owners

SELECT sum(owner_height) from owners;
SELECT avg(owner_height) from owners;

--Where applies to every record individually 
--HAVING applies to aggragated information (happens after a WHERE clause

/*
    Order of operations
    WHERE 
    GROUP BY
    HAVING
    SELECT
    ORDER BY
*/

SELECT sum(owner_height), owner_age from owners
WHERE owner_id > 2
GROUP BY owner_age
HAVING sum(owner_height) > 25;
ORDER BY owner_age ASC;

/*
    SCALAR FUNCTIONS
    -A scalr function applies to each record individually of a column
    -e.g. Alters the value within each cell of a column
    -When in doubt, think String manipulation functions
    lower() -converts string to lower case
    upper() 
    ABS()
    cos(),sin(),tan()
    ROUND()
    TRUNC()
    CONCAT()
    LENGTH()
    TRIM() --Removes all extra white space from both sides of a string
    LTRIM() --removes white space from left side
    RTRIM() 
    
*/

select upper(owner_name) from owners;
--using operators within the column

