package com.revature.exceptions;

public class CustomException extends Exception{
	@Override
	/*
	 *Override is thwere you take a method that you inherited from a parent and changed the 
	 *implementation for you use in child class.
	 *
	 *inheriting from eception creates a custome checkd eception
	 *inheriting rom runtime exception creates a custom uncheck exception
	 */
	public String getMessage() {
		return "this is customized, oh no!";
	}

}
