package com.revature.datatypesandStrings;

public class Driver {

	//the 8 primitive datatypes
	int i;			//32 bits (2^32)
	double d;		//64 bits
	float f;		//32 bits
	short s;		//16 bits
	long l;			//64 bits
	char c;			//16 bits
	byte b;			//8 bits
	boolean bool;	//either 8 bits or 1 bit...

	//and strings!
	String string;

	public static void main(String[] args) {
		/*
		 * Primitive Datatype
		 * 		a datatype that has a constant amount of memory allocated and is NOT an object
		 * 		NOTE: these ARE NOT OBJECTS. therefore, Java is NOT 100% OBJECT-ORIENTED
		 * 			oof
		 * 
		 */

		Driver dr = new Driver();
		dr.demo();

	}

	public void demo() {
		System.out.println("int: "+i);			//0
		System.out.println("double: "+d);		//0.0
		System.out.println("float: "+f);		//0.0
		System.out.println("short: "+s);		//0
		System.out.println("long: "+l);			//0
		System.out.println("char: "+c);			//
		System.out.println("byte: "+b);			//0
		System.out.println("boolean: "+bool);	//false
		System.out.println("string: "+string);	//null

		/*
		 * Casting
		 * 		changing the datatype of one field into another
		 * 		you can cast most things into most other things
		 * 			they must be part of the same inheritance hierarchy
		 * 		primitives can be cast to one another as well, except for boolean
		 * 		trying to cast something to something else when it's not possible will yield a Class Cast Exception
		 * 		two types of casting: 
		 * 			Implicit
		 * 			Explicit
		 */

		/*
		 * Implicit Casting
		 * 		the value of 'i', an integer, is being changed to a double to properly fit into the variable 'd', a double
		 */
		i = 52;
		d = i;
		System.out.println(d);

		/*
		 * Explicit Casting
		 * 		in any situation where the value we are casting is of larger size* than the container
		 * 		to which we want to cast, we have to use explicit casting to allow the value to fit.
		 * 		this is performed by typing (newDataType)varName
		 */
		i = (int)d;	//we would get an error without explicit casting here because doubles are 64 bits, which won't fit in the 32-bit integer
		System.out.println(i);

		l = s; //implicit
		s = (short)l; //explicit

		d = f; //implicit
		f = (float)d; //explicit

		//NOTE:
		f = 4.0f; //must add 'f' to the end of the number, if it contains a decimal, to specifically denote 'float'
		l = 50000000000L; //'L' allows for values greater than 31 bits

		/*
		 * THE CATCH:
		 * 		minimum value of char is 0.
		 * 		only positive numbers are used with char. this constraint makes implicit casting a pain
		 * 		therefore, it will always be explicit
		 */
		b = (byte)c; //explicit
		c = (char)b; //also explicit?

		//		b = (byte)bool; //this doesn't work. period.

		System.out.println("-----STRINGS-----");
		/*
		 * Strings are objects, not primitive data types
		 * the Java code shows that a String is INDEED an array of characters.
		 * However, String is an immutable object.
		 * 		this means that a String cannot be changed once it's created
		 * 
		 */

		String s1 = "dog";
		s1 += "s";
		System.out.println(s1);

		System.out.println("s1: "+System.identityHashCode(s1)); //finds the memory address of s1
		s1+="s";
		System.out.println("s added to s1");
		System.out.println("s1: "+System.identityHashCode(s1)); //finds it again, now that we've added "s" to s1. spoiler: it's in a different address
		System.out.println("New string s2:");
		String s2 = "dogs";
		System.out.println("s2: " + System.identityHashCode(s2)); //note: there is a low chance that two poiners will share the exact same hash code. for this example, we're taking that gamble
		String s3 = "dogs";
		System.out.println("s3: " + System.identityHashCode(s3));

		System.out.println("COMPARISONS");
		String s4 = new String("dogs");
		System.out.println(s3.equals(s4)); //s3 = "dogs", s4 = "dogs". values are the same. true.
		System.out.println(s3 == s4); //false. s3 is in the String pool, and s4 is an object in the heap
		System.out.println(s2 == s3); //true. s2 and s3 both point to the same reference in the String Pool.

		String stuff = "things";
		stuff.concat(" and things!"); //this, in theory, adds another string onto stuff
		System.out.println(stuff); //prints "things". Strings are immutable!

		//for all method calls on Strings, you MUST reassign the variable.
		stuff = stuff.concat(" and things!");

		//intern() places the specified object into the String Pool
		s4 = s4.intern();
		System.out.println(s3 == s4); //true, whereas it was false before

		/*
		 * in situations where a String will go through numerous manipulations, one can reach a point
		 * where one is dealing with huge overhead and memory sonsumption since one is creating
		 * a new string for each manipulation.
		 * Java offers a mutable type of String that one may work with.
		 * 
		 * StringBuilder vs. StringBuffer vs. String
		 * 		String is immutable, whereas StringBuilder and StringBuffer are not.
		 * 		StringBuilder is not synchronized (thread safe), whereas StringBuffer IS synchronized.
		 * 			synchronized ensures that, in the case of multithreading, multiple threads CANNOT access
		 * 				the specified resource at the same time.
		 * 			ex. cars going through an intersection, 4-way stop. one 
		 */
		System.out.println("-----StringBuilder and StringBuffer-----");

		StringBuilder sb = new StringBuilder("Bison");
		System.out.println(System.identityHashCode(sb));
		sb.append("s"); //this would change the reference pointer if we were using String.
		System.out.println(System.identityHashCode(sb)); //using StringBuilder, the hashes are still the same! it's the same object!

		System.out.println("-----PERFORMANCE TEST-----");
		/*
		 * small differences in performance appear at 10,000 iterations (on this machine, at least)
		 * significant differences appear at 100,000
		 * at 1,000,000, it takes...a while
		 */

		int iterations = 100000;
		System.out.println("Looping " + iterations + " time(s)");
		long curTime; //current time
		String str = "";

		//String
		curTime = System.currentTimeMillis();
		for(int i = 0;i < iterations;i++) {
			str += "s";
		}
		System.out.println("STRING: " + (System.currentTimeMillis() - curTime));

		//StringBuilder
		sb = new StringBuilder("");
		curTime = System.currentTimeMillis();
		for(int i = 0;i < iterations;i++) {
			sb.append('s');
		}
		System.out.println("STRINGBUILDER: " + (System.currentTimeMillis() - curTime));

		//StringBuffer
		StringBuffer sbuff = new StringBuffer("");
		curTime = System.currentTimeMillis();
		for(int i = 0;i < iterations;i++) {
			sbuff.append('s');
		}
		System.out.println("STRINGBUFFER: " + (System.currentTimeMillis() - curTime));
		
		/*
		 * MORAL OF THE STORY:
		 * Don't use String. it's slow. it sucks.
		 * Don't use StringBuffer unless you have to.
		 * Use StringBuilder. it's fast.
		 */
		
	}

}
