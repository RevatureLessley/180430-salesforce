package com.revature.scopes;

public class Driver {
	
	public static void main(String[] args) {
		Driver driver = new Driver();
		driver.demo();
	}
	
	public void demo() {
		//static variables can be referenced by a Class before an object has even been created
		//this first print will be 0, because we haven't made a Person yet
		System.out.println("PersonCount: " + Person.personCount);
		
		Person p1 = new Person("Kyle", 23);
		Person p2 = new Person("Elyk", 32);
		Person p3 = new Person("Lyke", 45);
		
		p1.printPersonInfoThreeTimes();
		
		//since personCount is a static variable, it can be referenced
		//by objects that have been created, as well as the Class itself
		//using dot notation
		System.out.println("PersonCount: " + p1.personCount);
		System.out.println("PersonCount: " + Person.personCount);
		
		p2.printPersonInfoThreeTimes();
		p3.printPersonInfoThreeTimes();
	}

}
