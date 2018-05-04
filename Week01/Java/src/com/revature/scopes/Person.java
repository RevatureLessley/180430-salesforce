package com.revature.scopes;

public class Person {
	/*
	 * A class is a blue print for objects
	 * 
	 * Object is an instantiated class that maintains state and can be interacted with
	 */
	
	/*
	 * Instance Scope
	 * Any variable within the class definition but outside any methods
	 * of the class, is considered instance scope.(Global Scope)
	 */
	
	//Instance variables
	private String name;
	private int age;
	//using static, we place our variable personCount within static scope
	//we can access this variable directly without having to instantiate the class
	//more importantly, anything static can only ever have 1 instance created
	//that instance is shared among all other instatiated intances of the class
	static int personCount = 0;
	
	/*
	 * A method matching the class name is the constructor
	 * It's the first method called when you create a new object via 
	 * the new() keyword. 
	 */
	public Person(String name, int age){
		this.name = name;
		this.age = age;
		personCount++;
	}//Contructor
	
	public void printPersonInfoThreeTimes(){
		//method scope
		//any variable that is created within a method is considered method scope.
		//as per the rules, any variables created within the method may not be accessed outside the method
		String fullInfo = name + ", who is " + age + " years old..." ;
		
		for(int i =0;i<3;i++){
			System.out.println(fullInfo);
		}//for

		
	}//printPersonInfoThreeTimes
}//class
