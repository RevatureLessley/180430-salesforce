package com.revature.accessmods1;

public class Accessor {
	/*
	 * There are two kinds of 'modifiers' in java.
	 * We have 'access modifiers' and 'non-access modifiers'.
	 * Access Modifiers:
	 * private
	 * 	-Restricts access to a class entity form anywhere that is not the class itself.
	 * 	-IE. you cannot access private methods or fields from outside of this class.
	 * default
	 * 	-default is simply a name developers call this access modifier. In reality it is
	 * 		simply the access a variable/method has when you don't add any modifiers at all.
	 * 	-Access to default is restricted to anything that is withing the same package as the class
	 * Protected
	 * 	-Protected offers access to any class within the same package or any class that is 
	 * 		a subclass of this class.
	 * Public
	 * 	-Accessible from anywhere.
	 * 
	 * For non-access modifiers we have:
	 * -static
	 * 	-Sets resource to be available without instance of class
	 * 	-limits to only one instance of resource shared among all other instances of class
	 * -final
	 * 	-Final makes a variable constant and unchangeable.
	 * 	-Final prevents methods from being overridden
	 * 	-Final prevents classes from getting subclassed
	 * -abstract
	 * 	-Foregoes body implementation of a method until inherited
	 * -native
	 * 	-No body for the method, implementation is done outside of java.
	 * -strictfp
	 * 	-Enforces a rules of IEEE standards on floating points.
	 * -volatile
	 * 	-A volatile variable must be accessed via main memory, not individual thread's 
	 * 		stacks. It essentially marks the variable as an important resource that will be
	 * 		hit by multiple threads.
	 * -synchronized
	 * 	-Limits amount of threads that can access the resource to one at a time.
	 * -transient
	 * 	-Prevents a specific field from being serialized.
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
	}
}
