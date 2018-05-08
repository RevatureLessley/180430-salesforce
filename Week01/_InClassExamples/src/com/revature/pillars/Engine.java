package com.revature.pillars;

//INHERITANCE
public class Engine implements CarPart {
	//ENCAPSULATION
	private int age;
	private String quality;
	
	public Engine(String theQuality, int theAge) {
		this.age = theAge;
		this.quality = theQuality;
	}
	
	//POLYMORPHISM 
	@Override
	public String checkQuality() {
		String result = "Engine quality " + quality;
				
		return result;
		
	}

	@Override
	public String checkAge() {
		// TODO Auto-generated method stub
		String result = "TEngin age" +age;
		return result;

	}

}
