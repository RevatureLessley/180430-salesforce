package com.revature.pillars;

public class Mazda6 extends Car {
	
	//covariance in action
	CarPart engine = new Engine();
	
	
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
	
}
