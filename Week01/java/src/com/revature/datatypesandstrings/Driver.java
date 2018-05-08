package com.revature.datatypesandstrings;

public class Driver {
	
	int i; 			//32 bits
	double d;		//64 bits
	float f;		//32 bits
	short s;		//16 bits
	long l;			//64 bits
	char c;			//16 bits
	byte b;			//8 bits
	boolean bool;	// No clue this is weird; arguable 1 bit, arguably 8 bits;
	String string;

	
	public static void main(String[] args) {
		/*
		 * Primitive datatypes
		 * -A ^ is a datatype that has a constand amount of memory allocated and is not
		 * 	an object
		 * Work noting, these are not objects.
		 * THEREFORE java is not 100 percent object oriented 
		 */
	Driver driver = new Driver();
	driver.demo();
		
		
		
	}
	
	public void demo() {
		
		
		System.out.println("int:" + i);			//0
		System.out.println("double:" + d);
		System.out.println("float:" + f);
		System.out.println("short:" + s);
		System.out.println("long:" + l);
		System.out.println("char:" + c);
		System.out.println("byte:" + b);
		System.out.println("bool:" + bool);
		System.out.println("string:" + string);

		/*
		 * Casting
		 * -casting is where you change the datatype of some field into another.
		 * -Typically you can caast most things into each other if they are part of the same
		 * 		inheritace heiratchy.
		 * -Primitives can cast to eachtother as well. (with exceptio of boolean)
		 * -trying to cast something into another when it isnt possible, yields a class cast
		 * exception
		 * - there are two types of casting: Implicit, and explicit
		 */
		
		//Implicit casting
		d = i;
		//Explicit
		i = (int)d;
		System.out.println(i);
		
		l = s;
		s = (short)l;
		d = f; 
		f= (float)d;
		
		//side note:
		f = 4.0f; //f denotes float
		l = 50L; //L denotes vales greater than 31 bits
		
		b = (byte)c;
		c = (char)b;
		
		/*
		 * the catch with char is that the minimum value of a char is 0.
		 * only positve numbers are used with char. This constraint makes asting a pain to
		 * do implicitly therefore it will always be explicit.
		 * 
		 */
		/* 
		 * String is an object. not a primitive datatype.
		 * The Java code for a string shows that it is  an array of characters
		 * however, string is an immutable object.
		 * -Once a string is created it can not be changed
		 *
		 */
		
		String s1= "dog";
		s1 += "s";
		System.out.println("s1: " + System.identityHashCode(s1));
		System.out.println("s1: "+ s1);

		s1 += "s";
		System.out.println("s1: " + System.identityHashCode(s1));
		String s2 = "dogs";
		System.out.println("s2: " + System.identityHashCode(s2));
		
		//string literal goes into string pool directly
		
		//   .equals wtf 
		String stuff = "things";
		stuff.concat(" and Things!");
		System.out.println(stuff);
		stuff = stuff.concat(" and Things!");
		System.out.println(stuff);

		System.out.println("=====StringBuilder and String Buffer=====");
		/*
		 * In situations where a string will go through umberous maniupulations, one can reach a
		 * point where you are dealing with huge overhead and memory consumpion siunce you are
		 * creating a new string every time. 
		 * Java offers a mutable type of string that you can work with.
		 * 
		 * string builder vs string buffer vs string
		 * - string is immutable whereas buffer and builder are not
		 * - string builder is not synchonized (thread safe) whereas buffer is synchronized
		 * --Synchronized ensures that in the case of multithreading multiple threads
		 * 		can Not access the specified resource at the same time
		 * 
		 */
		
		StringBuilder sb = new StringBuilder("Bison");
		System.out.println(System.identityHashCode(sb));
		sb.append("s");
		System.out.println(System.identityHashCode(sb));
		

			
		
		
	}

}
