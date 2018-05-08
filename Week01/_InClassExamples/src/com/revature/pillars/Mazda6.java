package com.revature.pillars;

public class Mazda6 extends car{
	//Covariance in action!
	//These are all has-a relationships.
	/*
	 * A has-a relationship means that the class has a dependency on another class that
	 * is, typically, NOT a part of the family hierachy.
	 * There is also a is-a relationship, which is determined via the 'extends'
	 * So in short, Mazda6 'is-a' Car, and it has-a (all those parts below)
	 */
	CarPart engine;
	CarPart transmission ;
	Wheel[] wheels = new Wheel[4];
	CarPart muffler;
	/*
	 * A has-a relationship means that the class has a dependency 
	 */

	public Mazda6(CarPart theengine,CarPart thetransmission,CarPart muffler, 
			Wheel theWheel1, Wheel theWheel2, Wheel theWheel3, Wheel theWheel4) {
		this.engine = theengine;
		this.transmission = thetransmission;
		this.muffler = muffler;
		wheels[0] = theWheel1;
		wheels[1]  = theWheel2;
		wheels[2]  = theWheel3;
		wheels[3]  = theWheel4;

	}

	@Override
	boolean hasSideAirBags() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	boolean hasTruckBed() {
		// TODO Auto-generated method stub
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
		result += wheels[3].checkQuality() + "\n";
		return result;
	}

}
