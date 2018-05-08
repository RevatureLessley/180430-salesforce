package com.revature.pillars;

//INHERITANCE
public class Wheel implements CarPart {
	//ENCAPSULATION
	private int age;
	private String quality;
	
	public Wheel(String theQuality, int theAge) {
		this.age = theAge;
		this.quality = theQuality;
	}
	
	//POLYMORPHISM 
	@Override
	public String checkQuality() {
		String result = "Wheel quality " + quality;		
		return result;
		
	}

	@Override
	public String checkAge() {
		// TODO Auto-generated method stub
		String result = "Wheel age" +age;
		return result;
	}

}
