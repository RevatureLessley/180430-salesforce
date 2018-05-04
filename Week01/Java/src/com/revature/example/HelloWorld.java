package com.revature.example;
/*
 * The first line of a java application will always be its package location.
 * Packages are simply a folder hierarchy used to organize classes
 * No package used, it's in default package, first line omitted
 */

//Classes follow Pascal-case
public class HelloWorld {
/*
 * If class name matches file name, then it must be public. 
 * 
 */
	public static void main(String[] args) {
		System.out.println("Hello World");
		System.out.println("Good to Go");
		System.out.println("Team SYSO");

	}//main method
/*
 * Constraints:
 * -public (method must be accessible from any location of the application
 * -static (method must be able to execute even though we don't instantiate an instance of the class
 * -void (no return)
 * -lower case method name as per convention
 * -takes a single param of an array of strings
 */
}
