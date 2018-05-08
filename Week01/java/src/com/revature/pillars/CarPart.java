package com.revature.pillars;

/*
 * Interfaces should be used to enforce acrionts of classes.
 * this is by no means a "law", you can use interfaces to
 * simply enforce specific methods to be implmented.
 * But typically they should enforce an action.
 * 
 * All fields in an interface is, by default, public, static, final.
 * For methods, they can only be public, abstract, (and static and default)
 * even if you don't abide by the rules it will be implicitly converted
 */

public interface CarPart {
	public String checkQuality(String quality);
	public String checkAge(int age);
	
}

