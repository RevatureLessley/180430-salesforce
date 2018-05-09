package com.revature.pillars;

/*
 * Interface should be used to enforce actions of classes
 * this is, by no means, a low. you can use interfaces simply to enforce specific methods 
 * that need to be implemented.
 * typically, they should enforce an action
 * 
 * if you want to implement a method in an interface, include "default" or "static"
 * 
 * all fields in an interface are, by default, public static final.
 * even if you don't explicitly abide by these rules, Java will implicitly convert your variables.
 * methods can only be: public, abstract, static, or default.
 * by normal means, you cannot implement a method in an interface. this is the job of the Child class
 */
public interface CarPart {
	public String checkQuality();
	public String checkAge();
}
