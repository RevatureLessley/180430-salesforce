package com.revature.example;

import com.sun.source.tree.Scope;

public class Person {
	/*
	 * Instance scope
	 * Any cariable within the class definition but ouyside of any
	 * methods of the class, is considered instance scope. (Global Scope)
	 */
	
	//Instance Variables
	private String name;
	private int age;
	static int personCount = 0;
	
	//using the static non-access modifier we place out variable, personCount 
	//within 'static' scope.
	/*
	 * What this means is we can access this variable directly without having to instantiate
	 * the class as an object. More importantly anything static can only ever have one instance
	 * created. And that instance is shared among all other instantiated instances 
	 * of the class.
	 */
	
	/*
	 * A method that matches the className directly is called the constructor.
	 * The constructer is the first method called when you create a new object bia the 'new'
	 * keyword.
	 */
	public Person(String name, int age) {
		/*
		 * What is a class:
		 * A class is a blueprint for objects.
		 * 
		 * Object
		 * An instantiated class. That can maintain 
		 * state and be interacted with.
		 */
		this.name = name;
		this.age = age;
		personCount++;
		
	}
	//access modifier + return type + method ame +()arguments + {implementation}
	public void printPersonInfoThreeTimes() {
//		Method Scope
//		Any variable that is Created within a method is considered method Scope
//		as per the rules of scope, any variables created within the method may not
//		be accessed outisde of this method.
		String fullInfo = name + ", who is " + age + " years old...";
		
		for(int i = 0; i < 3; i++) {
			/*
			 * variable i in this case is considered loop/local scope. It exists
			 * only in the for loop and cannot be referenced outside of it. 
			 */
			
			System.out.println(fullInfo);
		}
	}
	
}
