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

CREATE TABLE owner_contact(
    c_id NUMBER(6) PRIMARY KEY,
    o_id NUMBER(6),
    phone VARCHAR2(200),
    CONSTRAINT owner_contact_fk FOREIGN KEY (o_id) 
        REFERENCES owners (owner_id)
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

INSERT INTO owner_contact VALUES (0, 0, '(206)-313-1249');
INSERT INTO owner_contact VALUES (1, 1, '(928)-555-8815');
INSERT INTO owner_contact VALUES (2, 2, '(904)-555-1190');
INSERT INTO owner_contact VALUES (3, 3, '(123)-456-7890');
INSERT INTO owner_contact VALUES (4, 4, '(253)-889-4142');



--WHERE clause
SELECT * FROM pets WHERE owner_id<2;

--SELECT specific fields
SELECT pet_name FROM pets WHERE owner_id<2;

--AS (aliases)
--rename a column, only to display
SELECT pet_name as "My Pet!" FROM pets WHERE owner_id<2;

-- "<>" = "not equal to"
SELECT * FROM pets WHERE owner_id<>4;

/*
    Aggregate Functions
        any function that you apply to an ENTIRE COLUMN to yield ONE RESULT
        ex: average, max, min, sum, ...
    Key Functions:
        SUM()
        AVG()
        MAX()
        MIN()
        STDDEV()
        VARIANCE()
        COUNT() <- extraordinarily important for testing DBs.
        LAST()
        FIRST()
        these all return ONE answer from an entire column
*/
SELECT count(*) FROM owners; --return the number of owners in our owners table
SELECT sum(owner_height) FROM owners; --return the sum of all the owners' heights
SELECT avg(owner_height) FROM owners; --return the average height of the owners

--WHERE applies to EVERY RECORD individually
--HAVING applise to AGGREGATED INFORMATION (happens after a WHERE clause)
SELECT avg(owner_height) FROM owners WHERE owner_id>2; 

--SELECT sum(owner_height), owner_age FROM owners; --this doesn't work because we don't take the aggregate of owner_age as well

--by using GROUP BY, people with the same age will be grouped together and them summed. we can also include more records without aggregating.
SELECT sum(owner_height), owner_age FROM owners GROUP BY owner_age; 

/* 
    ORDER OF OPERATIONS
        WHERE
        GROUP BY
        HAVING
        SELECT
        ORDER BY
*/
SELECT sum(owner_height), owner_age FROM owners
    WHERE owner_id>0
    GROUP BY owner_age
    HAVING sum(owner_height) > 20
    ORDER BY owner_age ASC; 
    --ASC = ascending, which is default
    
/*
    SCALAR FUNCTIONS
        a scalar function applies to each record individually
            lower()
            upper()
            ABS()
            cos(), sin(), tan()
            ROUND()
            TRUNC()
            CONCAT()
            LENGTH()
            TRIM()
                removes all extra white space from both sides of a String
            LTRIM()
                " " from left side
            RTRIM()
                " " from right side
*/

SELECT upper(owner_name) FROM owners; --returns everybody's names, but really yelly

--you can use operators on a column within a statement
SELECT owner_height*400, owner_name FROM owners;

--nested joins
SELECT a.pet_name AS "Pet Name",
CASE b.animal_name
    WHEN NULL THEN 'UNKNOWN'    --if NULL value in animal_name, output 'UNKNOWN'. this doesn't work out for some reason.
    ELSE b.animal_name          --otherwise display anima_name as intended
END AS "ANIMAL",
c.owner_name AS "Owner", d.phone AS "Phone Number" FROM pets a
    INNER JOIN animals b
    ON a.animal_id = b.animal_id
    RIGHT JOIN owners c         --we use RIGHT JOIN here to return ALL owners. owners is on the right side of this join
    ON a.owner_id = c.owner_id
    LEFT JOIN owner_contact d
    ON c.owner_id = d.o_id;

/*
    VIEWS
        a view is a virtual table that can be manipulated.
        it DOES NOT formally exist as a table in the DB, but rather as a shortcut
        for complex queries.
*/

CREATE VIEW owner_info AS (
SELECT a.pet_name AS "Pet Name",
CASE b.animal_name
    WHEN NULL THEN 'UNKNOWN'    --if NULL value in animal_name, output 'UNKNOWN'. this doesn't work out for some reason.
    ELSE b.animal_name          --otherwise display anima_name as intended
END AS "ANIMAL",
c.owner_name AS "Owner", d.phone AS "Phone Number" FROM pets a
    INNER JOIN animals b
    ON a.animal_id = b.animal_id
    RIGHT JOIN owners c         --we use RIGHT JOIN here to return ALL owners. owners is on the right side of this join
    ON a.owner_id = c.owner_id
    LEFT JOIN owner_contact d
    ON c.owner_id = d.o_id
);

SELECT * FROM owner_info;

--DELETE
--DELETE FROM pet_shop; --this will delete EVERYTHING from pet_shop
--when using DELETE, make sure to specify a WHERE clause
--when using DELETE, you can use ROLLBACK to undo.
--when using TRUNCATE, you CANNOT use ROLLBACK at all. once you use TRUNCATE, the changes are final
--NEVER DELETE FROM A DB UNLESS YOU ABSOLUTELY HAVE TO

commit; --SQL Developer DOES NOT autocommit. remember to do so

DROP TABLE TA;
DROP TABLE TB;

/*
    we create two tables here with the same data types in the same order, just with different field names
*/
CREATE TABLE TA(
    nums NUMBER(6),
    chars VARCHAR(6)
);
CREATE TABLE TB(
    ints NUMBER(6),
    letters VARCHAR(6)
);

INSERT INTO TA VALUES (1,'A');
INSERT INTO TA VALUES (2,'B');
INSERT INTO TA VALUES (3,'C');
INSERT INTO TA VALUES (4,'D');
INSERT INTO TA VALUES (5,'a');

INSERT INTO TB VALUES (3,'C');
INSERT INTO TB VALUES (4,'D');
INSERT INTO TB VALUES (5,'E');
INSERT INTO TB VALUES (6,'F');
INSERT INTO TB VALUES (7,'G');

--REMEMBER: Set operators are called on two QUERIES, not tables

--this will yield 8 records
SELECT * FROM TA
    UNION
    SELECT * FROM TB;
    
--this will yield 10 records because duplicates are preserved
SELECT * FROM TA
    UNION ALL
SELECT * FROM TB;
    
--this will yield only 2 records
SELECT * FROM TA
    INTERSECT
SELECT * FROM TB;

--this will yield 3 records
SELECT * FROM TA
    MINUS
SELECT * FROM TB;

/*
    IN vs EXISTS
        these two queries below return the EXACT SAME result.
        
        both of these commands can be used to perform conditional checks.
        high-level overview:
            EXISTS is very inefficient if the outer query is remotely large
                with EXISTS, for each record in the outer query, we run the inner query once
                if there is another inner query, we run the innermost for each record of the middle query
                and again for each record in the otuermost query in an exponential fashion
                
            nexted SELECT queries using IN works by combining queries together as it digs in deeper.
            to combine a query with low record count to an inner query with high record count will
            yield slower results than EXISTS.
            IN is significantly faster in the opposite scenario.
            
            IF OUTER QUERY HAS MANY RECORDS AND INNER HAS FEW RECORDS, EXISTS MAY BE FASTER
            IF INNER HAS MANY RECORDS AND OUTER HAS FEW, IN MAY BE FASTER
*/

/*
    IN statement
        IN acts essentially as an OR statement
        IN uses a list of items instead of a ton of IF/OR statements
*/
SELECT * FROM TA
    WHERE nums IN (1,3,4);
    
--nested SELECT:
SELECT pet_name, animal_name FROM pets
INNER JOIN animals ON pets.animal_id = animals.animal_id
    WHERE shop_id IN 
    (SELECT shop_id FROM pet_shop WHERE shop_owner_id IN 
    (SELECT owner_id FROM owners WHERE owner_name = 'Elyk'));
    
/*
    EXISTS
        works like IN, but instead of seeing if a specific value is in a collection,
        EXISTS only aims to succeed if a least ONE record id is returned to it.
        this is a true/false
            we're just looking to see if there's content within a table
*/
SELECT pets.pet_name, animals.animal_name FROM pets
INNER JOIN animals 
ON pets.animal_id = animals.animal_id WHERE EXISTS(
    SELECT * FROM pet_shop WHERE EXISTS(
        SELECT * FROM owners WHERE owner_name = 'Elyk' AND
            pet_shop.shop_owner_id = owner_id
    ) AND pets.shop_id = pet_shop.shop_id
);