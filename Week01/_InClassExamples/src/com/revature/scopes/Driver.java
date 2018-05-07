package com.revature.scopes;

public class Driver {

	public static void main(String[] args) {
		Driver driver = new Driver();
		driver.demo();
	}
	
	public void demo(){
		//Static variable personCount is created at the start of runtime.
		//Therefore I can access directly by using its class name.
		System.out.println("PersonCount: "+ Person.personCount);
		Person p1 = new Person("Bobbert", 213);
		
		p1.printPersonInfoThreeTimes();
		System.out.println("PersonCount: "+ Person.personCount);
		
		Person p2 = new Person("Ryan", 72);
		Person p3 = new Person("Jeffrey", 28);
		
		p1.printPersonInfoThreeTimes();
		p2.printPersonInfoThreeTimes();
		p3.printPersonInfoThreeTimes();
		
		System.out.println(Person.personCount);//3 
		System.out.println(p1.personCount);    //3
		

		
		
	}

}
