package com.revature.pillars;
//INHERITANCE
public class Wheel implements CarPart {
	
	//ENCAPSULATION
	private int age;
	private String quality;
	
	public Wheel(String quality, int age){
		this.age = age;
		this.quality = quality;
	}
	
	//POLYMORPHISM
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
