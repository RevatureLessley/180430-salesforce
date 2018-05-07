package com.revature.scopes;

public class Person {
	/*
	 * What is a class:
	 * -A class is a blueprint for objects.
	 * 
	 * Object
	 * -An instantiated class. That can maintain
	 * state and be interacted with.
	 */
	
	
	/*
	 * Instance scope
	 * -Any variable within the class definition, but outside of any
	 * methods of the class, is considered instance scope. (Global scope)
	 */
	
	//instance variables
	private String name;
	private int age;
	
	//Using the static non-access modifier, we place our variable, personCount,
	//within 'static' scope.
	/*
	 * What this means is, we can access this variable directly without having to instantiate
	 * the class as an object. More importantly, anything static can only ever have
	 * ONE instance created. And that instance is shared among all other instantiated instances
	 * of the class.
	 */
	static int personCount = 0;
	
	/*
	 * A method that matches the className directly is called the constructor.
	 * The constructor is the first method called when you create a new object via
	 * the 'new' keyword.
	 */
	public Person(String name, int age){
		this.name = name;
		this.age = age;
		personCount++;
	}
	
	//access modifier + return type + methodname + ()arguments + { implementaiton }
	public void printPersonInfoThreeTimes(){
		//Method Scope
		//Any variable that is CREATED within a method is considered method scope.
		//As per the rules of scope, any variables created within the method may NOT
		//be accessed outside of this method.
		String fullInfo = name + ", who is " + age + " years old...";
		
		for(int i = 0; i < 3; i++){
			/*
			 * variable 'i' in this case is considered loop/local scope. It exists ONLY
			 * within the for loop and cannot be referenced outside of it.
			 */
			
			System.out.println(fullInfo);
		}
	}
	
	
}
