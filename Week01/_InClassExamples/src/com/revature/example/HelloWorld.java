package com.revature.example;
/*
 * The first line of a java application will always be its package location.
 * Packages are simply a folder hierarchy used to organize all of you classes.
 * Do note: If you don't use any packages (IE The default package) then the first line WILL
 * be omitted.
 */

public class HelloWorld {
	/*
	 * The next piece of a class will be the class declaration itself. If the class name matches
	 * the filename (Which it should always, then it MUST be public).
	 */

	public static void main(String[] args) {
		System.out.println("Hello world!");
		System.out.println("Good to go");
		System.out.println("Team SYSO");
	}
	/*
	 * This is called the main method in java. It is the method an application looks for
	 * in order to begin executing it. If there is main method, then your application can
	 * NOT run.
	 * Note, the casing and modifiers (public static and void) must match the casing perfectly.
	 * 
	 * Constraints:
	 * -public (Method must be accesible from ANY location of the application)
	 * -static (Method must be able to execute even though we don't instantiate an instance
	 * 		of the class.
	 * -void (The method must not return ANYTHING)
	 * -lower case methodname (CamelCase) as per convention (And reuqirement in this case)
	 * -Take a single parameter of an array of strings. You CAN however, name the argument
	 * 		whatever you want.
	 */
}
