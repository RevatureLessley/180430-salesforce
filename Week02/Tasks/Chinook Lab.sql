--selecting all to see what data is already there
--2.1 Select
SELECT * FROM EMPLOYEE;

SELECT * FROM EMPLOYEE WHERE LASTNAME = 'King';

SELECT * FROM EMPLOYEE WHERE FIRSTNAME = 'Andrew' AND REPORTSTO IS NULL;

--2.2 Order by
SELECT * FROM ALBUM ORDER BY TITLE DESC;

SELECT FIRSTNAME FROM CUSTOMER ORDER BY CITY ASC;

--selecting all to see what data is already there
--2.3 Insert into
SELECT * FROM GENRE;

INSERT INTO GENRE VALUES (26, 'Ska');
INSERT INTO GENRE VALUES (27, 'EDM');

INSERT INTO EMPLOYEE VALUES (9, 'Edwards', 'Jeremy', 'IT Staff', 6, TO_DATE('1993-06-03', 'yyyy-mm-dd'), TO_DATE('2015-05-23', 'yyyy-mm-dd'), '123 Sycamore NW', 'Washington', 'DC', 'USA', '20170', '+1 504-284-8616', '+1 504-284-8616', 'ebj@gmail.com');
INSERT INTO EMPLOYEE VALUES (10, 'Edwards', 'JDogg', 'IT Staff', 6, TO_DATE('1993-07-03', 'yyyy-mm-dd'), TO_DATE('2015-06-23', 'yyyy-mm-dd'), '1234 Sycamore NW', 'Washington', 'DC', 'USA', '20170', '+1 504-284-8616', '+1 504-284-8616', 'ebj2@gmail.com');

--selecting all to see what data is already there
SELECT * FROM CUSTOMER;

INSERT INTO customer VALUES (60, 'Jeremy', 'Edwards', 'Apple Inc.', '22 Dead End Ln', 'Portland', 'Oregon', 'USA', '50293', '504-284-8616', '504-284-8616', 'ebj@gmail.com', 3);
INSERT INTO customer VALUES (61, 'Jdogg', 'Edwards', 'Apple Inc.', 'Portland', '23 Dead End Ln', 'Oregon', 'USA', '50293', '504-284-8616', '504-284-8616', 'ebj2@gmail.com', 3);

--2.4 Update
UPDATE CUSTOMER SET FIRSTNAME = 'Robert', LASTNAME = 'Walter' WHERE FIRSTNAME = 'Aaron' AND LASTNAME = 'Mitchell';

SELECT * FROM ARTIST;

UPDATE ARTIST SET NAME = 'CCR' WHERE NAME = 'Creedence Clearwater Revival';

--2.5 Like
SELECT * FROM INVOICE;

SELECT BILLINGADDRESS FROM INVOICE WHERE BILLINGADDRESS LIKE 'T%';

--2.6 Between



--2.7 Delete

--7.1 Inner

--7.2 Outer

--7.3 Right

--7.4 Cross

--7.5 Self