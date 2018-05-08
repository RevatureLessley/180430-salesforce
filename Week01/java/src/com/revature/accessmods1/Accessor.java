package com.revature.accessmods1;

public class Accessor {
/*
 * There are two kinds of 'modifiers' in java. 
 * We have access modifiers and 'non-access modifiers'
 * Access Modiiers;:
 * private
 * 	- restricts access to a class entity from anywhere that is not the class itself.
 * 	- ID you cannot access private methods or fields from outside of this class.
 * default
 * 	- default is simply a name developers call this access modifier. In reality it is 
 * 		simply the access a cariable/method has where you dont add any modifiers at all.
 * 	- access to default is restricted to anything that is whithin the same package as the class
 * Protected
 * 	- protectd offers access to any class within the same package or any class that is 
 * 		a subclass of this class.
 * Public
 * 	- Accessible from anywhere. 
 * 
 * For non-access modifiers we have:
 * - static
 * 		- sets resource to be availabe without instance of class
 * 		- limits only to one instance of resource shared among all instances of class
 * - final 
 * 	- fimal makes a cariable constant and unchangeable
 * 	- final prevents methods from being overridden
 * 	- final prevents classes from getting subclassed
 * - abstract
 * 	- foregoes body implementation of a method until inherited
 * - native
 * 	- no body for the method, implementation is done outside of java. 
 * -strictfp
 * 	- enforces a rules of IEEE standards on floating points
 * -volatile
 * 	- a volatile variable must be accessed via main memort, not individual thread's
 * 		stacks. It essentially marks the variable as an important resource that will be 
 * 		hit by multible pthreads.
 *	-Synchronized
 *		- limits amount of threads that can access the resouce to one at a time.
 *	- transient
 *		- prevents a specific field from being serialized. 
 * 
 */
	
	private String priv = "Private";
	String def = "Default";
	protected String prot = "Protected";
	public String pub = "Public";
	
	public void writeStuff() {
		System.out.println(priv);
		System.out.println(def);
		System.out.println(prot);
		System.out.println(pub);
	}
}
