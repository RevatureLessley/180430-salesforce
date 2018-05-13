--2.1
--a
SELECT * FROM EMPLOYEE;
--b
Select * from employee
where LASTNAME='King';
--c
Select * from employee
where FIRSTNAME='Andrew' AND REPORTSTO IS NULL;


--2.2
--a
Select * from album
ORDER BY ALBUMID;
--b
SELECT FIRSTNAME,City from customer
ORDER BY City;

--2.3
--a
Insert Into Genre (Genreid,name) Values (26,'Pogresive '||chr(38)||' Dreamcore');
Insert Into Genre (Genreid,name) Values (27,'Vaporwave');
--b
Insert Into Employee (EMPLOYEEID,LASTNAME,FIRSTNAME,TITLE,REPORTSTO,BIRTHDATE,HIREDATE,ADDRESS,CITY,STATE,COUNTRY,POSTALCODE,PHONE,FAX,EMAIL)
Values (9,'Deely','Jeffrey','Boss',NULL,TO_DATE('04/14/1994', 'MM/DD/YYYY'),TO_DATE('04/15/1994', 'MM/DD/YYYY'),'312 elmmook lane','Bittspurgh','Bemsylpania',
'Allegheny','15243','412-414-4111','412-414-4112','thisisnotarealemail@notreal.fun');
Insert Into Employee (EMPLOYEEID,LASTNAME,FIRSTNAME,TITLE,REPORTSTO,BIRTHDATE,HIREDATE,ADDRESS,CITY,STATE,COUNTRY,POSTALCODE,PHONE,FAX,EMAIL)
Values (10,'Dely','Jeffry','Big Boss',9,TO_DATE('04/14/1995', 'MM/DD/YYYY'),TO_DATE('04/15/1995', 'MM/DD/YYYY'),'322 elmmook lane','Bittspurgh','Bemsylpania',
'Allegheny','15244','412-414-4113','412-414-4114','thisisnotarealemail@notreal.game');
--c
Insert Into Customer (CUSTOMERID,FIRSTNAME,LASTNAME,COMPANY,ADDRESS,CITY,STATE,COUNTRY,POSTALCODE,PHONE,FAX,EMAIL,SUPPORTREPID)
Values (60,'Dely','Jeffry','Boss coffee','322 elmmook lane','Bittspurgh','Bemsylpania',
'Allegheny','15244','412-414-4113','412-414-4114','fake@ffffake.fake',9);
Insert Into Customer (CUSTOMERID,FIRSTNAME,LASTNAME,COMPANY,ADDRESS,CITY,STATE,COUNTRY,POSTALCODE,PHONE,FAX,EMAIL,SUPPORTREPID)
Values (61,'Del','ffry','No Tabuisness','322 elmmook lane','Bittspurgh','Bemsylpania',
'Allegheny','15244','412-414-4113','412-414-4114','fake@ffffake.fake',3);

--2.4
--a
Update Customer
SET Firstname='Robert',Lastname='Walter'
WHERE firstname='Aaron' AND Lastname='Mitchell';
--b
Update Artist
SET name='CCR'
WHERE name='Creedence Clearwater Revival';

--2.5
--a
SELECT * FROM INVOICE
Where Billingaddress LIKE 'T%';

--2.6
--a
Select * FROM INVOICE
WHERE TOTAL BETWEEN 15 AND 50;
--b
SELECT * FROM EMPLOYEE
WHERE HIREDATE BETWEEN TO_DATE('06/01/2003','MM/DD/YYYY') AND TO_DATE('03/01/2004','MM/DD/YYYY');

--2.7
DELETE FROM INVOICELINE
WHERE INVOICEID IN (SELECT INVOICEID FROM INVOICE
WHERE CUSTOMERID = (SELECT CUSTOMERID FROM Customer 
Where Firstname='Robert' AND Lastname='Walter'));
DELETE FROM INVOICE
WHERE CUSTOMERID = (SELECT CUSTOMERID FROM Customer 
Where Firstname='Robert' AND Lastname='Walter');
DELETE FROM Customer
WHERE Firstname='Robert' AND Lastname='Walter';

--7.1
SELECT FIRSTNAME,LASTNAME,invoiceid FROM CUSTOMER
INNER JOIN INVOICE ON CUSTOMER.customerid=INVOICE.customerid;

--7.2
SELECT CUSTOMER.CUSTOMERID,FIRSTNAME,LASTNAME,INVOICEID,TOTAL FROM CUSTOMER
FULL OUTER JOIN INVOICE ON CUSTOMER.customerid=INVOICE.customerid;