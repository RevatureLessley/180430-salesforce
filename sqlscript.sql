--This is a SQL comment!
/*
    This is a SQL comment block!
*/

--DDL
DROP TABLE animals CASCADE CONSTRAINTS;
DROP TABLE pets CASCADE CONSTRAINTS;
DROP TABLE pet_shop CASCADE CONSTRAINTS;
DROP TABLE owners CASCADE CONSTRAINTS;
DROP TABLE owner_contact CASCADE CONSTRAINTS;
/ --Separates transactions from each other
CREATE TABLE animals (
    animal_id NUMBER(6) PRIMARY KEY, --fieldNAme Datatype(size)[constraints]
    animal_name VARCHAR2(100) UNIQUE, --UNIQUE DOES allow null, and multiples of it
    animal_leg_count NUMBER(2)
);
/
CREATE TABLE owners (
    owner_id NUMBER(6),
    owner_name VARCHAR2(100) NOT NULL,
    owner_address VARCHAR2(200),
    owner_height NUMBER(6),
    owner_age NUMBER(6),
    CONSTRAINT owner_id_pk PRIMARY KEY (owner_id)
    --CONSTRAINT constraintName TypeOfConstraint (column applied to)
);
/
CREATE TABLE owner_contact (
    c_id NUMBER(6) PRIMARY KEY,
    o_id NUMBER(6),
    phone VARCHAR2(200),
    CONSTRAINT owner_contact_fk FOREIGN KEY (o_id)
        REFERENCES owners (owner_id)
);
/
CREATE TABLE pet_shop (
    shop_id NUMBER(6),
    shop_name VARCHAR2(100) NOT NULL,
    shop_owner_id NUMBER(6),
    CONSTRAINT shop_id_pk PRIMARY KEY (shop_id),
    CONSTRAINT shop_owner_id_fk FOREIGN KEY (shop_owner_id)
        REFERENCES owners (owner_id)
);
/
CREATE TABLE pets (
    pet_id NUMBER(6),
    pet_name VARCHAR2(100),
    animal_id NUMBER(6),
    shop_id NUMBER(6),
    owner_id NUMBER(6),
    CONSTRAINT pet_id_pk PRIMARY KEY (pet_id),
    CONSTRAINT shop_id_fk FOREIGN KEY (shop_id)
        REFERENCES pet_shop (shop_id) ON DELETE CASCADE,
    CONSTRAINT animal_id_fk FOREIGN KEY (animal_id)
        REFERENCES animals (animal_id) ON DELETE CASCADE,
    CONSTRAINT owner_id_fk FOREIGN KEY (owner_id)
        REFERENCES owners (owner_id) ON DELETE CASCADE
);
/
/*
    CONSTRAINTS - Relational rules you can apply to your database
    - PRIMARY KEY - Makes a column unique and not null
    - FOREIGN KEY - A column whose existence relies on the data existing 
                    in the table it points at
    - DEFAULT - Should null be inputted, a default replaces it
    - NULL/NOT NULL - null values allowed/ not allowed
    - UNIQUE - Only distinct inputs allowed in the column
    - CHECK - Enforce data value rule on a column (IE No values greater than 20)
*/
--DML
INSERT INTO animals (ANIMAL_ID, ANIMAL_NAME, ANIMAL_LEG_COUNT)
VALUES (1, 'Bobbert', 7);
--If you ommit the column names portion of an insert statement, it will
--implicitly assume you are providing data for each column in the order
--they appear in the table.
INSERT INTO animals VALUES (2, 'Dog', 4);
INSERT INTO animals VALUES (3, 'Cat', 4);
INSERT INTO animals VALUES (4, 'Octopus', 8);
INSERT INTO animals VALUES (5, 'Alaskan Bull Worm', 0);

INSERT INTO owners
VALUES (1, 'Kyle', 'here', 510, 70);
INSERT INTO owners
VALUES (2, 'Jared', 'there', 511, 46);
INSERT INTO owners
VALUES (3, 'Logan', 'over there', 86, 23);
INSERT INTO owners
VALUES (4, 'Bobby', 'where?', 620, 31);
INSERT INTO owners
VALUES (5, 'Ryan', 'outside?', 981, 31);
INSERT INTO owners
VALUES (6, 'David', 'inside', 12, 70);
INSERT INTO owners
VALUES (7, 'Jeffery', 'outerside', 1234, 31);

INSERT INTO owner_contact
VALUES (1,1,'(907)-555-4123');
INSERT INTO owner_contact
VALUES (2,2,'(928)-555-8815');
INSERT INTO owner_contact
VALUES (3,3,'(904)-555-1190');
INSERT INTO owner_contact
VALUES (4,4,'(961)-555-0000');
INSERT INTO owner_contact
VALUES (5,1,'(907)-456-5656');

INSERT INTO pet_shop VALUES (1, 'Mario''s Muppets', 2);
INSERT INTO pet_shop VALUES (2, 'Kyle''s Kittens', 1);

INSERT INTO pets VALUES (1, 'Vulture Candy', 5, null, 4);
INSERT INTO pets VALUES (2, 'Trident', 5, 1, null);
INSERT INTO pets VALUES (3, 'A2', 5, null, 4);
INSERT INTO pets VALUES (4, 'Sam', 5, 2, null);
INSERT INTO pets VALUES (5, 'Senorito', 5, null, 3);

SELECT * FROM pets WHERE OWNER_ID=4;
SELECT pet_name FROM pets WHERE OWNER_ID=4;
SELECT pet_name AS "The pet in question" FROM pets WHERE OWNER_ID=4;
SELECT * FROM pets WHERE owner_id <> 4; -- <> not equal

/*
    Aggregate Function
    - Any function that you apply to an entire column to yield one result.
    - Examples include average or max/min or sum.
    Key Functions:
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
SELECT COUNT(*) FROM owners;
SELECT SUM(owner_height) FROM owners;
SELECT AVG(owner_height) FROM owners WHERE owner_id>2;

-- WHERE applies to every record individually
-- HAVING applies to aggregated information (happens after a WHERE clause)

/*
    ORDER OF OPERATIONS:
    FROM
    WHERE
    GROUP BY
    HAVING
    SELECT
    ORDER BY
*/
SELECT SUM(owner_height), owner_age FROM owners
WHERE owner_id > 2
GROUP BY owner_age
HAVING SUM(owner_height)>25
ORDER BY owner_age, owner_height ASC;

/*
    SCALAR FUNCTIONS:
    - A scalar function applies to each record individually of a column
    - Alters the value within each cell of a column
    - Think String methods
    LOWER()
    UPPER()
    ABS()
    COS(),SIN(),TAN()
    ROUND()
    TRUNC()
    CONCAT()
    LENGTH()
    TRIM() - Removes white space from both sides
    LTRIM()
    RTRIM()
*/

SELECT UPPER(owner_name) FROM owners;

--JOINS
SELECT a.pet_name AS "PET_NAME",
CASE b.animal_name
    WHEN NULL THEN 'UNKOWN' -- If null value in animal_name, then write "UNKNOWN"
    ELSE b.animal_name      -- else just display animal_name
END AS "ANIMAL",
c.owner_name AS "OWNER" FROM pets a
--d.phone
--FROM pets a
INNER JOIN animals b
ON a.animal_id = b.animal_id
RIGHT JOIN owners c
ON a.owner_id = c.owner_id
LEFT JOIN owner_contact d
ON c.owner_id = d.o_id;

--SELECT * FROM owner_info;
COMMIT;

--DELETE FROM pet_shop;

--VIEWS
--A view is a virtual table that can be manipulated.
--It does not formally exist as a table in that database

DROP TABLE TA;
DROP TABLE TB;

-- IN STATEMENT
-- IN acts as essentially an OR statement that uses a list of items instead of a ton of if statements/or statements
/*
 EXISTS
 - works like IN, except as opposed to seeing if a specific value is in a collections,
 - exists only aims to succeed if at least one record id is returned to is
 */
 
 /*
    IN vs EXISTS
    - both can be used to perform conditional checks
    - EXISTS is inefficient if the outer query is even remotely large
    -With EXIST, for each record in the outer query,  we run the inner query once.
    -Should there be anothor inner query, we run the innermost blah blah in an exponential fashion
    
    Nested select statements with in works to combine queries together as it digs in deeper.
    Combining a query with low record count to an query with high record count will be slower than EXIST.
    But vice versa it is significantly faster.
 */