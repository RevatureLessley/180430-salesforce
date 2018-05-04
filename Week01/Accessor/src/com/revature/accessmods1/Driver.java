package com.revature.accessmods1;

public class Driver {

	Accessor a = new Accessor();
	
	public static void main(String[] args) {
		
		
	}
	
	public void writeStuff() {
		//System.out.println(a.priv); //cannot do this. same package, but different class. priv is class-specific
		System.out.println(a.def);
		System.out.println(a.prot); //can do this b/c protected variables can be accessed w/in the same package
		System.out.println(a.pub);
	}
	
}
