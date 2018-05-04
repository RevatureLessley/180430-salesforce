package com.revature.scopes;

public class Driver {

	public static void main(String[] args) {
		Driver driver = new Driver();
		driver.demo();

	}
	
	public void demo(){
		System.out.println("Person Count: " + Person.personCount);
		Person p1 = new Person("Bobbert", 213);
		
		p1.printPersonInfoThreeTimes();
		System.out.println("Person Count: " + p1.personCount);
		
		Person p2 = new Person("Ryan", 72);
		Person p3 = new Person("Kyle", 29);
		
		p1.printPersonInfoThreeTimes();
		p2.printPersonInfoThreeTimes();
		p3.printPersonInfoThreeTimes();
		
		System.out.println("Person Count: " + Person.personCount);//3
		
	}//demo

}
