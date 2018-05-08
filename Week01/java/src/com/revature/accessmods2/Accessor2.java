package com.revature.accessmods2;

import com.revature.accessmods1.Accessor;

public class Accessor2 extends Accessor{
	/*
	 * when you subclass anothe class, you inherit all non private methods and fields. 
	 * There fore I can access them in this class, even though I dont directly create them
	 */
	public void doStuff() {
//		System.out.println(def); 
//		System.out.println(priv); we are in a different package
		System.out.println(prot); // we are in a subclase
		System.out.println(pub);
		
		Accessor2 a2 = new Accessor2();
		
		System.out.println(a2.pub);
		System.out.println(a2.prot);
		
		Accessor a = new Accessor();
		
		System.out.println(a.pub);
//		System.out.println(a.def);
//		System.out.println(a.priv);
//		System.out.println(a.prot);




		
	}
}
