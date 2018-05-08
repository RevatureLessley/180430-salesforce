package com.revature.pillars;


public class Engine implements CarPart {
	private int age;
	private String quality;
	
	@Override
	public String checkQuality(String quality) {
		String result = "This ol' engine is sporting some " + quality;
		return quality;
	}
	
	@Override 
	public String checkAge(int age) {
		String result = "The engine is " + age + " years old!";
		return result;
	}

}
