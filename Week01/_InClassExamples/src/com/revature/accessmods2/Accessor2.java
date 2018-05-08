package com.revature.accessmods2;

import com.revature.accessmods1.Accessor;
/*
 * When you subclass another class, you inherit all non private methods and fields.
 * Therefore I can access them in this class, even though I dont directly create them.
 */
public class Accessor2 extends Accessor{

	public void dostuff() {
		//	System.out.println(priv);
		//	System.out.println(def); //We are in a different package!
		System.out.println(prot);  //But we are a subclass
		System.out.println(pub);

		Accessor2 a2 = new Accessor2();
		System.out.println(a2.pub);
		System.out.println(a2.prot);

		Accessor a = new Accessor();

		System.out.println(a.pub); //outside of package and not subclass, ONLY public
		//	System.out.println(a.priv);
		//	System.out.println(a.prot);
		//	System.out.println(a.def);

	}
}
