package com.revature.exceptions;

public class CustomException extends Exception{
	
	@Override
	/*
	 * Override
	 * 		taking the parent Class's inherited method and changing its implementation for use in the child Class.
	 * Inheriting from RuntimeException will make our CustomException an unchecked exception
	 * Inheriting from Exception will make our CustomException a checked exception
	 */
	public String getMessage() {
		return "Holy heck, Batman!";
	}

}
