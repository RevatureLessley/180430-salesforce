--SQL LAB
--2.0 SELECT 
SELECT * FROM EMPLOYEE;

SELECT * FROM EMPLOYEE
WHERE LASTNAME = 'King';

SELECT * FROM EMPLOYEE
WHERE FIRSTNAME = 'Andrew'
AND REPORTSTO IS NULL;

--2.2 ORDER BY
SELECT * FROM ALBUM
ORDER BY title desc;

SELECT firstname FROM customer
ORDER BY city ASC;

--2.3 INSERT INTO
INSERT INTO Genre (GenreId, Name) VALUES (26,'Horror');
INSERT INTO Genre (GenreId, Name) VALUES (27,'Kpop');

INSERT INTO Employee (EmployeeId, LastName, FirstName, Title, ReportsTo, BirthDate, HireDate, Address, City, State, Country, PostalCode, Phone, Fax, Email) VALUES(9,'Miyou','Mina','Manager', 1 , TO_DATE('1997-3-24 00:00:00','yyyy-mm-dd hh24:mi:ss'),TO_DATE('2018-5-09 00:00:00','yyyy-mm-dd hh24:mi:ss'),'3209 Twice Avenue','San Antonio','TX','America','78006','+1 (210) 567-9459','+1 (210) 567-9932', 'miyoumina@chinookcorp.com');
INSERT INTO Employee (EmployeeId, LastName, FirstName, Title, ReportsTo, BirthDate, HireDate, Address, City, State, Country, PostalCode, Phone, Fax, Email) VALUES(10,'Del Rosario', 'Resty', 'Co Manager', 9 , TO_DATE('1995-8-10 00:00:00','yyyy-mm-dd hh24:mi:ss'),TO_DATE('2018-5-09 00:00:00','yyyy-mm-dd hh24:mi:ss'), '3421 Fake Street', 'Santa Cruz','CA','America','95064', '+1 (661) 458-2232', '+1 (661) 456-6789', 'redelros@chinookcorp.com');

INSERT INTO Customer (CustomerId, FirstName, LastName, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId) VALUES(60,'Nayeon','Im','2567 Bunny Drive','Seoul', 'Seoul','South Korea', '456709', '+32 (589) 567-2345', '+32 (567) 789-4567','imnayeon@twice.com',3);
INSERT INTO Customer (CustomerId, FirstName, LastName, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId) VALUES(61,'Jermaine','Cole','4561 Forest Hill Drive', 'Garner', 'NC', 'America', '27529', '+1 (567) 125-5689', '+1 (543) 567-5678', 'jcole@bestrapper.com', 3);


--2.4 UPDATE
UPDATE Customer
SET Firstname = 'Robert', Lastname = 'Walter'
WHERE Firstname = 'Aaron' and  Lastname = 'Mitchell';

UPDATE Artist 
SET Name = 'CCR'
WHERE Name = 'Creedence Clearwater Revival';
--2.5 LIKE
SELECT * FROM Invoice
WHERE BILLINGADDRESS LIKE 'T%'; 
--2.6 BETWEEN
SELECT * FROM Invoice
WHERE Total BETWEEN 15 and 50;

SELECT * FROM Employee
Where HireDate BETWEEN '1-MAR-2003' and '1-JUN-2004';
--2.7 DELETE
ALTER TABLE Invoice 
DROP CONSTRAINT FK_InvoiceCustomerId;

ALTER TABLE Invoice ADD CONSTRAINT FK_InvoiceCustomerId
FOREIGN KEY (CustomerId) REFERENCES Customer (CustomerId) 
ON DELETE CASCADE;

ALTER TABLE Customer 
DROP CONSTRAINT FK_CustomerSupportRepId;

ALTER TABLE Customer ADD CONSTRAINT FK_CustomerSupportRepId
FOREIGN KEY (SupportRepId) REFERENCES Employee (EmployeeId)
ON DELETE CASCADE;

ALTER TABLE InvoiceLine 
DROP CONSTRAINT FK_InvoiceLineInvoiceId;

ALTER TABLE InvoiceLine ADD CONSTRAINT FK_InvoiceLineInvoiceId
FOREIGN KEY (InvoiceId) REFERENCES Invoice (InvoiceId)
ON DELETE CASCADE;

DELETE FROM Customer
WHERE FirstName = 'Robert' and LastName= 'Walter';

-- *****************JOINS****************************


--7.1 INNER JOINS
SELECT  Customer.Firstname, Customer.Lastname, Invoice.invoiceid
FROM Customer
INNER JOIN Invoice ON Customer.customerid = Invoice.customerid; 
--7.2 OUTER JOINS
SELECT Customer.Customerid, Customer.Firstname, Customer.Lastname,Invoice.invoiceid, Invoice.total
From Customer
FULL OUTER JOIN Invoice ON Customer.Customerid = Invoice.Customerid;
--7.3 RIGHT JOINS
SELECT Artist.Name, Album.Title 
From Artist
RIGHT JOIN ALBUM on Artist.Artistid = ALBUM.ARTISTID;
--7.4 CROSS JOINS
SELECT *
FROM ARTIST
CROSS JOIN Album
ORDER BY ARTIST.NAME ASC;
--7.5 SELF JOINS
SELECT *
FROM employee a , employee b
WHERE a.Reportsto = b.REPORTSTO;