package com.revature.example;
/*
 * The first line of a java application will always be its package location.
 * Packages are simply a folder herarchy used to organize all of you classes.
 * Do note: If you don't use any packages (IE The default package) then the first line Will be omitted.
 */
public class HelloWorld {
/*
 * The next piece of a class will be the class declaration itself. If the class name matches
 * the filename (Which it should always, then it MUST be public)
 */
	//Classes should follow PascalCase
	public static void main(String[] args) {
		System.out.println("Hello World");
		System.out.println("Good to go");
		System.out.println("go");
	}
	/*
	 * This is called the main method in java. It is the method an applicationloks for
	 * in order to begin executing it. If there is main method, then your application can
	 * Not run.
	 * Note, the casing and modifiers (public static and void) must match the casing perfectly.
	 * CONSTRAINTS:
	 * -public (method must be accessable from any location of the application)
	 * -static (method must be able to execute even though we don't instatiate an
	 *  instance of the class.
	 * -void (the method must not return anything)
	 * - lowe case methodname(camelcase) as per convention (and requirement in this case)
	 * -ltake a single parameter of an array of strings. you can however name the 
	 * argument whatever you want
	 */
}
