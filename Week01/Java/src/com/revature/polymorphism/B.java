package com.revature.polymorphism;

public class B extends A{
	public String var = "Class B";
	
	@Override
	public String methA(){
		return "Meth A as in B";
	}//methA
	
	public String methB(){
		return "Meth B";
	}//methB
}//class
