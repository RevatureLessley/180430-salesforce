package com.revature.example;

public class Driver {

	public static void main(String[] args) {
		//TODO auto generated method stub
		Driver driver = new Driver();
		driver.demo();
	}
	
	public void demo() {
		System.out.println("Person Count before objs created: "+ Person.personCount);
		Person p1 = new Person("Bobbert", 40);
		p1.printPersonInfoThreeTimes();
		System.out.println("Person Count: "+ p1.personCount);
		Person p2 = new Person("Austin", 74);
		Person p3 = new Person("Jeffery", 28);
		p1.printPersonInfoThreeTimes();
		p2.printPersonInfoThreeTimes();
		p3.printPersonInfoThreeTimes();
		System.out.println("Person Count: "+ p1.personCount);


	}
}
