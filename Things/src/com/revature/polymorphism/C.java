package com.revature.polymorphism;

public class C extends B{
	/*
	 * @something represents an annotation in Java.
	 * annotations simply serve to provide metadata and enforce rules.
	 * in this case, @Override enforces that the method in question i INDEED overriding a parent method
	 */
	
	public String oof = "CLASS C";
	
	@Override
	public String methodA() {
		return "METHOD A AS IN C";
	}
	
	public String methodB() {
		return "METHOD B AS IN C";
	}
	
	public String methodC() {
		return "METHOD C";
	}

}
