package com.revature.polymorphism;

public class C extends B{
	public String var = "Class C";
	@Override
	public String methA(){
		return "Meth A as in C";
	}//methA
	
	@Override
	public String methB(){
		return "Meth B as in C";
	}//methB
	
	public String methC(){
		return "Meth C";
	}//methC
}//class
