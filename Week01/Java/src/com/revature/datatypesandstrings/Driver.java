package com.revature.datatypesandstrings;

public class Driver {
	int i;			//32bits
	double d;		//64 bits
	float f;		//32 bits	
	short s;    	//16 bits
	long l;			//64 bits
	char c;			//16 bits
	byte b;			//8 bits
	boolean bool;	//maybe 1 bit, maybe 8 bits
	String string;
	
	public static void main(String[] args) {
		/*
		 * Primitive datatype
		 * - a data type that has a constant amount of memory allocated and
		 * 	is not an object
		 * These are not objects
		 * Therfore java is not 100% object oriented
		 */
		Driver driver = new Driver();
		driver.demo();
			
	}//main
	
	public void demo(){
		
		
		System.out.println("int: " + i);		//0
		System.out.println("double: " + d);		//0.0
		System.out.println("float: " + f);		//0.0
		System.out.println("short: " + s);		//0
		System.out.println("long: " + l);		//0
		System.out.println("char: " + c);		//
		System.out.println("byte: " + b);		//0
		System.out.println("bool: " + bool);	//false
		System.out.println("string: " + string);//null
		
		/*
		 * Casting is where you change the data type of some field into another
		 * Typically you can cast most things into each other if they are part of the same
		 * inheritance hierarchy
		 * Primitives can cast to each other as well with exception of boolean
		 * Trying to cast something into another when not possible yields class cast Exception
		 * There are two types of casting: implicit and explicit
		 */
		
		//implicit casting
		i = 52;
		d = i;
		System.out.println(d);
		
		//explicit casting
		i = (int)d;
		System.out.println(i);
		
		l=s;
		s=(short)l;
		
		//side note
		f = 4.0f;//f denotes float
		l = 50L;//L allows for values greater than 2^32 - 1
		
		b = (byte)c;
		c=(char)b;
		/*
		 * The catch with char is that the min value of a char is zero, only positve numbers are used with char
		 * This constraint makes casting difficult to do implicity, therefore it will always be explicit
		 */
		System.out.println();
		System.out.println("=====Strings=====");
		System.out.println();
		/*
		 * String is an object, not a primitive data type
		 * The java code for a string shows that is indeed an array of characters
		 * However, strings are immutable
		 * - once created cannot be changed
		 */
		
		String s1 = "dog";
		s1+="s";
		System.out.println(s1);
		
		System.out.println("s1: " + System.identityHashCode(s1));
		s1 += "s";
		System.out.println("s1: " + System.identityHashCode(s1));
		
		String s2 = "dogs";
		System.out.println("s2: " + System.identityHashCode(s2));
		String s3 = "dogs";
		System.out.println("s3: " + System.identityHashCode(s3));
		/*
		 * String pool is inside the heap, helps with memory management
		 * String literals go into string pool
		 */
		System.out.println();
		System.out.println("=====COMPARISONS=====");
		System.out.println();
		String s4 = new String("dogs");
		System.out.println(s3.equals(s4));
		System.out.println(s3==s4);
		System.out.println(s3==s2);
		
		String stuff = "things";
		stuff.concat(" and things");
		System.out.println(stuff);
		stuff = stuff.concat(" and things");
		System.out.println(stuff);
		
		//intern() places the specified object into the string pool
		s4=s4.intern();
		System.out.println(s3==s4);
		
		System.out.println("=====StringBuilder and StringBuffer=====");
		/*
		 * In situations where a string will go through numerous manipulations once can reach a point
		 * where you are dealing with huge overhead and memory consumption since you are creating a new string 
		 * every time.
		 * Java offers a mutable type of string that you can work with
		 * 
		 * STRINGBUILDER vs StringBuffer vs String
		 * - String is immutable, buffer and builder are not
		 * - String builder is not synchronized(thread safe) whereas buffer is synchronized
		 * --Synchronized ensures that in the case of multi-threading, multiple threads
		 * 	cannot access the specified resource at the same time
		 */
		
		StringBuilder sb = new StringBuilder("Bison");
		System.out.println(System.identityHashCode(sb));
		sb.append("s");
		System.out.println(System.identityHashCode(sb));
		
		System.out.println("=====Performance Test=====");
		
		int iterations = 100000;
		System.out.println("Looping " + iterations + " time(s)");
		long curTime;
		String str = "";
		
		//String
		curTime = System.currentTimeMillis();
		for(int i=0;i<iterations;i++){
			str+="s";
		}//for
		System.out.println("String: " + (System.currentTimeMillis()- curTime));
		
		//StringBuilder
		sb = new StringBuilder("");
		curTime = System.currentTimeMillis();
		for(int i=0;i<iterations;i++){
			sb.append("s");
		}//for
		System.out.println("StringBuilder: " + (System.currentTimeMillis()- curTime));
		
		//StringBuffer
		StringBuffer strb = new StringBuffer("");
		curTime = System.currentTimeMillis();
		for(int i=0;i<iterations;i++){
			strb.append("s");
		}//for
		System.out.println("StringBuilder: " + (System.currentTimeMillis()- curTime));
		
		
		
	}

}//driver
