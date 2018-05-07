package com.revature.pillars;

/*
 * Interfaces should be used to enforce actions of classes.
 * This is by no means a law, you can use interfaces simply to enforce specific
 * methods to be implemented.
 * But typically, they should enforce an action.
 * By normal means, you can NOT implement a mehtod in
 * an interface, that is for the child class to decide.
 * 
 * All fields in an interface is, by default, public,static, final.
 * For methods, they can only public, abstract, (and static and default)
 * Even if you dont abide by these rules, it will implicity convert it.
 */
public interface CarPart {
	public String checkQuality();
	public String checkAge();
}
