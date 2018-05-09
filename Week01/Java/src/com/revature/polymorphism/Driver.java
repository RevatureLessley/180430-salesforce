package com.revature.polymorphism;

public class Driver {

	public static void main(String[] args) {
		A a = new A();
		B b = new B();
		C c = new C();
		
		System.out.println(a.methA());
		System.out.println(b.methA());
		System.out.println(c.methA());
		
		System.out.println(a.var);
		System.out.println(b.var);
		System.out.println(c.var);
		
		//When casting objects there is a bit of a twist to the rule that primitives follow
		//A parent can equal its child without casting
		//A child must be casted to equal its parent
		a = c;
		c = (C)a;
		
		
		//Co-variance demo
		a = new C();
		
		/*
		 * When using co-variance, you need to understand reference vs assignment
		 * The syntax is:
		 * 
		 * Class varname = new Class();
		 * reference = assignment;
		 * 
		 * Co-variance is demonstrated by using a parent/child reference to a certain class assignment
		 * 
		 * Simple rules to remember
		 * -You will only have access to a references method
		 * -You will however get access to the assignments implementation of those methods
		 * -HOWEVER you will gain the references fields not the assignments
		 * 
		 */
		
//		c = (C)b;
//		System.out.println(c.methB());
		//ClassCastException

	}//main	

}//class
