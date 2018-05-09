-- select * from dual;
/**
comment block
**/

--DDL

DROP TABLE ANIMALS;
/
CREATE TABLE animals(
    animal_id NUMBER(6) PRIMARY KEY, --fieldname datatype(size) [constraints]
    animal_name VARCHAR(100) UNIQUE, --unique does allow null , and multiples of it
    animal_get_count NUMBER(2)
    
)
CREATE TABLE owners(
    owner_id number(6),
    owner_name varchar2(100) not null,
    owner_address varchar2(200),
    owner_height number(6),
    owner_age number(6),
    CONSTRAINT owner_id_pk PRIMARY KEY(owner_id)
);
CREATE TABLE PET_SHOP(
    shop_id number(6),
    shop_name varchar(100) not null,
    shop_owner_id number(6),
    CONSTRAINT shop_id_pk PRIMARY KEY(shop_id),
    CONSTRAINT shop_owner_id_fk FOREIGN KEY(shop_owner_id) REFERENCES owners(owner_id)
);

CREATE TABLE pets(
    pet_id number(6),
    pet_name varchar2(100),
    animal_id number(6),
    shop_id number(6),
    owner_id number(6),
    CONSTRAINT pet_id_pk PRIMARY KEY(pet_id),
    CONSTRAINT shop_id_fk FOREIGN KEY(shop_id)
        REFERENCES PET_SHOP (shop_id) ON DELETE CASCADE,
    CONSTRAINT 
    CONSTRAINT animals(animal_id) ON DELETE CASCADE
);
/ --- this needs to be there
/*
    Contraints - relational rules you can apply to your database
    -PRIMARY KEY - makes a column unique and not null
    -Foreign KEY - a column whose existance relies on the data existing on the table it points to
    -default - should null be inpullted, a default replaces it
    -NULL/NOT NULL - where null values are allowed or not
    -UNIQUE - only distinct inputs allowed in the column
    -CHECK - enforce data value rule on a column (IE no values greater than 20)
    
*/
INSERT INTO ANIMALS VALUES (2,'DOG',4);
INSERT INTO ANIMALS VALUES (3,'CAT',4);
INSERT INTO ANIMALS VALUES (4,'OCTOPUS',8);
INSERT INTO ANIMALS VALUES (5,'BULL WORM',4);


