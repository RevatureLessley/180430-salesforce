package com.revature.pillars;
//INHERITANCE
public class Engine implements CarPart {
	
	//ENCAPSULATION
	private int age;
	private String quality;
	
	public Engine(String quality, int age){
		this.age = age;
		this.quality = quality;
	}
	
	//POLYMORPHISM
	@Override
	public String checkQuality() {
		String result = "Engine quality: " + quality;
		return result;
	}

	@Override
	public String checkAge() {
		String result = "Engine age: " + age;
		return result;
	}
	
}
