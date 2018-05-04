package com.revature.accessmods1;

public class Accessor {
	/*
	 * There are 2 kinds of modifiers in 'java"
	 * We have access-modifiers and non-access-modifiers
	 * Access Modifiers
	 * 	Private
	 * 	-restrict access to a class entity from anywhere that is not the class itself
	 * 	-IE you cannot access private methods or fields from outside the class
	 * 
	 *  default
	 *  -it is simply the access a variable/method has if you don't give it one
	 *  -Access to default is restricted to anything within same package as the class
	 *  
	 *  Protected
	 *  -Protected offers access to any class within the same package or any class
	 *  	that is a subclass of this class
	 *  
	 *  Public
	 *  -accessible from anywhere
	 *  
	 *  Non-access Modifiers
	 *  
	 *  -static
	 *  	Sets resource to be available without instance of class. Limits to only 2 instance of resource
	 *  	shared among all instances
	 *  -final
	 *  	Makes a variable constant and unchangeable
	 *  	Prevents methods from being overridden
	 *  	Prevents classes from getting subclassed
	 *  -abstract
	 *  	Foregoes body implementation of a body until inherited
	 *  -native
	 *  	no body for the method, implementation done outside of Java
	 *  -strictfp
	 *  	enforces all rules of IEEE standards on floating points
	 *  -volatile
	 *  	must be accessed via main memory, not individual thread's stacks
	 *  	Essentially marks the variable as an important resource that will be hit by multiple 
	 *  		threads
	 *  -synchronized
	 *  	Limits amount of threads that can access the resource to one at a time
	 *  -transient
	 *  	prevents a specific field from being serialized
	 */
	
	private String priv = "Private";
	String def = "Default";
	protected String prot = "Protected";
	public String pub = "Public";
	
	public void writeStuff(){
		System.out.println(priv);
		System.out.println(def);
		System.out.println(prot);
		System.out.println(pub);
	}//writeStuff
	
	

}
