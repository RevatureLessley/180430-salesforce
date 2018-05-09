package com.revature.wrapperclasses;

/*
 * a wrapper class is an Object representation of a primitive datatype
 */
public class Driver {

	public static void main(String[] args) {
		
		Integer i = new Integer(10); //by using the Integer wrapper class, we gain access to a whole lot of methods!
		System.out.println(i.MAX_VALUE);
		
		Double d = new Double(1).MAX_VALUE;
		System.out.println(d);
		d/=3;
		d*=3;
		System.out.println(d); //jumps to infinity. accuracy with such large numbers is not maintained
		
		System.out.println("-----WRAPPER CLASSES-----");
		
		/*
		 * the "implicit casting" of a primitive into its wrapper class is called
		 * autoboxing.
		 * the "implicit unwrapping" of a class into its primitive is called
		 * auto-unboxing.
		 */
		Integer i2 = 10;
		Double d2 = 10.0;
		Short s = 10;	//goes from int to short to Short wrapper class.
		Long l = 10L;
		Byte b = 10;	//int to byte to Byte
		Character c = 10;	//int to char to Char
		Boolean bool = false;
		Float f = 10.0f;
		
		autobox(10);	//this method takes an Integer, but it'll take int as well
		autoUnbox(new Integer(10));	//this method takes an int, but it'll take an Integer as well
		
	}
	
	public static void autobox(Integer i) {
		System.out.println(i);
	}
	
	public static void autoUnbox(int i) {
		System.out.println(i);
	}
}
