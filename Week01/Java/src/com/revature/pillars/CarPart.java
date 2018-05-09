package com.revature.pillars;

/*
 * Interfaces should be used to enforce actions of classes.
 * This is by no means a law, you can use interfaces to simply to enforce specific methods
 * to be implemented
 * But typically they should enforce an action
 * 
 * All fields in an interface are by default public, static, final
 * For methods they can only be public, abstract(a static and default)
 * These are enforced implicitly 
 * 
 * By normal means you cannot implement a method, for the child to decide
 */
public interface CarPart {
	public String checkQuality();
	public String checkAge();
}
