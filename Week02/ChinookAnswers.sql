/*
    Chinook Exercises:
*/

-- 2.0) SQL Queries
--     2.1 - SELECT:
--         TASK 1)
SELECT * FROM employee;
--         TASK 2)
SELECT * FROM employee WHERE lastname='King';
--         TASK 3)
SELECT * FROM employee WHERE firstname='Andrew' AND REPORTSTO IS NULL;
--     2.2 - ORDER BY:
--         TASK 1)
SELECT * FROM album ORDER BY title DESC;
--         TASK 2)
SELECT firstname FROM customer ORDER BY city ASC;
--     2.3 - INSERT INTO:
--         TASK 1)
INSERT INTO genre (genreid, name) VALUES ( 0, "Rock" );
INSERT INTO genre (genreid, name) VALUES ( 1, "Roll" );
--         TASK 2)
INSERT INTO employee (employeeid, lastname, firstname) VALUES (0, "Bobson", "Bobbert");
INSERT INTO employee (employeeid, lastname, firstname) VALUES (1, "Carranza", "David");
--         TASK 3)
INSERT INTO customer (customerid, firstname, lastname, email) VALUES (0, "Zeron", "Zeroith", "zeron@example.com");
INSERT INTO customer (customerid, firstname, lastname, email) VALUES (1, "Yi", "Primero", "primero1@example.com");
--     2.4 - UPDATE
--         TASK 1)
UPDATE customer SET firstname="Robert", lastname="Walter" WHERE firstname="Aaron" AND lastname="Mitchell";
UPDATE artist SET name="CCR" WHERE name="Creedence Clearwater Revival";
--     2.5 - LIKE
--         TASK 1)
SELECT * FROM invoice WHERE billingaddress LIKE "T%";
--     2.6 - BETWEEN
--         TASK 1)
SELECT * FROM invoice WHERE total BETWEEN 10 AND 50;
--         TASK 2)
SELECT * FROM employee WHERE hiredate BETWEEN to_date('01-06-2003', 'DD-MM-YYYY') AND to_date('01-03-2004', 'DD-MM-YYYY');
--     2.7 - DELETE
--         TASK 1)
DELETE FROM customer WHERE firstname="Robert" AND lastname="Walter";

-- 7.0) JOINS
--     7.1 - INNER
--         TASK 1)
SELECT customer.firstname, customer.lastname, invoice.invoiceid FROM customer INNER JOIN invoice ON customer.customerid=invoice.customerid;
--     7.2 - OUTER
--         TASK 1)
SELECT customer.id, customer.firstname, customer.lastname, invoice.invoiceid, invoice.total FROM customer FULL OUTER JOIN invoice ON customer.customerid=invoice.customerid;
--     7.3 - RIGHT
--         TASK 1)
SELECT artist.name, album.title FROM album RIGHT JOIN artist ON album.artistid=artist.artistid;
--     7.4 - CROSS
--         TASK 1)
SELECT * FROM album, artist ORDER BY artist.name ASC;
--     7.5 - SELF
--         TASK 1)
SELECT * FROM employee a, employee b WHERE a.reportsto=b.reportsto; 