--This is a SQL comment
/*
    This is a SQL comment block
*/

--DDL

/*
    CONSTRAINTS - Relational rules you can apply to your database
        PRIMARY KEY 
            makes fields of that record both UNIQUE and NOT NULL
        FOREIGN KEY
            a field whose existance relies on the data existing in the record it points at
        DEFAULT
            a default value that replaces NULL values
        NULL/NOT NULL
            whether NULL values are allowed or not
        UNIQUE
            only distinct values allowed in a field
        CHECK
            enforce data value rule on a field (i.e. no values greater than 20)
*/
/*
    you have to drop tables in the proper order unless you use CASCADE CONSTRAINTS.
    if you don't use this, you have to drop tables with NO foreign keys first.
*/
DROP TABLE animals CASCADE CONSTRAINTS;
/ --separates transactions from each other only needed for DDL
DROP TABLE owners CASCADE CONSTRAINTS;
DROP TABLE pet_shop CASCADE CONSTRAINTS;
DROP TABLE pets CASCADE CONSTRAINTS;

CREATE TABLE animals (
        animal_id NUMBER(6) PRIMARY KEY, --fieldName DataType(size) [constraints] size represents the maximum digits in NUMER, or the maximum character count in VARCHAR
        animal_name VARCHAR2(100) UNIQUE, --UNIQUE allows for nulls, and multiple of them
        animal_leg_count NUMBER(2)
);

CREATE TABLE owners (
        owner_id NUMBER(6),
        owner_name VARCHAR2(100),
        owner_address VARCHAR2(200),
        owner_height NUMBER(6),
        owner_age NUMBER(6),
        CONSTRAINT owner_id_pk PRIMARY KEY (owner_id)
        --CONSTRAINT constraintName TypeOfConstraint (field)
);

CREATE TABLE pet_shop (
        shop_id NUMBER(6),
        shop_name VARCHAR(100) NOT NULL,
        shop_owner_id NUMBER(6),
        CONSTRAINT shop_id_pk PRIMARY KEY (shop_id),
        CONSTRAINT shop_owner_id_fk FOREIGN KEY (shop_owner_id) 
            REFERENCES owners (owner_id) ON DELETE CASCADE
);

CREATE TABLE pets (
        pet_id NUMBER(6),
        pet_name VARCHAR2(100),
        animal_id NUMBER(6),
        shop_id NUMBER(6),
        owner_id NUMBER(6),
        CONSTRAINT pet_id_pk PRIMARY KEY (pet_id),
        CONSTRAINT shop_id_fk FOREIGN KEY (shop_id) 
            REFERENCES pet_shop (shop_id) ON DELETE CASCADE, --ON DELETE CASCADE deletes all chained dependencies if you delete this reference
        CONSTRAINT animal_id_fk FOREIGN KEY (animal_id)
            REFERENCES animals (animal_id) ON DELETE CASCADE,
        CONSTRAINT owner_id_fk FOREIGN KEY (owner_id)
            REFERENCES owners (owner_id) ON DELETE CASCADE
);

--DML

--animals
--animal_id, anima_name, animal_leg_count
INSERT INTO animals (animal_id, animal_name, animal_leg_count) VALUES (0, 'Pengu', 2); --USE '' FOR STRINGS, NOT ""
/*
    if you omit the column names portion of an insert statement, it will assume you are providing data for each column in the 
    order they appear in the table.
*/
INSERT INTO animals VALUES (1, 'Doggo', 4);
INSERT INTO animals VALUES (2, 'Pupper', 4);
INSERT INTO animals VALUES (3, 'Alaskan Bull Worm',  0);
INSERT INTO animals VALUES (4, 'Woofer', 4);

--owners
--owner_id, owner_name, owner_address, owner_height, owner_age
INSERT INTO owners VALUES (0, 'Kyle', '14601 SE 243rd PL', 64, 23);
INSERT INTO owners VALUES (1, 'Elyk', '10641 NW 342nd ST', 46, 32);
INSERT INTO owners VALUES (2, 'Bryle', '12337 N 14th AVE', 64, 23);
INSERT INTO owners VALUES (3, 'Coken', '54321 W Oregon DR', 75, 22);
INSERT INTO owners VALUES (4, 'Yake', '90210 E Cincinnati LN', 66, 22);
    
--pet_shop 
--shop_id, shop_name, shop_owner_id
INSERT INTO pet_shop VALUES (0, 'Candy Land', 0);
INSERT INTO pet_shop VALUES (1, 'Candy World', 2);
INSERT INTO pet_shop VALUES (2, 'Candy Plane', 1);
INSERT INTO pet_shop VALUES (3, 'Candy Dimension', 1);
INSERT INTO pet_shop VALUES (4, 'Candy Country', 4);

--pets
--pet_id, pet_name, animal_id, shop_id, owner_id
INSERT INTO pets VALUES (0, 'Pupperoni', (SELECT animals.animal_id FROM animals WHERE animals.animal_name = 'Pupper'), null, 0);
INSERT INTO pets VALUES (1, 'Doggoccino', (SELECT animals.animal_id FROM animals WHERE animals.animal_name = 'Doggo'), 3, null);
INSERT INTO pets VALUES (2, 'PengiPoppo', (SELECT animals.animal_id FROM animals WHERE animals.animal_name = 'Pengu'), null, 3);
INSERT INTO pets VALUES (3, 'Wormy', (SELECT animals.animal_id FROM animals WHERE animals.animal_name = 'Alaskan Bull Worm'), 2, null);
INSERT INTO pets VALUES (4, 'Woofy', (SELECT animals.animal_id FROM animals WHERE animals.animal_name = 'Woofer'), null, 3);

SELECT * FROM animals;
SELECT * FROM owners;
SELECT * FROM pet_shop;
SELECT * FROM pets;