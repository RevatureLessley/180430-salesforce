package com.revature.shortcircuit;

public class Driver {

	public static void main(String[] args) {
		/*
		 * When using comparators, we can use multiple comparators in single 
		 * conditional expression with the use of AND n' OR.
		 */
		
		System.out.println((4<5 & 5>4)); //AND operator requires both
		System.out.println((4<5 & 3>4)); //sides to be true, to return true
		System.out.println((4<5 | 5>4)); //OR operator requires only ONE side to be true, 
		System.out.println((4<5 | 3>4)); //to return true
		
		System.out.println("======DEMO1======");
		System.out.println(True() & False());
		System.out.println("======DEMO2======");
		System.out.println(True() & False() & True() & False());
		System.out.println("======DEMO3======");
		System.out.println(True() | False());
		System.out.println("======DEMO4======");
		System.out.println(True() | False() | True() | False());
		
		/*
		 * Short circuit operators are fantastic because they save an app from wasting 
		 * precious processing time on reading redundant outcomes in conditional expressions.
		 */
		
		System.out.println("======SS DEMO1======");
		System.out.println(True() && False());
		System.out.println("======SS DEMO2======");
		System.out.println(True() && False() && True() && False() || True());
		System.out.println("======SS DEMO3======");
		System.out.println(True() || False());
		System.out.println("======SS DEMO4======");
		System.out.println(True() || False() || True() || False());
		
	}
	
	public static boolean True(){
		System.out.println("Returning true");
		return true;
	}
	public static boolean False(){
		System.out.println("Returning false");
		return false;
	}
	
	

}
