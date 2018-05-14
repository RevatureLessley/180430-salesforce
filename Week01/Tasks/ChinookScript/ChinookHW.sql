--2.0 SQL QUERIES

--2.1
SELECT *
FROM employee;

SELECT *
FROM employee
WHERE lastname = 'King';

SELECT *
FROM employee
WHERE firstname = 'Andrew'
AND reportsto IS NULL;

--2.2 ORDER BY
SELECT *
FROM album 
ORDER BY title DESC;

SELECT *
FROM customer
ORDER BY city ASC;

--2.3 INSERT INTO

--genre
INSERT INTO genre
VALUES (26, 'Ambient');
INSERT INTO genre
VALUES (27, 'Bebop');

INSERT INTO employee
VALUES (9, 'Edwards', 'Jeremy', 'Advanced Vegan', 2, 
TO_DATE('05/12/2012', 'DD-MM-YY'), TO_DATE('05/12/2013', 'DD-MM-YY'), '123 street ave', 'Mars', 'MI','United States', ' A2D B4S',
'+1 (123) 123-1234', '+1 (123) 123-1234', 'bob@bobbert.bob');
INSERT INTO employee
VALUES (10, 'Jim', 'James', 'Jimmy', 2, 
TO_DATE('02/12/2013', 'DD-MM-YY'), TO_DATE('06/07/2013', 'DD-MM-YY'), '123 John street', 'Jamestown', 'KY','United States', ' A2D B4S',
'+1 (321) 321-4321', '+1 (321) 321-4321', 'jim@jimmy.jim');

INSERT INTO customer
VALUES (60, 'Rick', 'Prames', 'Prevature LLC.', '123 Preston', 'Reston', 'VA', 'United States', '1234', '+1 (465) 475-8496',
'+1 (679) 424-4242', 'em@ai.l', 4);

INSERT INTO customer
VALUES (61, 'Prick', 'Rames', 'Next Door LLC.', '123 My House', 'A Town', 'KY', 'United States', '6534', '+1 (288) 494-9847',
'+1 (997) 242-2424', 'l@ia.me', 4);

--2.4
UPDATE customer
SET firstname = 'Robert', lastname = 'Walter'
WHERE firstname = 'Aaron' AND lastname = 'Mitchell';

UPDATE artist
SET name = 'CCR'
WHERE name = 'Creedence Clearwater Revival';

--2.5
SELECT * 
FROM invoice
WHERE billingaddress LIKE 'T%';

--2.6
SELECT * 
FROM invoice
WHERE total BETWEEN 15 AND 50;

SELECT *
FROM employee
WHERE hiredate 
BETWEEN '01-JUN-03' AND '01-MAR-04';
    --OR optionally
SELECT *
FROM employee
WHERE hiredate 
BETWEEN TO_DATE('01/06/2003','DD-MM-YYYY') AND TO_DATE('01/03/2004','DD-MM-YYYY');    

--2.7 WIP
--Starting from the last child, delete all records related to Robert Walter
DELETE FROM invoiceline 
WHERE invoiceid IN (SELECT invoiceid FROM invoice WHERE customerid = 32);

DELETE FROM invoice WHERE customerid = 32;

DELETE FROM customer
WHERE firstname = 'Robert' AND lastname = 'Walter';

--7.1
SELECT customer.customerid, invoice.invoiceid 
FROM customer INNER JOIN invoice
ON customer.customerid = invoice.customerid;
--7.2
SELECT artist.name, album.title
FROM artist RIGHT OUTER JOIN album
ON artist.artistid = album.artistid;
--7.3
SELECT * FROM album CROSS JOIN artist
ORDER BY artist.name ASC;
--7.4
SELECT * 
FROM employee e1 JOIN employee e2
ON e1.reportsto = e2.reportsto;