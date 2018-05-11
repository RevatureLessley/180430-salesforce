--LAB 2.1
--Task: Select all records from the Employee table.
SELECT * FROM Employee;
/

--Task: Select all records from the Employee table where last name is King.
SELECT * FROM Employee WHERE LASTNAME = 'King';
/

--Task: Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
SELECT * FROM Employee WHERE FIRSTNAME = 'Andrew' and REPORTSTO is null;
/

--LAB 2.2
--Task: Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM Album ORDER BY TITLE; --ASC is the default ordering.
/

--Task: Select first name from Customer and sort result set in ascending order by city
SELECT FIRSTNAME FROM Customer ORDER BY CITY;
/

--2.3 INSERT INTO
--Task: Insert two new records into Genre table
INSERT INTO Genre VALUES (26, 'Bluegrass');
INSERT INTO Genre VALUES (27, 'Vocal Trance');
/
commit;

--Task: Insert two new records into Employee table
INSERT INTO Employee (EmployeeID, LastName, FirstName, Title, Reportsto, BirthDate, HireDate,
    Address, City, State, Country, PostalCode, Phone, Fax, Email)
    VALUES (9, 'McColl', 'Carol', 'Secretary', 1, '04-FEB-82', '22-NOV-03', '18244 Dulcet Ave', 'Edmonton', 'AB', 'Canada', 
        'T5K 2N1', '+1 (780) 359-2260', '(780) 359-4309', 'carol@chinookcorp.com');

INSERT INTO Employee (EmployeeID, LastName, FirstName, Title, Reportsto, BirthDate, HireDate,
    Address, City, State, Country, PostalCode, Phone, Fax, Email)
    VALUES (10, 'Dragnet', 'Eric', 'IT Staff', 6, '22-MAR-79', '12-APR-03', '19985 Courtyard Ave', 'Lethbridge', 'AB', 'Canada', 
        'T1H 2C3', '+1 (403) 422-9236', '(403) 422-4779', 'eric@chinookcorp.com');
/
commit;

--Task: Insert two new records into Customer table
INSERT INTO Customer (CustomerID, FirstName, LastName, Company, Address, City, State, Country, PostalCode, 
    Phone, Fax, Email, SupportRepID)
    VALUES (60, 'Richard', 'Jones', null, '1450 Orchid Way', 'Toledo', 'Ohio', 'USA', 43460, 
        '+1 (419) 345-9002', null, 'jones.richard3@hotmail.com', 4);

INSERT INTO Customer (CustomerID, FirstName, LastName, Company, Address, City, State, Country, PostalCode, 
    Phone, Fax, Email, SupportRepID)
    VALUES (61, 'Amanda', 'Lacoste', null, '1390 Juniper Street', 'Beverly Hills', 'California', 'USA', 90210, 
        '+1 (323) 908-4545', null, 'alacoste@yahoo.com', 3);
/
commit;


--2.4 UPDATE
--Task: Update Aaron Mitchell in Customer table to Robert Walter
UPDATE Customer
SET lastname = 'Walter', firstname = 'Robert'
WHERE lastname = 'Mitchell' and firstname = 'Aaron';
select * from customer where firstname = 'Robert';
/
commit;

--Task: Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
UPDATE Artist
SET name = 'CCR'
WHERE name = 'Creedence Clearwater Revival';
select * from Artist where name = 'CCR';

commit;

--2.5 LIKE
--Task: Select all invoices with a billing address like “T%”
SELECT * FROM Invoice WHERE billingAddress like 'T%';


--2.6 BETWEEN
--Task: Select all invoices that have a total between 15 and 50
SELECT * FROM Invoice where total between 15 and 50;

--Task: Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM Employee where hiredate between '01-JUN-2003' and '01-MAR-2004';

--2.7 DELETE
--Task: Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
DELETE (
SELECT * FROM Customer c 
INNER JOIN Invoice i 
    ON c.customerID = i.customerID
    INNER JOIN InvoiceLine il
        ON i.invoiceID = il.invoiceID
WHERE c.firstname='Robert' AND c.lastname='Walter'
);
/
commit;

--7.0 JOINS
--In this section you will be working with combing various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.


--7.1 INNER
--Task: Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
SELECT c.firstname, c.lastname, i.invoiceId 
FROM Customer c INNER JOIN Invoice i
    ON c.customerID = i.customerID;

--7.2 OUTER
--Task: Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
SELECT c.customerid, c.firstname, c.lastname, i.invoiceid, i.total 
FROM Customer c LEFT OUTER JOIN Invoice i 
    ON c.customerid = i.customerid;

--7.3 RIGHT
--Task: Create a right join that joins album and artist specifying artist name and title.
SELECT Artist.name, Album.title
FROM Artist RIGHT OUTER JOIN Album
    ON Album.artistid = Artist.artistid;

--7.4 CROSS
--Task: Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT * FROM Artist CROSS JOIN Album ORDER BY Artist.name;

--7.5 SELF
--Task: Perform a self-join on the employee table, joining on the reportsto column.
SELECT * FROM employee e1, employee e2 WHERE e1.reportsto = e2.reportsto;