package com.revature.accessmods2;

import com.revature.accessmods1.Accessor;

public class Accessor2 extends Accessor{
	/*
	 * When you subclass another class you inherit all non-private methods and fields
	 * Therefore I can access them in this class even though I dont directly create them
	 */
	public void doStuff(){
		System.out.println(prot);//in subclass so this is valid
		System.out.println(pub);
		//System.out.println(priv);
		//System.out.println(def);//different package
		
		Accessor2 a2 = new Accessor2();
		System.out.println(a2.pub);
		System.out.println(a2.prot);
		
		Accessor a = new Accessor();
		System.out.println(a.pub);//outside of package and not subclass, only public
//		System.out.println(a.def);
//		System.out.println(a.priv);
//		System.out.println(a.prot);
		
	}//doStuff

}//class
