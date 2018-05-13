/*
    2.0 SQL Queries
*/
--2.1 SELECT--
--T1 - Select all records from teh Employee table.
SELECT * FROM EMPLOYEE;

--T2 - Select all records from the Employee table where last name is King.
SELECT * FROM EMPLOYEE WHERE LASTNAME = 'King';

--T3 - Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
SELECT * FROM EMPLOYEE WHERE FIRSTNAME = 'Andrew' AND REPORTSTO IS NULL;


--2.2 ORDER BY--
--T1 - Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM ALBUM ORDER BY TITLE DESC;

--T2 - Select first name from Customer and sort result set in ascending order by city
SELECT FIRSTNAME FROM CUSTOMER ORDER BY CITY ASC;
    SELECT FIRSTNAME, CITY FROM CUSTOMER ORDER BY CITY ASC; --CHECK


--2.3 INSERT INTO--
--T1 - Insert two new records into Genre table
INSERT INTO GENRE VALUES(26, 'Electro Swing');
INSERT INTO GENRE VALUES(27, 'Trap');
    SELECT * FROM GENRE; --CHECK

--T2 – Insert two new records into Employee table
INSERT INTO EMPLOYEE VALUES(9, 'McManus', 'Logan', 'TheGuy', 7, TO_DATE('03-SEP-93', 'DD-MM-YY'), TO_DATE('23-OCT-23', 'DD-MM-YY'), '4621 Blue Stream Ln S', 'Jacksonville', 'FL', 'USA', '32224', '+1 (904) 472-9420', null, 'thisguy@mail.gov');
INSERT INTO EMPLOYEE VALUES(10, 'Fettel', 'Paxton', 'Command', 6, TO_DATE('13-OCT-87', 'DD-MM-YY'), TO_DATE('01-MAR-91', 'DD-MM-YY'), '821 Alma Way', 'Armatech', 'ST', 'USA', '83333', '+1 (309) 867-5309', null, 'nope@mail.gov');
    SELECT * FROM EMPLOYEE; --CHECK

--T3 – Insert two new records into Customer table
INSERT INTO CUSTOMER VALUES(60, 'Logan', 'McManus', 'TechComp', '4621 Blue Stream Ln S', 'JAX', 'FL', 'USA', 32224, '(904) 555-5555', null, 'theguy@mail.gov', 9);
INSERT INTO CUSTOMER VALUES(61, 'Paxton', 'Fettel', 'Armatech', '821 Alma Way', 'ArmaTech', 'ST', 'USA', '83333', '+1 (309) 867-5309', null, 'nope@mail.gov', 2);
    SELECT * FROM CUSTOMER; --CHECK
COMMIT;



--2.4 UPDATE--
--T1 – Update Aaron Mitchell in Customer table to Robert Walter
UPDATE CUSTOMER SET FIRSTNAME = 'Robert', LASTNAME = 'Walter' WHERE FIRSTNAME = 'Aaron' AND LASTNAME = 'Mitchell';
    SELECT * FROM CUSTOMER WHERE CUSTOMERID = 32; --CHECK
COMMIT;

--T2 – Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
UPDATE ARTIST SET NAME = 'CCR' WHERE NAME = 'Creedence Clearwater Revival'; 
COMMIT;


--2.5 LIKE--
--T1 – Select all invoices with a billing address like “T%”
SELECT * FROM INVOICE WHERE BILLINGADDRESS LIKE 'T%';


--2.6 BETWEEN--
--T1 – Select all invoices that have a total between 15 and 50
SELECT * FROM INVOICE WHERE TOTAL BETWEEN 15 AND 50;

--T2 – Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM EMPLOYEE WHERE HIREDATE BETWEEN TO_DATE('01-JUN-03', 'DD-MM-YY') AND TO_DATE('01-MAR-04', 'DD-MM-YY');
COMMIT;

--2.7 DELETE--
--T1 – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
DELETE FROM INVOICELINE WHERE INVOICEID IN (SELECT INVOICE.INVOICEID FROM INVOICE WHERE CUSTOMERID =(SELECT CUSTOMERID FROM CUSTOMER WHERE (LASTNAME = 'Walter' AND FIRSTNAME = 'Robert')));
DELETE FROM INVOICE WHERE INVOICE.CUSTOMERID =(SELECT CUSTOMER.CUSTOMERID FROM CUSTOMER WHERE (LASTNAME = 'Walter' AND FIRSTNAME = 'Robert'));
DELETE FROM CUSTOMER WHERE (LASTNAME = 'Walter' AND FIRSTNAME = 'Robert');



/*
    7.0 JOINS
*/
--7.1 INNER--
--Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
SELECT CUSTOMER.LASTNAME, CUSTOMER.FIRSTNAME, INVOICE.INVOICEID         -- No Orders table? Using Invoice table instead,
FROM CUSTOMER                                                           -- because use of invoiceId.
INNER JOIN INVOICE
ON CUSTOMER.CUSTOMERID = INVOICE.CUSTOMERID;

--7.2 OUTER--
--Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
SELECT CUSTOMER.CUSTOMERID, CUSTOMER.FIRSTNAME, CUSTOMER.LASTNAME, INVOICE.INVOICEID, INVOICE.TOTAL
FROM CUSTOMER 
FULL OUTER JOIN INVOICE
ON CUSTOMER.CUSTOMERID = INVOICE.CUSTOMERID;

--7.3 RIGHT--
--Task – Create a right join that joins album and artist specifying artist name and title.
SELECT ARTIST.NAME, ALBUM.TITLE
FROM ALBUM
RIGHT JOIN ARTIST
ON ARTIST.ARTISTID = ALBUM.ARTISTID;

--7.4 CROSS--
--Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT * FROM ALBUM
CROSS JOIN ARTIST
ORDER BY ARTIST.NAME ASC;

--7.5 SELF--
--Task – Perform a self-join on the employee table, joining on the reportsto column.
SELECT emp1.LASTNAME, emp2.LASTNAME
FROM EMPLOYEE emp1, EMPLOYEE emp2
WHERE emp1.REPORTSTO = emp2.REPORTSTO;