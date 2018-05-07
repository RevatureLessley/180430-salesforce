package com.revature.accessmods1;

public class Driver {

	Accessor a = new Accessor();
	public static void main(String[] args) {
		
		
		

	}
	public void writeStuff(){
		//System.out.println(a.priv); //Cannot access private because it is class specific
		System.out.println(a.def);
		System.out.println(a.prot);
		System.out.println(a.pub);
	}

}
