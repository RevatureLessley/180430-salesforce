--2.1 SELECT
SELECT * FROM Employee;
SELECT * FROM Employee WHERE lastName = 'King';
SELECT * FROM Employee WHERE firstName = 'Andrew' AND REPORTSTO IS NULL;

--2.2 ORDER BY
SELECT * FROM Album ORDER BY title DESC;
SELECT * FROM (SELECT firstName FROM Customer ORDER BY city) ORDER BY firstName ASC;

--2.3 INSERT INTO
--insert 2 into Genre
INSERT INTO Genre VALUES (26, 'Post-Apocalyptic Funk');
INSERT INTO Genre VALUES (27, 'Caveman Rock');
--insert 2 into Employee
INSERT INTO Employee VALUES (9, 'Chiu', 'Kyle', 'Baking Assistant', NULL, '03-FEB-95', '30-APR-18', '14601 SE 243rd PL', 'Kent', 'WA', 'United States', NULL, '+1 (206) 313-1249', NULL, 'kchiu132@gmail.com');
INSERT INTO Employee VALUES (10, 'Uihc', 'Elyk', 'Assistant Assistant', NULL, '29-FEB-84', '30-APR-18', '12345 Sesame ST', 'Crater 35', 'S7', 'Moon', NULL, '+115 (051) 443-7217', NULL, 'euihc@moonman.gov');
--insert 2 into Customer
INSERT INTO Customer VALUES (60, 'Corey', 'Oken', NULL, 'That One Street By The Barbershop', 'Portland', 'OR', 'United States', NULL, '+1 (503) 112-3333', NULL, 'coken@pugetsound.edu', 4);
INSERT INTO Customer VALUES (61, 'Brian', 'Smith', NULL, 'Avenue Q', 'Spokane', 'WA', 'United States', NULL, '+1 (253) 446-7784', NULL, 'bms330@forbes.com', 2);

--2.4 UPDATE
--change 'Aaron Mitchell' to 'Robert Walter' in Customer table
UPDATE Customer
SET firstName='Robert', lastName='Walter'
WHERE firstName='Aaron' AND lastName='Mitchell';
--change 'Creedence Clearwater Revival' to 'CCR' in Artist table
UPDATE Artist
SET name='CCR'
WHERE name='Creedence Clearwater Revival';

--2.5 LIKE
--% wildcard selects any amount of characters of any type after the specified character sequence
--in this case, we want to find any billing address that starts with T.
SELECT * FROM Invoice WHERE billingAddress LIKE 'T%';

--2.6 BETWEEN
SELECT * FROM Invoice WHERE total < 50 AND total > 15 ORDER BY total ASC;
SELECT * FROM Employee WHERE hireDate > '01-JUN-03' AND hireDate < '01-MAR-04' ORDER BY hireDate ASC;

--2.7 DELETE
--drop constraints
ALTER TABLE Invoice DROP CONSTRAINT fk_invoiceCustomerId;
ALTER TABLE InvoiceLine DROP CONSTRAINT fk_invoiceLineInvoiceId;
--add them back in, but this time using ON DELETE CASCADE
ALTER TABLE InvoiceLine ADD CONSTRAINT fk_invoiceLineInvoiceId FOREIGN KEY (invoiceId) REFERENCES Invoice(invoiceId) ON DELETE CASCADE;
ALTER TABLE Invoice ADD CONSTRAINT fk_invoiceCustomerId FOREIGN KEY (customerId) REFERENCES Customer(customerId) ON DELETE CASCADE;
--delete
DELETE FROM Customer WHERE firstName='Robert' AND lastName='Walter';

--7.1 INNER JOIN
SELECT cus.firstName, inv.invoiceId 
FROM (Customer cus INNER JOIN Invoice inv 
ON cus.customerId = inv.customerId)
ORDER BY cus.firstName;

--7.2 OUTER JOIN
SELECT cus.customerId, cus.firstName, cus.lastName, inv.invoiceId, inv.total
FROM (Customer cus Full OUTER JOIN Invoice inv
ON cus.customerId = inv.customerId)
ORDER BY cus.firstName;

--7.3 RIGHT JOIN
SELECT ar.name, al.title
FROM (Album al RIGHT JOIN Artist ar
ON al.artistId = ar.artistId)
ORDER BY ar.artistId;

--7.4 CROSS JOIN
SELECT * FROM
(Album al CROSS JOIN Artist ar)
ORDER BY ar.name ASC;

--7.5 SELF JOIN
SELECT * FROM
Employee e1, Employee e2
WHERE e1.reportsTo = e2.reportsTo
ORDER BY e1.employeeId;