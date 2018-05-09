package com.revature.pillars;
//INHERITANCE
public class Transmission implements CarPart{
	
	//ENCAPSULATION
	private int age;
	private String quality;
	
	public Transmission(String quality, int age){
		this.quality = quality;
		this.age = age;
	}

	//POLYMORPHISM
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
