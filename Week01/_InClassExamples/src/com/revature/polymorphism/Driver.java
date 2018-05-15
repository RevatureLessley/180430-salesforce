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
		
		//When casting objects, there is a bit of a twist to the rule with primitives.
		//A parent can equal its child without casting
		//A child must cast its parent in order for a parent to equal its child.
		a = c;
		c = (C)a;
		
		
		//Covariance demo
		a = new C();
		
		System.out.println(a.var);
		System.out.println(a.methA());
		/*
		 * When using covariance, you need to understand reference vs assignment.
		 * The syntax goes:
		 * 
		 * Class varname = new Class()
		 * reference     = assignment
		 * 
		 * Covariance is demonstrated by using a parent/child reference to a certain class
		 * assignment.
		 * 
		 * Simple rules to remember:
		 * -You will only have access to a references methods.
		 * -You will, however, get access to the assignments implementation of those methods
		 * -HOWEVER, you will gain the reference's fields. Not the assignment's.
		 */
		
		c = (C)b;
		System.out.println(c.methB());
		//ClassCastException
	}

}
