package com.revature.scope;


public class Driver {
	public static void main(String[] args) {
		Driver driver = new Driver();
		driver.demo();
	}
	public void demo() {
		//Static variable personCount is created at the start of runtime.
		//Therefore I can access directly by using its class name.
		System.out.println("PersonCount: "+ Person.personCount);
		
		Person p1 = new Person("Bobbert",213);
		
		// also u can do Person.personCount
		p1.printPersonInfoThreeTime();
		System.out.println("PersonCount: " + p1.personCount);
		System.out.println("PersonCount: " + Person.personCount);

		Person p2 = new Person("Ryan",72);
		Person p3 = new Person("Daniel",2);

		p1.printPersonInfoThreeTime();
		p2.printPersonInfoThreeTime();
		p2.printPersonInfoThreeTime();
		
		System.out.println(Person.personCount);//3 
		System.out.println(p1.personCount);    //3
	}
}
