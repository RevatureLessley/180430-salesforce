package com.revature.pillars;

/*
 * when you make an abstract class, you put the class in a state where it may
 * never be instantiated. this allows us to provide methods without implementation.
 * bare in mind: we ARE allowed to provide concrete methods (implement them).
 * the purpose of an abstract class is to provide a class that you want all children to inherit
 * their methods from.
 */
public abstract class Car {
	
	private int speed;
	
	public String drive() {
		return "Driving forward at " + speed + "MPH...";
	}
	
	/*
	 * the abstract keyword for methods enforces that the first non-abstract class that inherits this class MUST implement these methods
	 */
	abstract boolean hasSideAirbags();
	abstract boolean hasTruckbed();
	
	/*
	 * INTERFACE vs. ABSTRACT CLASS
	 * 		both can have both concrete and abstract methods (java 8 and on)
	 * 		both can NOT be instantiated as stand-alone classes
	 * 		interfaces are typically used for actions that should be required for the children
	 * 		abstract classes are typically used as classes to be extended from, with base functionality that can be used
	 * 		you can extend ONE abstract class, but MANY interfaces
	 * 			Java does not support multiple inheritance
	 */
	
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	
	public abstract String vehicleCheck();


}
