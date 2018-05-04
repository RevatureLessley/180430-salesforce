package com.revature.scopes;

public class Person {
	
	/*
	 * What's a class?
	 * 	a class is a blueprint for objects.
	 * 
	 * Object
	 * 	an instantiated class.
	 */
	

	/*
	 * Instance scope
	 * any variable within the class definition, but outside any methods of the class,
	 * are considered instance scope. (global)
	 */
	
	//instance variables
	private String name;
	private int age;
	
	//using the static non-access modifier, we place our variable, personCount,
	//within static scope.
	//this means that we can access this variable directly w/o having to
	//instantiate the class as an object.
	//anything static can only have ONE instance created. this instance is SHARED
	//among all instances of the class. (all objects share this variable)
	static int personCount = 0;
	
	/*
	 * a method that matches the ClassName exactly is called the constructor
	 * the constructor is the first method called when you create a new object 
	 * using the 'new' keyword
	 */
	public Person(String name, int age) {
		this.name = name; //'this' refers to the class. the classes name is now the input name.
		this.age = age; //this classes age is now the input age.
		personCount++;
	}
	
	//access modifier + return type + methodname + (arguments) + { implementation }
	public void printPersonInfoThreeTimes() {
		//method scope
		//any variables created within a method are considered method scope
		//as per the rules of scope, any variables created within the method may NOT
		//be accessed outside of this method
		
		String fullInfo = name + ", who is " + age + " years old...";
		
		//loop scope
		//the variable, "i", exists only within this loop
		for(int i = 0; i < 3; i++) {
			System.out.println(fullInfo);
		}
	}
}
