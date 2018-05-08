package com.revature.exceptions;

public class CustomException extends Exception{
	/*
	 * Override is where you take a method that you
	 * inherited form a parent and change the
	 * impplementation for your use in the child class.
	 * Inheriting from exception creates a custom checked exception.
	 * Inheriting form Runtime exception creates a custom unchecked exception. 
	 *  */
	@Override
	public String getMessage() {
		return "This is customized, oh no!";
	}
}
