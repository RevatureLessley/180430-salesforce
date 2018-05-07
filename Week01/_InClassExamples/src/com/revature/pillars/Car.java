package com.revature.pillars;

/*
 * When you make an abstract class, you put the class in a state where it may
 * never be instantiated. This allows us to provide methods without implementation.
 * Bare in mind, we ARE allowed to provide concrete methods (IE has implementation).
 * The purpose of an abstract class is to provide a class that you want all children to inherit
 * its methods from.
 */
public abstract class Car {
	private int speed;
	public String drive(){
		return "Driving forward at " + speed + "MPH...";
	}
	
	public void setSpeed(int speed){
		this.speed = speed;
	}
	
	public abstract String vehicleCheck();
	
	abstract boolean hasSideAirBags();
	//The abstract keyword for methods enforces that the first non abstract class
	//that inherits this class MUST implement.
	abstract boolean hasTruckBed();
}

/*
	Interface vs Abstract Class\
	-Both can have, both, concrete and abstract methods (As java 8)
	-As well both can NOT be instantiated as a standalone.
	-Interfaces are typically used for actions that should be required for for children.
		whereas abstract classes are typically used as a class to be extended from with base
		functionality that can be used.
	-Abstract classes are extended, interfaces are implemented
	-You can only extend ONE abstract class, but as many interfaces as you want...
*/