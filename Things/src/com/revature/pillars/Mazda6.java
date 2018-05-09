package com.revature.pillars;

public class Mazda6 extends Car{
	
	/*
	 * Covariance
	 * 
	 * these are all has-a relationships
	 * 		
	 * A has-a relationship means that the class has a dependency on another class that
	 * is, typically, NOT a part of the family hierarchy.
	 * There is also a is-a relationship, which is determined via the 'extends'
	 * So in short, Mazda6 'is-a' Car, and it has-a (all those parts below)
	 */
	CarPart engine;
	CarPart transmission;
	CarPart muffler;
	Wheel[] wheels = new Wheel[4];
	
	public Mazda6(CarPart engine, CarPart transmission, CarPart muffler, Wheel wheel1, Wheel wheel2, Wheel wheel3, Wheel wheel4) {
		this.engine = engine;
		this.transmission = transmission;
		this.muffler = muffler;
		this.wheels[0] = wheel1;
		this.wheels[1] = wheel2;
		this.wheels[2] = wheel3;
		this.wheels[3] = wheel4;
	}

	@Override
	boolean hasSideAirbags() {
		return false;
	}

	@Override
	boolean hasTruckbed() {
		return false;
	}
	
	@Override
	public String vehicleCheck() {
		String result = "";
		result += engine.checkQuality() + "\n";
		result += transmission.checkQuality() + "\n";
		result += muffler.checkQuality() + "\n";
		result += wheels[0].checkQuality() + "\n";
		result += wheels[1].checkQuality() + "\n";
		result += wheels[2].checkQuality() + "\n";
		result += wheels[3].checkQuality();
		return result;
	}
	
}
