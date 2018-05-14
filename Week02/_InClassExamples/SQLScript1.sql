--This is a SQL comment!
/*
    This is a SQL comment block
*/

--DDL

DROP TABLE animals CASCADE CONSTRAINTS;
DROP TABLE pets CASCADE CONSTRAINTS;
DROP TABLE pet_shop CASCADE CONSTRAINTS;
DROP TABLE owners CASCADE CONSTRAINTS;
DROP TABLE owner_contact CASCADE CONSTRAINTS;
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

CREATE TABLE owner_contact(
    c_id number(6) primary key,
    o_id number(6),
    phone varchar2(200),
    constraint owner_contact_fk FOREIGN KEY (o_id)
        REFERENCES owners (owner_id)
);

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
);
/
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
VALUES (1, 'kyle m', 'here', '510', 70);
INSERT INTO owners 
VALUES (2, 'Jared', 'there', '511', 46);
INSERT INTO owners 
VALUES (3, 'Logan', 'over there', '86', 23);
INSERT INTO owners 
VALUES (4, 'Bobby', 'where?', '620', 31);
INSERT INTO owners 
VALUES (5, 'Ryan', 'Outside', '981', 31);
INSERT INTO owners 
VALUES (6, 'David', 'Inside', '12', 70);
INSERT INTO owners 
VALUES (7, 'Jeffrey', 'Outerside', '1234', 31);

INSERT INTO owner_contact
VALUES(1,1,'(907)-555-4123)');
INSERT INTO owner_contact
VALUES(2,2,'(928)-555-8815)');
INSERT INTO owner_contact
VALUES(3,3,'(904)-555-1190)');
INSERT INTO owner_contact
VALUES(4,4,'(916)-555-0000)');
INSERT INTO owner_contact
VALUES(5,1,'(907)-456-5656)');

INSERT INTO pet_shop VALUES
(1,'Mario''s Muppets', 2);
INSERT INTO pet_shop VALUES
(2,'Kyle''s Kittens', 7);

INSERT INTO pets VALUES (1,'Vulture Candy', 5, null, 4);
INSERT INTO pets VALUES (2,'Trident', 4, 1, null);
INSERT INTO pets VALUES (3,'A2', 3, null, 4);
INSERT INTO pets VALUES (4,'Sam', 2, 2, null);
INSERT INTO pets VALUES (5,'Senorito', 3, null, 3);

--WHERE
select * from pets where OWNER_ID = 4;

--Selecting specific columns
select pet_name as "The pet in question" from pets where owner_id = 4;
--Use aliases to rename columns are substitute a variable name for a table name

select * from pets where owner_id <> 4; --  <> = not equal

/*
    Aggragate Function
    -Any function that you apply to an entire column to yield one result.
    -Examples include average or max/min or sum.
    Key functions:
    SUM()
    AVG()
    MAX()
    MIN()
    STDDEV()
    VARIANCE()
    COUNT() <-This one is extraordinarily important for testing databases
    LAST()
    FIRST()
*/
select count(*) from owners; --Count the amount of owners

select sum(owner_height) from owners;
select avg(owner_height) from owners WHERE owner_id>2;

--WHERE applies to every record individually
--HAVING applies to aggragated information (happens after a WHERE clause)
/*
    ORDER OF OPERATIONS
    WHERE
    GROUP BY
    HAVING
    SELECT
    ORDER BY
    
*/
select sum(owner_height), owner_age from owners
WHERE owner_id > 2
GROUP BY owner_Age
HAVING sum(owner_height) > 25
ORDER BY owner_age,owner_height ASC; --ASC is default, but you can use ASC/DESC


/*
    SCALAR FUNCTIONS
    -A scalr function applies to each record individually of a column
    -e.g. Alters the value within each cell of a column
    -When in doubt, think String manipulation functions
    lower() - converts string to lowere case
    upper()
    ABS()
    cos(),sin(),tan()
    ROUND()
    TRUNC()
    CONCAT()
    LENGTH()
    TRIM() --Removes all extra white space from both sides of a string
    LTRIM()--removes white space from left side
    RTRIM()
    
*/

select upper(owner_name) from owners;

select owner_height*30, owner_name from owners;
--using operators within the column

--JOINS
SELECT a.pet_name as "PET NAME", 
CASE b.animal_name 
    WHEN null THEN 'UNKNOWN' --If null value in animal_name, then write "UNKNOWN"
    ELSE b.animal_name       --else just display animal name
END as "ANIMAL",
c.owner_name as "OWNER",
d.phone 
from pets a
inner join animals b
on a.animal_id = b.animal_id
right join owners c
on a.owner_id = c.owner_id
left join owner_contact d
on c.owner_id = d.o_id;

--VIEWS
--A view is a virtual table that can be manipulated.
--It does not formally exist a table in the database, but rather as a shortcut
--for complex queries.
CREATE VIEW owner_info AS
SELECT a.pet_name as "PET NAME", 
CASE b.animal_name 
    WHEN null THEN 'UNKNOWN' --If null value in animal_name, then write "UNKNOWN"
    ELSE b.animal_name       --else just display animal name
END as "ANIMAL",
c.owner_name as "OWNER",
d.phone 
from pets a
inner join animals b
on a.animal_id = b.animal_id
right join owners c
on a.owner_id = c.owner_id
left join owner_contact d
on c.owner_id = d.o_id;

select * from owner_info;
commit;

delete from pet_shop;
rollback;
select * from pet_shop;



commit; --SQL Developer does NOT autocommit, remember to do so.

DROP TABLE TA;
DROP TABLE TB;

CREATE TABLE TA(
    nums number(6),
    chars varchar(6)
);

CREATE TABLE TB(
    ints number(6),
    letters varchar(6)
);

INSERT INTO TA VALUES(1,'A');
INSERT INTO TA VALUES(2,'B');
INSERT INTO TA VALUES(3,'C');
INSERT INTO TA VALUES(4,'D');
INSERT INTO TA VALUES(1,'a');

INSERT INTO TB VALUES(3,'C');
INSERT INTO TB VALUES(4,'D');
INSERT INTO TB VALUES(5,'E');
INSERT INTO TB VALUES(6,'F');
INSERT INTO TB VALUES(7,'G');

SELECT * FROM TA
UNION
SELECT * FROM TB;

SELECT * FROM TA
UNION ALL
SELECT * FROM TB;

SELECT * FROM TA
INTERSECT
SELECT * FROM TB;

SELECT * FROM TA
MINUS
SELECT * FROM TB;

--IN statement
--IN acts as essentially an OR statement that uses a list of items instead of
--a ton of if statements/OR statements
select * from TA 
where nums IN (1,3,4);

--Nested select:
SELECT PET_NAME, ANIMAL_NAME FROM pets 
inner join animals
on pets.ANIMAL_ID = animals.ANIMAL_ID
WHERE shop_id in
(SELECT shop_ID FROM pet_shop WHERE shop_owner_id in
(SELECT owner_id from owners WHERE owner_name = 'Jared'));

--EXISTS
/*
    EXISTS works like IN, except as oopsoed to seeing if a specfici value is in
    a collection, EXISTS only aims to succeed if a least ONE record id is
    returned to is.
*/
SELECT pets.pet_name, animals.animal_name FROM pets 
inner join animals
on pets.animal_id = animals.animal_id
WHERE EXISTS(
    SELECT * FROM pet_shop WHERE EXISTS(
        SELECT * FROM owners WHERE owner_name = 'Jared' AND
            pet_shop.shop_owner_id=owner_id
    ) AND pets.shop_id = pet_shop.shop_id
);

/*
    IN VS EXISTS
    -Both of these commands cna be used to perform conditional checks.
    -HIGH level overview; EXISTS is GARBAGE
    -It is highly inefficient if the outer query is even remotely large;
    This is because, with EXISTS, for each record in the outer query, we run
    the inner query once. Should there be, yet another inner query, we run the
    innermost for each record of the middle query, and again for each record in the
    outermost query in an exponential fashion.
    
    Nested slect statements with IN, works to combine queries togehter as it digs
    in deeper. So to combine a query with low record count, to an innter query with
    high record count will yield slower results than EXISTS.
    But vice versa, it is significantly faster.
*/