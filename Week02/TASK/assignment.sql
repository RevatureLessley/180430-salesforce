SELECT * FROM EMPLOYEE;
/
SELECT * FROM employee WHERE lastname = 'King';
/
SELECT * FROM employee WHERE firstname = 'Andrew' AND REPORTSTO IS NULL;
/
SELECT * FROM album ORDER BY TITLE DESC;
/
SELECT firstname FROM CUSTOMER ORDER BY city ASC;
/
INSERT INTO genre VALUES(26, 'Netflix');
INSERT INTO genre VALUES(27, 'ShowBox');
/
INSERT INTO employee VALUES(9,'Narayanan', 'Anu', 'Software Engineer', 1, '07-DEC-95', '30-APR-18','11730 American Plaza','Reston','VA','USA','T5k 2N1','+1 (612) 435-4356','+1 (612) 423-4356','anu@chinookcorp.com');
INSERT INTO employee VALUES(10,'Ravi', 'Banu', 'Software Engineer', 1, '05-DEC-93', '30-APR-18','11730 American blvd','Bloomington','MN','USA','T5k 2N1','+1 (612) 435-4356','+1 (612) 423-4356','banu@chinookcorp.com');
/
INSERT INTO customer VALUES(60,'Dinesh','Raj',null,'123 Flip flop','Bangalore', 'Karnataka', 'India', '546544','+91 9600034344',null,'dinesh@gmail.com',5);
INSERT INTO customer VALUES(61,'Jenifer','Joseph',null,'454 Bing bong','Chennai', 'Tamil Nadu', 'India', '678905','+91 8767654334',null,'jenifer@gmail.com',3);
/
UPDATE customer SET FIRSTNAME = 'Aaron',LASTNAME = 'Mitchell' WHERE FIRSTNAME = 'Robert' AND LASTNAME = 'Brown';
UPDATE ARTIST SET NAME = 'CCR' WHERE NAME = 'Creedence Clearwater Revival';
/
SELECT * FROM INVOICE WHERE BILLINGADDRESS LIKE 'T%';
/
SELECT * FROM invoice WHERE TOTAL BETWEEN 15 AND 50;
/
SELECT * FROM employee WHERE HIREDATE BETWEEN '01-JUN-2003' AND '01-MAR-2004';
/
DELETE FROM customer WHERE firstname = 'Robert' AND lastname = 'Walter';
/
SELECT a.invoiceid, b.firstname, b.lastname FROM customer b INNER JOIN invoice a ON a.customerid = b.customerid;
/
SELECT a.customerid, a.firstname, a.lastname, b.invoiceid, b.total FROM customer a FULL OUTER JOIN invoice b ON a.customerid = b.customerid;
/
SELECT b.name, a.title FROM album a RIGHT JOIN artist b ON a.ARTISTID = b.ARTISTID;
/
SELECT * FROM album  CROSS JOIN artist ORDER BY artist.NAME;
/
SELECT * FROM employee a, employee b WHERE a.reportsto = b.reportsto;
/
commit;