package com.revature.accessmods1;

public class Accessor {
	/*
	 * there are two kinds of 'modifiers' in java:
	 * 		'access modifiers' and 'non-access modifiers'
	 * Access modifiers:
	 * 		private
	 * 			restricts access to a class entity from anywhere that is not the class itself
	 * 			i.e. you cannot access private methods/fields from outside of this class
	 * 		default
	 * 			simply a name developers call this access modifier. in reality, it is
	 * 			just the access a variable/method has when you don't add any modifiers.
	 * 			access to default is restricted to anything that is within the same package as the class
	 * 		protected
	 * 			offers access to any class within the same package or any class that is
	 *				a subclass of this class
	 *		public
	 *			accessible from anywhere
	 *
	 * Non-access modifiers:
	 * 		static
	 * 			sets resource to be available without an instance of the class
	 * 			limits to only one instance of resource shared among all instances of class
	 * 		final
	 * 			makes a variable CONSTANT and unchangeable
	 * 			prevents methods from being overridden
	 * 			prevents Classes from being subclassed
	 * 		abstract
	 * 			foregoes body implementation of a method until inherited
	 * 		native
	 * 			no body for the method - implementation is done outside of Java
	 * 		strictfp
	 * 			enforces all rules of IEEE standards on floating points
	 * 		volatile
	 * 			volatile variables must be accessed by main memory, not individual threads' stacks
	 * 			essentially marks the variable as an important resource that will be hit by
	 * 				multiple threads
	 * 		synchronized
	 * 			limits number of threads that can access the resource to one at a time
	 * 		transient
	 * 			prevents a specific field from being serialized
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
