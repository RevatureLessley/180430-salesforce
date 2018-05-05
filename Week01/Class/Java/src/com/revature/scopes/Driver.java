package com.revature.scopes;

public class Driver {

    public static void main (String[] args) {
        Driver driver = new Driver();
        driver.demo();
    }

    public void demo() {
        Person p1 = new Person("Bobbert", 213);
        p1.printPersonInfoThreeTimes();
        System.out.print("PersonCount: " + Person.personCount + "\n");

        Person p2 = new Person("Ryan", 10);
        Person p3 = new Person("Jeremy", 44);
        p2.printPersonInfoThreeTimes();
        p3.printPersonInfoThreeTimes();
    }
}