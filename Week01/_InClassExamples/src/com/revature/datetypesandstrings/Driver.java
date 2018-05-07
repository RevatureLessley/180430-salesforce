package com.revature.datetypesandstrings;

public class Driver {
	int i;			//32 bits
	double d;		//64 bits
	float f;		//32 bits
	short s;		//16 bits
	long l;			//64 bits
	char c;			//16 bits
	byte b;			//8 bits
	boolean bool;	//This one is weird... arguably 1 bit, arguably 8 bits.
					//There isnt exactly an agreement.
	String string;  //Object of variable size
	
	public static void main(String[] args) {
		/*
		 * Primitive Datatype
		 * -A datatype that has a constant amount of memory allocated and is NOT an object.
		 * Worth noting...
		 * These are not objects.
		 * THEREFORE: JAVA IS NOT 100% OBJECT ORIENTED!
		 */
		

		Driver driver = new Driver();
		driver.demo();
	}
	
	public void demo(){

		
		
		System.out.println("int: " + i);		//0
		System.out.println("double: " + d);		//0.0
		System.out.println("float: " + f);		//0.0
		System.out.println("short: " + s);		//0
		System.out.println("long: " + l);		//0
		System.out.println("char: " + c);		//
		System.out.println("byte: " + b);		//0
		System.out.println("bool: " + bool);	//false	
		System.out.println("string: " + string);	//null	
		
		/*
		 * Casting
		 * -Casting is where you change the datatype of some field into another.
		 * -Typically you can cast most things into eachother if they are part of the same
		 * 		inheritance hierarchy.
		 * -Primitives can cast to eachother as well. (With exception of boolean)
		 * -Trying to cast something into another when it isnt possible, yields a class cast
		 * 		Exception
		 * -There are two types of casting: Implicit, and explicit
		 */
		
		//Implicity casting
		i=52;
		d = i;
		System.out.println(d);
		/*
		 * We have changed the value of 'i' an integer, to a double in order to fit properly
		 * into the variable 'd' which is a double.
		 */
		
		//explicit casting
		i = (int)d;
		System.out.println(i);
		/*
		 * Any situation where the item we are casting is of larger size* than the container
		 * you wish to cast it to, you will have to perform explicit casting in order to allow
		 * the item to fit. This is down with (newDatatype)varName.
		 */
		
		l = s;
		s = (short)l;
		d = f;
		f = (float)d;
		
		//SIDE NOTE:
		f = 4.0f; //f denotes float
		l = 500000000000L; //L allows for values greater than 31 bits.
		
		b = (byte)c;
		c = (char)b;
		/*
		 * the catch with char is that that the minimum value of a char is 0.
		 * Only positive numbers are used with char. This constraint makes casting a pain to
		 * do implicitly, therefore, it will always be explicit.
		 */
		
		System.out.println("=====Strings=====");
		/*
		 * String is an object! Not a primitive datatype.
		 * The java code for a string shows that it is INDEED an array of characters.
		 * However, String is an immutable object.
		 * -Once a string is created, it can NOT be changed.
		 */
		
		String s1 = "dog";
		s1 += "s";
		System.out.println(s1);
		
		System.out.println("s1: " + System.identityHashCode(s1));
		s1 += "s";
		System.out.println("s added to s1");
		System.out.println("s1: " + System.identityHashCode(s1));
		System.out.println("New string s2:");
		String s2 = "dogs";
		System.out.println("s2: " + System.identityHashCode(s2));
		String s3 = "dogs";
		System.out.println("s3: " + System.identityHashCode(s3));
		System.out.println("COMPARISONS");
		String s4 = new String("dogs");
		System.out.println(s3.equals(s4)); //s4 = "dogs", s3 ="dogs";
		System.out.println(s3 == s4);
		System.out.println(s2 == s3);
		
		String stuff = "things";
		stuff.concat(" and things!");
		System.out.println(stuff);
		stuff = stuff.concat(" and things!");
		
		//Intern, places the specified object into the String pool.
		s4 = s4.intern();
		System.out.println(s3==s4);
		
		System.out.println("=====StringBuilder and StringBuffer=====");
		/*
		 * In situations wher a string will go through numerous manipulations, one can reach
		 * a point where you are dealing with huge overhead and memory consumption since you
		 * are creating a new string every time.
		 * Java offers a mutable type of string that you can work with.
		 * 
		 * StringBuilder vs StringBuffer vs String
		 * -String is immutable, whereas buffer and builder are not.
		 * -StringBuilder is not synchronized (Thread safe) whereas buffer IS synchronized.
		 * --Synchronized ensures that in the case of multithreading, multiple threads 
		 * 		can NOT access the specified resource at the same time.
		 */
		
		StringBuilder sb = new StringBuilder("Bison");
		System.out.println(System.identityHashCode(sb));
		sb.append("s");
		System.out.println(System.identityHashCode(sb));

		System.out.println("=====PERFORMANCE TEST=====");
		
		int iterations = 100000000;
		System.out.println("Looping " + iterations + " time(s)");
		long curTime;
		String str = "";
		
/*		//String
		curTime = System.currentTimeMillis();
		for(int i = 0; i < iterations; i++){
			str += "s";
		}
		System.out.println("STRING: " + (System.currentTimeMillis() - curTime));*/
		
		//StringBuilder
		sb = new StringBuilder("");
		curTime = System.currentTimeMillis();
		for(int i = 0; i < iterations; i++){
			sb.append('s');
			
			//"a" = STRING
			//'a' = CHARACTER
		}
		System.out.println("STRINGBUILDER: " + (System.currentTimeMillis() - curTime));
		
		//StringBuffer
		StringBuffer sbuf = new StringBuffer("");
		curTime = System.currentTimeMillis();
		for(int i = 0; i < iterations; i++){
			sbuf.append('s');
		}
		System.out.println("STRINGBUFFER: " + (System.currentTimeMillis() - curTime));

	}

}
