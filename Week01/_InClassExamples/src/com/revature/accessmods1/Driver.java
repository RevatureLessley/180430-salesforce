package com.revature.accessmods1;

public class Driver {
	Accessor a = new Accessor();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Driver dr = new Driver();
	}
	public void writenSuff() {
		//System.out.println(a.priv);
		System.out.println(a.prot);
		System.out.println(a.pub);
		System.out.println(a.def);

	}
}
