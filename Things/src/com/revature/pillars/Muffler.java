package com.revature.pillars;

//Inheritance
public class Muffler implements CarPart{
	
	//Encapsulation
	private int age;
	private String quality;
	
	public Muffler(String quality, int age) {
		this.quality = quality;
		this.age = age;
	}

	//Polymorphism
	@Override
	public String checkQuality() {
		String result = "Muffler quality: " + quality;
		return result;
		
	}

	@Override
	public String checkAge() {
		String result = "Muffler age: " + age;
		return result;
	}

}
