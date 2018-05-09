package com.revature.pillars;

//Inheritance
public class Transmission implements CarPart{
	
	//Encapsulation
	private int age;
	private String quality;
	
	public Transmission(String quality, int age) {
		this.quality = quality;
		this.age = age;
	}

	//Polymorphism
	@Override
	public String checkQuality() {
		String result = "Transmission quality: " + quality;
		return result;
		
	}

	@Override
	public String checkAge() {
		String result = "Transmission age: " + age;
		return result;
	}

}
