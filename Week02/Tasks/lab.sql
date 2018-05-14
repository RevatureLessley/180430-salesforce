--2.0 SQL Queries
--2.1 SELECT
--Task – Select all records from the Employee table.
SELECT * FROM Employee;
--Task – Select all records from the Employee table where last name is King.
SELECT * FROM Employee WHERE lastname = 'King';
--Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
SELECT * FROM Employee WHERE FIRSTNAME = 'Andrew' AND REPORTSTO IS null;

--2.2 ORDER BY
--Task – Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM Album ORDER BY Title DESC;
--Task – Select first name from Customer and sort result set in ascending order by city
SELECT Firstname FROM Customer ORDER BY City ASC;  
--2.3 INSERT INTO
--Task – Insert two new records into Genre table
INSERT INTO GENRE (GENREID, NAME) VALUES (1, 'SCI-FI');
INSERT INTO GENRE (GENREID, NAME) VALUES (2, 'HORROR');
--Task – Insert two new records into Employee table
INSERT INTO EMPLOYEE (EMPLOYEEID, LASTNAME, FIRSTNAME) VALUES (9, 'Tanaka', 'Tetsuya');
INSERT INTO EMPLOYEE (EMPLOYEEID, LASTNAME, FIRSTNAME) VALUES (10, 'Tanakan', 'Tetsuyan');
--Task – Insert two new records into Customer table
INSERT INTO CUSTOMER (CUSTOMERID, LASTNAME, FIRSTNAME) VALUES (60, 'Ro', 'Kenshi');
INSERT INTO CUSTOMER (CUSTOMERID, LASTNAME, FIRSTNAME) VALUES (61, 'Oh', 'Ra');
--2.4 UPDATE
--Task – Update Aaron Mitchell in Customer table to Robert Walter
UPDATE CUSTOMER SET FIRSTNAME = 'Robert', LASTNAME = 'Walter' WHERE FIRSTNAME = 'Aaron' AND LASTNAME = 'Mitchell';
--Task – Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
UPDATE ARTIST SET NAME = 'CCR' WHERE NAME = 'Creedence Clearwater Revival';
--2.5 LIKE
--Task – Select all invoices with a billing address like “T%”
SELECT * FROM INVOICE WHERE BILLINGADDRESS LIKE 'T%';
--2.6 BETWEEN
--Task – Select all invoices that have a total between 15 and 50
SELECT * FROM INVOICE WHERE TOTAL BETWEEN 15 AND 50;
--Task – Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM EMPLOYEE WHERE HIREDATE BETWEEN '01-JUN-03' AND '01-MAR-04';
--2.7 DELETE
--Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).

--if not done already, alter the Aaron Mitchell row to Robert Walter
UPDATE CUSTOMER SET FIRSTNAME = 'Robert', LASTNAME = 'Walter' WHERE FIRSTNAME = 'Aaron' AND LASTNAME = 'Mitchell'; 
--now, delete the supportrepID from that record, nullifying the foreign key
UPDATE CUSTOMER SET SUPPORTREPID = null WHERE FIRSTNAME = 'Robert' AND LASTNAME = 'Walter';
--Now, we want to delete the invoices the customer was associated with. To do that, we must first delete each invoice line for those invoices.
--However, InvoiceLine also contains a foreign key for Track. Since InvoiceLine:Track is N:1, it is illogical to delete the track when we want to delete an invoiceline.
--Therefore, we will temporarily disable its constraints...
ALTER TABLE INVOICELINE
DISABLE CONSTRAINT FK_INVOICELINEINVOICEID;
ALTER TABLE INVOICELINE
DISABLE CONSTRAINT FK_INVOICELINETRACKID;
--...Then delete each InvoiceLine record that corresponds to the customer's invoices
DELETE FROM INVOICELINE WHERE INVOICEID IN (SELECT INVOICEID FROM INVOICE WHERE CUSTOMERID IN (SELECT CUSTOMERID FROM CUSTOMER WHERE FIRSTNAME = 'Robert' AND LASTNAME = 'Walter'));
--reactivate constraints
ALTER TABLE INVOICELINE
ENABLE CONSTRAINT FK_INVOICELINEINVOICEID;
ALTER TABLE INVOICELINE
ENABLE CONSTRAINT FK_INVOICELINETRACKID;
--delete the customer's invoices
DELETE FROM INVOICE WHERE CUSTOMERID IN (SELECT CUSTOMERID FROM CUSTOMER WHERE FIRSTNAME = 'Robert' AND LASTNAME = 'Walter');
--Finally, delete the customer
DELETE FROM CUSTOMER WHERE FIRSTNAME = 'Robert' AND LASTNAME = 'Walter'; 
SELECT * FROM CUSTOMER;
--7.0 JOINS
--7.1 INNER
--Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
SELECT FIRSTNAME, LASTNAME, INVOICEID FROM CUSTOMER
INNER JOIN INVOICE ON CUSTOMER.CUSTOMERID = INVOICE.CUSTOMERID;
--7.2 OUTER
--Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
SELECT CUSTOMER.CUSTOMERID, FIRSTNAME, LASTNAME, INVOICEID, TOTAL FROM CUSTOMER
FULL OUTER JOIN INVOICE ON CUSTOMER.CUSTOMERID = INVOICE.CUSTOMERID;
--7.3 RIGHT
--Task – Create a right join that joins album and artist specifying artist name and title.
SELECT ARTIST.NAME, TITLE FROM ALBUM
RIGHT JOIN ARTIST ON ALBUM.ARTISTID = ARTIST.ARTISTID;
--7.4 CROSS
--Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT * FROM ALBUM
CROSS JOIN ARTIST
ORDER BY ARTIST.NAME ASC;
--7.5 SELF
--Task – Perform a self-join on the employee table, joining on the reportsto column.
SELECT * FROM EMPLOYEE A, EMPLOYEE B
WHERE A.REPORTSTO = B.REPORTSTO;
