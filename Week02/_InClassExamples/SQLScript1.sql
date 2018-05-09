--This is a SQL comment!
/*
    This is a SQL comment block
*/

--DDL

DROP TABLE animals;
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


