package com.revature.pillars;

//Inheritance
public class Wheel implements CarPart{
	
	//Encapsulation
	private int age;
	private String quality;
	
	public Wheel(String quality, int age) {
		this.quality = quality;
		this.age = age;
	}

	//Polymorphism
	@Override
	public String checkQuality() {
		String result = "Wheel quality: " + quality;
		return result;
		
	}

	@Override
	public String checkAge() {
		String result = "Wheel age: " + age;
		return result;
	}

}
