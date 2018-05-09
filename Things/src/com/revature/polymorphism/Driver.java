package com.revature.polymorphism;

public class Driver {
	
	public static void main(String[] args) {
		A a = new A();
		B b = new B();
		C c = new C();
		
		System.out.println(a.methodA());
		System.out.println(b.methodA());
		System.out.println(c.methodA());
		System.out.println(a.oof);
		System.out.println(b.oof);
		System.out.println(c.oof);
		
		/*
		 * when casting objects, there's a bit of a twist to the rule with primitives.
		 * a parent can equal its child without casting.
		 * a child must cast its parent in order for a parent to equal its child
		 */
		a = c; //the child can fit right into the parent		here, a becomes a C object
		c = (C)a; //the parent cannot handle everything the child can, and must be cast to its child to fit in		thus, here, a can be cast to a C object. it's already a C object, from the line above
		
		a = new C(); // A a = new C();		<-- but not quite. a, from the two lines above, is already a C object. we're just making it into a NEW C object
		
		/*
		 * when using covariance, you need to understand reference vs assignment
		 * the syntax is:
		 * 		Class varname = new Class();
		 * 		reference	  = assignment
		 * 
		 * covariance is demonstrated by using a parent/child reference to a certain class assignment.
		 * 
		 * simple rules to remember:
		 * 		you will only have access to a reference's methods.
		 * 			you will, however, get access to the assignment's implementations of those methods
		 * 		HOWEVER, you will gain the reference's fields, not the assignment's
		 */
		
		System.out.println(a.oof);
		System.out.println(a.methodA());
		
		c = (C)b;
		
//		System.out.println(c.methodB()); //ClassCastException
		
	}

}
