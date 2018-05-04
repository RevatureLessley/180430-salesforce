package com.revature.accessmods2;
import com.revature.accessmods1.Accessor;

public class Accessor2 extends Accessor{
	
	Accessor a = new Accessor();
	
	public void doStuff() {
		
//		System.out.println(a.priv); //priv is a private variable, and cannot be accessed outside of Accessor.
//		System.out.println(a.prot); //prot is a protected variable, and cannot be accessed outside of its package (com.revature.accessmods1).
//		System.out.println(a.def); //def is a default variable, which cannot be accessed outside of its package.
		System.out.println(a.pub); //pub is accessible, since it's a public variable.
	}
	
	

}
