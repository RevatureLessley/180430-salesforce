--2.1
SELECT * FROM employee;
SELECT * FROM employee WHERE lastname = 'King';
SELECT * FROM employee WHERE firstname = 'Andrew' AND reportsto Is Null;

--2.2
SELECT * FROM album ORDER BY title DESC;
SELECT firstname FROM customer ORDER BY city ASC;

--2.3
INSERT INTO genre
VALUES (26, 'Documentary');
INSERT INTO genre
VALUES (27, 'Talk Show');
INSERT INTO employee
VALUES(9, 'Houser', 'Doug', 'Developer', 6, '01-JAN-00', '01-APR-18', '123 Sycamore St', 'Atlanta', 'GA', 'USA', '12345', '+1 (501) 555-5555', '+1 (501) 555-5556', 'bob@gmail.com');
INSERT INTO employee
VALUES (10, 'Donnelly', 'Shelli', 'Receptionist', 1, '01-JAN-00', '01-APR-18', '456 Maple Dr', 'Paris', 'AR', 'USA', '78965', '+1 (555) 555-5557', '+1 (555) 555-5559', 'custsupp@3m.net');
INSERT INTO customer
VALUES (60, 'Mark', 'Brown', '3M', '753 Leaf Cir', 'Paris', 'AR', 'USA', '73546', '+1 (777) 555-5555', '+1 (777) 555-5556', 'custsupp@3M.com', 3);
INSERT INTO customer
VALUES (61, 'Jack', 'White', 'Whole Foods Inc', '951 Monroe Alley', 'St Louis', 'MO', 'USA', '82546', '+1 (111) 555-5555', '+1 (111) 555-5556', 'custsupp@wholefoods.net', 4);

--2.4
UPDATE customer
    SET firstname = 'Robert',
        lastname = 'Walter'
    WHERE firstname = 'Aaron' AND lastname = 'Mitchell';
    
UPDATE artist
    SET name = 'CCR'
    WHERE name LIKE 'Creedence%';

--2.5
SELECT * FROM invoice WHERE billingaddress LIKE 'T%';

--2.6
SELECT * FROM invoice WHERE total BETWEEN 15 AND 50;
SELECT * FROM employee WHERE hiredate BETWEEN '01-JUN-03' AND '01-MAR-04';

--2.7
ALTER TABLE invoice
    DISABLE CONSTRAINT fk_invoicecustomerid;
ALTER TABLE invoiceline
    DISABLE CONSTRAINT fk_invoicelineinvoiceid;
ALTER TABLE invoiceline
    DISABLE CONSTRAINT fk_invoicelinetrackid;
DELETE FROM invoiceline WHERE invoiceid IN(SELECT invoiceid FROM invoice
    WHERE customerid IN(SELECT customerid FROM customer
    WHERE firstname = 'Robert' AND lastname = 'Walter'));
DELETE FROM invoice WHERE customerid IN(SELECT customerid FROM customer
	WHERE firstname = 'Robert' AND lastname = 'Walter');
DELETE FROM customer WHERE firstname = 'Robert' AND lastname = 'Walter';
ALTER TABLE invoice
    ENABLE CONSTRAINT fk_invoicecustomerid;
ALTER TABLE invoiceline
    ENABLE CONSTRAINT fk_invoicelinetrackid;
ALTER TABLE invoiceline
    ENABLE CONSTRAINT fk_invoicelineinvoiceid;

--7.1
SELECT invoice.invoiceid, customer.firstname, customer.lastname
    FROM invoice
        INNER JOIN customer
            ON invoice.customerid = customer.customerid;
            
--7.2
SELECT invoice.invoiceid, customer.customerid, customer.firstname, customer.lastname, invoice.total
    FROM invoice
        FULL OUTER JOIN customer
            ON invoice.customerid = customer.customerid
            ORDER BY invoice.invoiceid;
            
--7.3
SELECT artist.name, album.title FROM artist
    RIGHT JOIN album
        ON artist.artistid = album.artistid;
        
--7.4
SELECT * FROM album, artist ORDER BY artist.name ASC;

--7.5
SELECT a.firstname || ' ' || a.lastname AS "Employee", b.firstname || ' ' || b.lastname AS "Supervisor"
    FROM employee a, employee b
    WHERE a.reportsto = b.employeeid
    ORDER BY a.lastname;