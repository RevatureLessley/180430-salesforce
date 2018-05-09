package com.revature.pillars;

//Inheritance
public class Engine implements CarPart{
	
	//Encapsulation
	private int age;
	private String quality;
	
	public Engine(String quality, int age) {
		this.quality = quality;
		this.age = age;
	}

	//Polymorphism
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
