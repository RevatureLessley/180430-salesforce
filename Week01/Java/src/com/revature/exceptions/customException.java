package com.revature.exceptions;

public class customException extends Exception{
	@Override
	/*
	 * Override is changing an implementation of a method inherited from a parent
	 * Inheriting from exception creates a custom checked exception
	 * Inheriting from RuntimeException creates a custom unchecked exception
	 */
	public String getMessage() {
		return "This is customized, OH NO!";
	}//getMessage
}//class
