package com.revature.pillars;

public class Muffler implements CarPart {
	private int age;
	private String quality;

	public Muffler(String quality, int age){
		this.age = age;
		this.quality = quality;
	}
	
	//POLYMORPHISM
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
