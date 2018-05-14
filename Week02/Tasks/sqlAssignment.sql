-- Section 2.1 Select ------------------------------------------

SELECT *
FROM employee;

SELECT *
FROM employee
where lastname = 'King';

-- Messing around with regexp
SELECT *
FROM employee
where regexp_like (lastname, 'king', 'i');

SELECT *
FROM employee
where firstname  = 'Andrew' AND reportsto IS NULL;

-- Section 2.2 Order By ---------------------------------------------

SELECT *
FROM album
ORDER BY title DESC;

SELECT firstname
FROM customer
ORDER BY city;

-- Section 2.3 Insert Into ----------------------------------------------

-- Inserts into Genre table
INSERT INTO Genre VALUES (26, 'Shwazzy Jazzy');
INSERT INTO Genre VALUES (27, 'Awesome Opossum');

-- Inserts into Employee table
INSERT INTO Employee VALUES(
    9,
    'Atreides',
    'Paul',
    'Duke',
    NULL,
    '23-Dec-1987',
    '15-Aug-1990',
    'Arrakis',
    'Arrakeen',
    NULL,
    NULL,
    NULL,
    '(900)-555-2323',
    NULL,
    NULL
);

INSERT INTO Employee VALUES(
    10,
    'Awesome',
    'Jordan',
    'Cat Chef',
    NULL,
    '02-MAY-2017',
    '2-AUG-1934',
    'Some Place',
    'Some Where',
    'Elsweyer',
    'Skyrim',
    NULL,
    NULL,
    NULL,
    'arrowToTheKnee@skyrim.com'
);

--Insert into Customer table
INSERT INTO Customer VALUES(
    60,
    'Charles',
    'Darwin',
    'Evolution Inc',
    'Some Place Important',
    'Sim City',
    'WI',
    'Canastralia',
    NULL,
    '(345)-555-5555',
    NULL,
    'levelUp@evolved.com',
    4
);

INSERT INTO Customer VALUES(
    61,
    'Jake',
    'Johnson',
    'Some Company',
    NULL,
    'Sim City',
    'CO',
    'Canastralia',
    NULL,
    '(345)-555-9876',
    NULL,
    'iHaveAEmail@emailz.com',
    5
);

--Section 2.4 Update -----------------------------------

UPDATE Customer
SET firstname = 'Robert',
    lastname = 'Walter'
WHERE firstname = 'Aaron' AND lastname = 'Mitchell';

UPDATE Artist
SET name = 'CCR'
WHERE name = 'Creedence Clearwater Revival';

--Section 2.5 Like ----------------------------

SELECT *
FROM Invoice
WHERE BillingAddress LIKE 'T%';

--Section 2.6 Between -----------------------------

SELECT *
FROM Invoice
WHERE total BETWEEN 15 AND 50;

SELECT *
FROM Employee
WHERE hiredate BETWEEN TO_DATE('06/01/2003', 'mm/dd/yyyy')
    AND TO_DATE('03/01/2014','mm/dd/yyyy');
    
--Section 2.7 Delete ------------------------------------
COMMIT;

/* 
There are multiple ways to handle deleting parent records
that have child records. Since the child tables have
Foreign Keys that can't be cascade deleted, we have to delete
the children records first before we can delete parent records.

In this example, I delete the records based off of the customer's ID
AND the customer's name. This makes it a little 'safer' because it
minimizes the chance that I am deleting the wrong record.
When deleting, make sure you commit! Delete is a very dangerous operation.

DELETE FROM Invoiceline
WHERE Invoiceline.invoiceid IN (
    
    SELECT invline.invoiceid
    FROM Invoiceline invline
    
    INNER JOIN Invoice inv
    ON invline.invoiceid = inv.invoiceid
    
    INNER JOIN Customer cust
    ON cust.customerid = inv.customerid
    
    WHERE firstname = 'Robert' AND lastname = 'Walter'
      AND cust.customerid = 32
);

DELETE FROM Invoice 
WHERE Invoice.customerid IN (
    
    SELECT inv.customerid
    FROM Invoice inv
    
    INNER JOIN Customer cust
    ON inv.customerid = cust.customerid
    
    WHERE firstname = 'Robert' AND lastname = 'Walter'
        AND cust.customerid = 32
);

DELETE FROM Customer
WHERE firstname = 'Robert' AND lastname = 'Walter'
    AND customerid = 32;


This is similar to above, but I'm only deleting based on
a specific customer ID. This takes less joins because I
don't need the name, but I could accidently use the
wrong customer ID. Tread lightly when deleting!
*/

DELETE FROM Invoiceline
WHERE invoiceid IN(

    SELECT invline.invoiceid
    FROM Invoiceline invline
    INNER JOIN Invoice inv
    ON inv.invoiceid = invline.invoiceid
    WHERE inv.customerid = 32
);

DELETE FROM Invoice
WHERE customerid = 32;

DELETE FROM Customer
WHERE customerid = 32;

ROLLBACK;

-- Section 7.1 Inner Join ------------------------------

SELECT inv.invoiceid AS Invoice_ID,
    cust.firstname AS First_Name,
    cust.lastname AS Last_Name
FROM Customer cust
INNER JOIN Invoice inv
ON cust.customerid = inv.customerid;

-- Section 7.2 Left Outer Join ------------------------------

SELECT cust.customerid,
    cust.firstname,
    cust.lastname,
    inv.invoiceid,
    inv.total
    
FROM Customer cust
LEFT OUTER JOIN Invoice inv
ON cust.customerid = inv.customerid;

-- Section 7.3 Right Outer Join -------------------------------------

SELECT Artist.name AS ARTIST_NAME, Album.title AS ALBUM_TITLE
FROM Album
RIGHT OUTER JOIN Artist
ON Album.artistid = Artist.artistid;

-- Section 7.4 Cross Join --------------------------------------

SELECT *
FROM Artist
CROSS JOIN Album
ORDER BY Artist.name;

-- Section 7.5 Self Join --------------------------------------

SELECT *
From Employee emps
INNER JOIN Employee mans
ON emps.employeeid = mans.reportsto;
