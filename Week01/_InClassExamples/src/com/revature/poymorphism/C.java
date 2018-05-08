package com.revature.poymorphism;
/*
 * @Something represents an annotation in java.
 * Annotations simply serve to provide metadata and enforce rules.
 * In this case, @Override enforces that the method in question is INDEED
 * overriding a parent method.
 */
public class C extends B {
	public String var = "CLASS C";
	public String methodA() {
		return "METH A AS IN C";
	}
	public String methodB() {
		return "METH B AS IN C";
	}
	public String methodC() {
		return "METH C";
	}
}
