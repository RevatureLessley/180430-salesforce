package com.revature.wrapperclasses;

public class Driver {

	public static void main(String[] args) {

		Integer i = new Integer(10);
		System.out.println(i.MAX_VALUE);

		Double d = new Double(1).MAX_VALUE;
		d-=10;
		System.out.println(d);
		d/=3;
		d*=3;
		System.out.println(d);

		/*
		 * The implicit casting of a primitive into its wrapper class is called
		 * autoboxing. And vice verse, the unwrapping of a class into its primitive, implicitly
		 * is called auto-unboxing
		 */

		System.out.println("=====WRAPPER CLASSES=====");
		Integer i2 = 10;  
		Double d2 = 10.0;
		Short s = 10;
		Long l = 10L;
		Byte b = 10;
		Character c = 10;
		Boolean bool = false;
		Float f = 10.0f;

		autobox(10);
		autoUnbox(new Integer(10));

	}
	public static void autobox(Integer i){
		System.out.println(i);
	}
	public static void autoUnbox(int i){
		System.out.println(i);
	}


}
