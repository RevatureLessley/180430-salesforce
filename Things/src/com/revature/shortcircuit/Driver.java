package com.revature.shortcircuit;

/*
 * when using comparators, we can use multiple comparators in a single conditional expression with the use of AND and OR
 */
public class Driver {

	public static void main(String[] args) {
		
		System.out.println(4<5 & 5>4); //AND operator requires both sides to be true to return true
		System.out.println(4<5 & 3>4); //false
		System.out.println(4<5 | 5>4); //OR operator requires only one side to be true to return true
		System.out.println(4<5 | 3>4); //true
		
		System.out.println("-----DEMO1-----");
		System.out.println(True() & False()); //returning true, returning false, false
		System.out.println("-----DEMO2-----");
		System.out.println(True() & False() & True() & False()); //same, but prints them twice
		System.out.println("-----DEMO3-----");
		System.out.println(True() | False());
		System.out.println("-----DEMO4-----");
		System.out.println(True() | False() | True() | False());
		
		/*
		 * short circuit operators are great because they save an app from wasting processing time
		 * on reading redundant outcomes in conditional expressions
		 */
		
		System.out.println("-----SS DEMO1-----");
		System.out.println(True() && False()); //returning true, returning false, false
		System.out.println("-----SS DEMO2-----");
		System.out.println(True() && False() && True() && False()); //same. this time, unlike DEMO2, it just stops when it hits the first false.
		System.out.println("-----SS DEMO3-----");
		System.out.println(True() || False());	//we see true immediately and stop.
		System.out.println("-----SS DEMO4-----");
		System.out.println(True() || False() || True() || False());	//same here.
		
	}
	
	public static boolean True() {
		System.out.println("Returning True");
		return true;
	}
	
	public static boolean False() {
		System.out.println("Returning False");
		return false;
	}
}
