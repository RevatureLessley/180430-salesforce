package com.revature.pillars;

//INHERITANCE
public class Transmission implements CarPart {
	//ENCAPSULATION
	private int age;
	private String quality;
	
	public Transmission(String theQuality, int theAge) {
		this.age = theAge;
		this.quality = theQuality;
	}
	
	//POLYMORPHISM 
	@Override
	public String checkQuality() {
		String result = "Transmission quality " + quality;
				
		return result;
		
	}

	@Override
	public String checkAge() {
		// TODO Auto-generated method stub
		String result = "Transmission age" +age;
		return result;

	}

}
