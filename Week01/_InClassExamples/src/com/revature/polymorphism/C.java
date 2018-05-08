package com.revature.polymorphism;

public class C extends B{
	public String var = "CLASS C";
	/*
	 * @Something represents an annotation in java.
	 * Annotations simply serve to provide metadata and enforce rules.
	 * In this case, @Override enforces that the method in question is INDEED
	 * overriding a parent method.
	 */
	@Override
	public String methA(){
		return "METH A AS IN C";
	}
	public String methB(){
		return "METH B AS IN C";
	}
	public String methC(){
		return "METH C";
	}
	
}
