package com.revature.exceptions;

public class CustomException extends Exception{
	@Override
	/*
	 * Override is where you take a method that you
	 * inherited form a parent and change the 
	 * implementation for your use in the child class.
	 * Inheriting from Exception creates a custom checked exception. 
	 * Inheriting form RuntimeException creates a custom unchecked exception.
	 */
	public String getMessage() {
		// TODO Auto-generated method stub
		return "This is customized, oh no!";
	}
}
