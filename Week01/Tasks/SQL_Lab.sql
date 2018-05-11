-- 2.1 SELECT --
SELECT * FROM Employee;

SELECT * FROM Employee WHERE lastname = 'King';

SELECT * FROM Employee 
WHERE firstname = 'Andrew' 
AND reportsto IS NULL;

-- 2.2 ORDER BY --
SELECT * FROM album ORDER BY title DESC;

SELECT firstname, city FROM Customer ORDER BY city ASC;

-- 2.3 INSERT INTO --
SELECT * FROM Genre;
INSERT INTO Genre (genreid, name) VALUES (26, 'Rap');
INSERT INTO Genre (genreid, name) VALUES (27, 'Bachata');

SELECT * FROM Employee;
INSERT INTO Employee (employeeid, lastname, firstname, title, 
    reportsto, birthdate, hiredate, address, city, state, country,
    postalcode, phone, fax, email)
VALUES (9, 'Parker', 'Peter', 'Neighborhood Spider-Man',
    2, '28-AUG-1917', '01-AUG-62', '20 Ingram St.', 'New York',
    'New York', 'United States', 11375, '1-718-WEB-HEAD', 
    '1-718-A-SPIDER', 'webslinger@gmail.com');
INSERT INTO Employee 
VALUES (10, 'Michael', 'George', 'Singer-Songwriter', 
1, '25-JUN-63', '30-OCT-87', '1 Hollywood Blvd.', 
'Hollywood', 'CA', 'United States', 90210, '1-800-LUV-WHAM',
'1-800-B4U-GOGO', 'panayiotou.georgios@aol.com');
    
SELECT * FROM Customer;
INSERT INTO Customer (customerid, firstname, lastname, company, 
    address, city, state, country, postalcode, phone, email,
    supportrepid)
VALUES(60, 'Donald', 'Glover', 'Atlanta Records', '1 Darius Way',
'Atlanta', 'GA', 'USA', 12345, '1-800-DON-GLOV',
'don.glover@yahoo.com',5);
INSERT INTO Customer 
VALUES (61,'Kendrick','Lamar','Marvel Studios',
'2 Wakanda Way', 'Compton', 'CA', 'United States', 90021, 
'1-992-938-9239', '1-992-234-3244', 'humblekdot@website.com',4);

-- 2.4 UPDATE --
SELECT * FROM Customer;
UPDATE Customer
SET firstname='Robert', lastname='Walter'
WHERE firstname='Aaron' AND lastname='Mitchell';

SELECT * FROM Artist ORDER BY name ASC;
UPDATE Artist
SET name='CCR' 
WHERE name='Creedence Clearwater Revival';

-- 2.5 LIKE --
SELECT * FROM Invoice;
SELECT * FROM Invoice WHERE billingaddress LIKE 'T%';

-- 2.6 BETWEEN --
SELECT invoiceid,total FROM Invoice ORDER BY total ASC;
SELECT * FROM Invoice WHERE total BETWEEN 15 AND 50;

SELECT employeeid,hiredate FROM Employee ORDER BY hiredate ASC;
SELECT * FROM Employee WHERE hiredate 
BETWEEN '01-JUN-2003' AND '01-MAR-2004';

-- 2.7 DELETE --
SELECT * FROM Customer;
    DELETE FROM Customer 
    WHERE firstname='Robert' AND lastname='Walter';
    -- throws integrity constraint violation error

-- remove constraint
ALTER TABLE Invoice
    DROP CONSTRAINT FK_InvoiceCustomerId;
ALTER TABLE InvoiceLine
    DROP CONSTRAINT FK_InvoiceLineInvoiceId;
-- add it back with ON DELETE CASCADE included
ALTER TABLE Invoice ADD CONSTRAINT FK_InvoiceCustomerId
    FOREIGN KEY (CustomerId) REFERENCES Customer (CustomerId)
    ON DELETE CASCADE;

ALTER TABLE InvoiceLine ADD CONSTRAINT FK_InvoiceLineInvoiceId
    FOREIGN KEY (InvoiceId) REFERENCES Invoice (InvoiceId)
    ON DELETE CASCADE;

-- 7.1 INNER JOINS --
SELECT * FROM Customer;
SELECT * FROM Invoice;
SELECT Customer.firstname, Customer.lastname, Invoice.invoiceid
FROM Customer 
INNER JOIN Invoice ON Customer.customerid = Invoice.customerid;

-- 7.2 OUTER JOIN --
SELECT Customer.customerid, Customer.firstname, 
    Customer.lastname, Invoice.invoiceid, Invoice.total
    FROM Customer
    FULL OUTER JOIN Invoice ON Customer.customerid=invoice.customerid;

-- 7.3 RIGHT JOIN --
SELECT * FROM Album;
SELECT * FROM Artist;
SELECT Artist.name, Album.title
    FROM Album
    RIGHT JOIN Artist ON Album.albumid = Artist.artistid;
    
-- 7.4 CROSS JOIN --
SELECT Artist.name, Album.title
    FROM Album
    CROSS JOIN Artist
    ORDER BY Artist.name ASC;
    
-- 7.5 SELF JOIN --
SELECT * FROM Employee;
SELECT B.lastname AS Last_Name,B.firstname AS First_Name, 
    B.reportsto AS Reports_To, A.lastname AS Super_Last_Name,
    A.firstname AS Sup_First_Name
    FROM Employee A, Employee B
    WHERE B.reportsto = A.Employeeid;